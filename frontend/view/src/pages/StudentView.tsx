import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import "../components/StudentViewModule.css";

interface Professor {
  id: number;
  name: string;
}

interface Tarefa {
  id: number;
  titulo: string;
  descricao: string;
}

interface Disciplina {
  id: number;
  name: string;
  professorId?: number;
  tarefas?: Tarefa[];
}

interface Aluno {
  id: number;
  name: string;
  disciplinas?: Disciplina[];
}

export function StudentView() {
  const [aluno, setAluno] = useState<Aluno | null>(null);
  const [professores, setProfessores] = useState<Professor[]>([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const alunoId = Number(id);

  useEffect(() => {
    if (!alunoId) return;

    // Busca aluno e disciplinas ao mesmo tempo
    const alunoPromise = axios.get<Aluno>(`http://localhost:8080/alunos/${alunoId}`);
    const disciplinasPromise = axios.get<Disciplina[]>(`http://localhost:8080/alunos/${alunoId}/disciplinas`);

    Promise.all([alunoPromise, disciplinasPromise])
      .then(([alunoRes, disciplinasRes]) => {
        setAluno({
          ...alunoRes.data,
          disciplinas: Array.isArray(disciplinasRes.data) ? disciplinasRes.data : []
        });
      })
      .catch(err => console.error("Erro ao buscar aluno ou disciplinas:", err));

    // Busca professores separadamente
    axios.get<Professor[]>("http://localhost:8080/professores")
      .then(res => setProfessores(Array.isArray(res.data) ? res.data : []))
      .catch(err => console.error("Erro ao buscar professores:", err));
  }, [alunoId]);

  if (!alunoId) return <p>ID do aluno não encontrado. Volte para o login.</p>;
  if (!aluno) return <p>Carregando...</p>;

  const disciplinas = aluno.disciplinas ?? [];

  return (
    <div className="student-view">
      <Header pageName="Página de Alunos" />
      <button className="logout-button" onClick={() => navigate("/")}>
        Sair
      </button>

      <h2>Disciplinas</h2>
      {disciplinas.length > 0 ? (
        disciplinas.map(d => {
          const prof = professores.find(p => p.id === d.professorId);
          const tarefas = d.tarefas ?? [];

          return (
            <div key={d.id} className="disciplina">
              <h3>{d.name}</h3>
              {prof && <p>Professor: {prof.name}</p>}
              <ul className="tarefas">
                {tarefas.length > 0 ? (
                  tarefas.map(t => (
                    <li key={t.id}>{t.titulo}: {t.descricao}</li>
                  ))
                ) : (
                  <li>Sem tarefas</li>
                )}
              </ul>
            </div>
          );
        })
      ) : (
        <p>Sem disciplinas</p>
      )}

      <h2>Professores</h2>
      {professores.length > 0 ? (
        <ul className="professor-list">
          {professores.map(p => <li key={p.id}>{p.name}</li>)}
        </ul>
      ) : (
        <p>Sem professores</p>
      )}
    </div>
  );
}
