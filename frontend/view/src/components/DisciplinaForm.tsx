import { useState } from "react"
import styles from "./Form.module.css"

interface DisciplinaFormProps {
  onSubmit: (data: { name: string; id_professor: number; carga_horaria: number }) => void
}

export function DisciplinaForm({ onSubmit }: DisciplinaFormProps) {
  const [name, setName] = useState("")
  const [idProfessor, setIdProfessor] = useState("")
  const [cargaHoraria, setCargaHoraria] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !idProfessor) return
    onSubmit({
      name,
      id_professor: parseInt(idProfessor),
      carga_horaria: parseInt(cargaHoraria) || 0,
    })
    setName("")
    setIdProfessor("")
    setCargaHoraria("")
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Cadastrar Disciplina</h2>
      <input
        type="text"
        placeholder="Nome da disciplina"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="ID do Professor"
        value={idProfessor}
        onChange={(e) => setIdProfessor(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Carga Horária"
        value={cargaHoraria}
        onChange={(e) => setCargaHoraria(e.target.value)}
      />
      <button type="submit">Salvar</button>
    </form>
  )
}
