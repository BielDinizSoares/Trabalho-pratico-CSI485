import styles from "./ProfessorList.module.css"

export interface Professor {
  id: number
  name: string
  email?: string       
  departamento?: string 
}

interface ProfessorListProps {
  professores: Professor[]
  onDelete: (professorId: number) => void
}

export function ProfessorList({ professores, onDelete }: ProfessorListProps) {
  return (
    <div className={styles.list}>
      <h2>Lista de Professores</h2>
      {professores.length === 0 ? (
        <p>Nenhum professor cadastrado.</p>
      ) : (
        <ul>
          {professores.map((p) => (
            <li key={p.id} className={styles.item}>
              <div className={styles.info}>
                <strong>{p.name}</strong>
                <span>{p.email ?? "Sem email"}</span>
                <span>Depto: {p.departamento ?? "Não informado"}</span>
              </div>
              <button
                className={styles.delete}
                onClick={() => onDelete(p.id)}
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
