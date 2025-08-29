import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../components/Header";

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

  useEffect(() => {
    // pega aluno
    axios.get<Aluno>("http://localhost:8080/alunos/3")
      .then(res => setAluno(res.data))
      .catch(err => console.error(err));

    // pega disciplinas
    axios.get<Disciplina[]>("http://localhost:8080/alunos/3/disciplinas")
      .then(res => setAluno(prev => prev ? { ...prev, disciplinas: res.data } : null))
      .catch(err => console.error(err));

    // pega todos os professores
    axios.get<Professor[]>("http://localhost:8080/professores")
      .then(res => setProfessores(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!aluno) return <p>Carregando...</p>;

  return (
    <div>
      <Header pageName="Página de Alunos" />

      <h2>Disciplinas</h2>
      {(aluno.disciplinas?.length ?? 0) > 0 ? (
        aluno.disciplinas!.map(d => {
          
          const prof = professores.find(p => p.id === d.professorId);
          return (
            <div key={d.id}>
              <h3>{d.name}</h3>
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
