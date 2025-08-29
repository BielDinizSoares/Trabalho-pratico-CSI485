import { useState } from "react"
import styles from "./Form.module.css"
import axios from "axios"

export function DisciplinaForm() {
  const [name, setName] = useState("")
  const [idProfessor, setIdProfessor] = useState("")
  const [cargaHoraria, setCargaHoraria] = useState("")
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !idProfessor.trim()) return

    const disciplinaData = {
      name,
      id_professor: parseInt(idProfessor),
      carga_horaria: parseInt(cargaHoraria) || 0,
    }

    try {
      await axios.post("http://localhost:8080/disciplinas", disciplinaData, {
        headers: { "Content-Type": "application/json" }
      })
      setSuccess(true)
      setError("")
      setName("")
      setIdProfessor("")
      setCargaHoraria("")
    } catch (err) {
      console.error(err)
      setError("Erro ao cadastrar disciplina. Verifique os dados.")
      setSuccess(false)
    }
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

      {success && <p style={{ color: "green" }}>Disciplina cadastrada com sucesso!</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  )
}
