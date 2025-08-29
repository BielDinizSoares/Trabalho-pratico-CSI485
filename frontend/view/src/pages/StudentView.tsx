import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../components/Header";
import { useNavigate, useLocation } from "react-router-dom";

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
  const location = useLocation();

  const alunoId = location.state?.id;

  useEffect(() => {
    if(!alunoId) return
    axios.get<Aluno>(`http://localhost:8080/alunos/${alunoId}`)
      .then(res => setAluno(res.data))
      .catch(err => console.error("Erro ao buscar aluno:", err));

    // Pega disciplinas
    axios.get<Disciplina[]>(`http://localhost:8080/alunos/${alunoId}/disciplinas`)
      .then(res => setAluno(prev => prev ? { ...prev, disciplinas: Array.isArray(res.data) ? res.data : [] } : null))
      .catch(err => console.error("Erro ao buscar disciplinas:", err));

    // Pega todos os professores
    axios.get("http://localhost:8080/professores")
      .then(res => {
        
        const profArray = Array.isArray(res.data) ? res.data : (res.data.professores ?? []);
        setProfessores(profArray);
      })
      .catch(err => console.error("Erro ao buscar professores:", err));
  }, [alunoId]);

   if (!alunoId) return <p>ID do aluno não encontrado. Volte para o login.</p>;
  if (!aluno) return <p>Carregando...</p>;

  return (
    <div>
      <Header pageName="Página de Alunos" />
      <button onClick={() => navigate("/")}>
        Sair
      </button>

      <h2>Disciplinas</h2>
      {(aluno.disciplinas?.length ?? 0) > 0 ? (
        aluno.disciplinas!.map(d => {
          const prof = Array.isArray(professores)
            ? professores.find(p => p.id === d.professorId)
            : undefined;

          return (
            <div key={d.id}>
              <h3>
                {d.name}
              </h3>
              <ul>
                {(d.tarefas?.length ?? 0) > 0 ? (
                  d.tarefas!.map(t => (
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
        <ul>
          {professores.map(p => <li key={p.id}>{p.name}</li>)}
        </ul>
      ) : (
        <p>Sem professores</p>
      )}
    </div>
  );
}
