import styles from "./DisciplinaList.module.css"

interface Disciplina {
  id: number
  name: string
  carga_horaria: number
  id_professor: number
}

interface DisciplinaListProps {
  disciplinas: Disciplina[]
  onAddAluno: (disciplinaId: number) => void
  onDelete: (disciplinaId: number) => void
}

export function DisciplinaList({ disciplinas, onAddAluno, onDelete }: DisciplinaListProps) {
  return (
    <div className={styles.list}>
      <h2>Lista de Disciplinas</h2>
      {disciplinas.length === 0 ? (
        <p>Nenhuma disciplina cadastrada.</p>
      ) : (
        <ul>
          {disciplinas.map((d) => (
            <li key={d.id} className={styles.item}>
              <div className={styles.info}>
                <strong>{d.name}</strong> ({d.carga_horaria}h)  
                <span>ID Professor: {d.id_professor}</span>
              </div>
              <div className={styles.actions}>
                <button onClick={() => onAddAluno(d.id)}>+ Adicionar Aluno</button>
                <button className={styles.delete} onClick={() => onDelete(d.id)}>
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
