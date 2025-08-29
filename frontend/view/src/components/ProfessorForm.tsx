import { useState } from "react";
import styles from "./Form.module.css";
import axios from "axios";

export function ProfessorForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    const professorData = { name, email, departamento };

    try {
      await axios.post("http://localhost:8080/professores", professorData, {
        headers: { "Content-Type": "application/json" }
      });
      setSuccess(true);
      setError("");
      setName("");
      setEmail("");
      setDepartamento("");
    } catch (err) {
      console.error(err);
      setError("Erro ao cadastrar professor. Verifique os dados.");
      setSuccess(false);
    }
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

      {success && <p style={{ color: "green" }}>Professor cadastrado com sucesso!</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
