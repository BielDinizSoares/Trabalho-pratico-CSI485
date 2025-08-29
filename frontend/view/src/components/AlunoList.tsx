import styles from "./AlunoList.module.css"
import axios from "axios"
import { useEffect, useState } from "react"

interface Aluno {
  id: number
  name: string
  matricula: string
}

interface AlunoListProps {
  onDelete: (alunoId: number) => void
}

export function AlunoList({ onDelete }: AlunoListProps) {
  const [alunos, setAlunos] = useState<Aluno[]>([])

  useEffect(() => {
    axios.get<Aluno[]>("http://localhost:8080/alunos")
      .then(res => setAlunos(res.data))
      .catch(err => console.error("Erro ao carregar alunos:", err))
  }, [])

  return (
    <div className={styles.list}>
      <h2>Lista de Alunos</h2>
      {alunos.length > 0 ? (
        <ul>
          {alunos.map(a => (
            <li key={a.id} className={styles.item}>
              <div className={styles.info}>
                <strong>{a.name}</strong>
                <span>Matrícula: {a.matricula}</span>
              </div>
              <button onClick={() => onDelete(a.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sem alunos cadastrados</p>
      )}
    </div>
  )
}
