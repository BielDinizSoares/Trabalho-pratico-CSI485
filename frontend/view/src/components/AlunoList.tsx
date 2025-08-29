import styles from "./AlunoList.module.css"

interface Aluno {
  id: number
  matricula: string
  name: string
}

interface AlunoListProps {
  alunos: Aluno[]
  onDelete: (alunoId: number) => void
}

export function AlunoList({ alunos, onDelete }: AlunoListProps) {
  return (
    <div className={styles.list}>
      <h2>Lista de Alunos</h2>
      {alunos.length === 0 ? (
        <p>Nenhum aluno cadastrado.</p>
      ) : (
        <ul>
          {alunos.map((a) => (
            <li key={a.id} className={styles.item}>
              <div className={styles.info}>
                <strong>{a.name}</strong>
                <span>Matrícula: {a.matricula}</span>
              </div>
              <button className={styles.delete} onClick={() => onDelete(a.id)}>
                Excluir
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
