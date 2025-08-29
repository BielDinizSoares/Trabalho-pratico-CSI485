import { useEffect, useState } from "react"
import styles from "./ProfessorList.module.css"
import axios from "axios";

export interface Professor {
  id: number
  name: string
  email?: string       
  departamento?: string 
}

interface ProfessorListProps {
  onDelete: (professorId: number) => void
}

export function ProfessorList({ onDelete }: ProfessorListProps) {
  const [professores, setProfessores] = useState<Professor[]>([]);

  useEffect(() => {
    axios.get<Professor[]>("http://localhost:8080/professores")
      .then(res => setProfessores(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className={styles.list}>
      <h2>Professores</h2>
      {professores.length > 0 ? (
        <ul>
          {professores.map(p => (
            <li key={p.id} className={styles.item}>
                <div className={styles.info}></div>
          <strong>{p.name}</strong>
                
                <span>Departamento: {p.departamento}</span>
              <button onClick={() => onDelete(p.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sem professores</p>
      )}
    </div>
  )
}
