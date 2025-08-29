import { useState } from "react"
import styles from "./Form.module.css"

interface ProfessorFormProps {
  onSubmit: (data: { name: string; email: string; departamento: string }) => void
}

export function ProfessorForm({ onSubmit }: ProfessorFormProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [departamento, setDepartamento] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return
    onSubmit({ name, email, departamento })
    setName("")
    setEmail("")
    setDepartamento("")
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Cadastrar Professor</h2>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Departamento"
        value={departamento}
        onChange={(e) => setDepartamento(e.target.value)}
      />
      <button type="submit">Salvar</button>
    </form>
  )
}
