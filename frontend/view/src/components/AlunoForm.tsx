import { useState } from "react"
import styles from "./Form.module.css"

interface AlunoFormProps {
  onSubmit: (data: { matricula: string; name: string }) => void
}

export function AlunoForm({ onSubmit }: AlunoFormProps) {
  const [matricula, setMatricula] = useState("")
  const [name, setName] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim()) return
    onSubmit({ matricula, name })
    setMatricula("")
    setName("")
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Cadastrar Aluno</h2>
      <input
        type="text"
        placeholder="Matrícula"
        value={matricula}
        onChange={(e) => setMatricula(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Salvar</button>
    </form>
  )
}
