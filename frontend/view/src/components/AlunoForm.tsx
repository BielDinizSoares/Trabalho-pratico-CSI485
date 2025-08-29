import { useState } from "react"
import styles from "./Form.module.css"

interface AlunoFormProps {
  onSubmit: (data: { matricula: string; name: string }) => Promise<void>
}

export function AlunoForm({ onSubmit }: AlunoFormProps) {
  const [matricula, setMatricula] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      await onSubmit({ matricula, name }) // chama o pai
      setMatricula("")
      setName("")
      setMessage("✅ Aluno cadastrado com sucesso!")
      setTimeout(() => setMessage(""), 3000)
    } catch (error) {
      setMessage("❌ Erro ao cadastrar aluno")
      setTimeout(() => setMessage(""), 3000)
    }
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

      {message && <p className={styles.message}>{message}</p>}
    </form>
  )
}
