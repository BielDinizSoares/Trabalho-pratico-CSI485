import styles from "./DisciplinaList.module.css"
import axios from "axios"
import { useEffect, useState } from "react"

interface Disciplina {
  id: number
  name: string
  carga_horaria: number
  id_professor: number
  professor_name?: string // opcional, se quiser mostrar
}

interface DisciplinaListProps {
  onAddAluno: (disciplinaId: number) => void
  onDelete: (disciplinaId: number) => void
}

export function ProfessorDisciplinaList({ onAddAluno, onDelete }: DisciplinaListProps) {
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([])

  useEffect(() => {
    axios.get<Disciplina[]>("http://localhost:8080/{disciplinaId}/{}")
      .then(res => setDisciplinas(res.data))
      .catch(err => console.error("Erro ao carregar disciplinas:", err))
  }, [])

  return (
    <div className={styles.list}>
      <h2>Lista de Disciplinas</h2>
      {disciplinas.length > 0 ? (
        <ul>
          {disciplinas.map(d => (
            <li key={d.id} className={styles.item}>
              <div className={styles.info}>
                <strong>{d.name}</strong>
                <span>Carga horária: {d.carga_horaria}h</span>
                <span>Professor: {d.professor_name ?? d.id_professor}</span>
              </div>
              <button onClick={() => onAddAluno(d.id)}>Adicionar Aluno</button>
              <button onClick={() => onDelete(d.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sem disciplinas cadastradas</p>
      )}
    </div>
  )
}
