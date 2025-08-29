import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [role, setRole] = useState("alunos"); // aluno | professor | moderador
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!id) {
      alert("Digite o ID!");
      return;
    }

    try {
      const res = await axios.get(`http://localhost:8080/${role}/${id}`);

      if (res.data) {
        alert("Login realizado com sucesso!");

        if (role === "alunos") navigate("/students", { state: { id } });
        if (role === "professores") navigate("/professor");
        if (role === "moderador") navigate("/moderator");
      }
    } catch (error) {
      alert("Usuário não encontrado!");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="alunos">Aluno</option>
        <option value="professores">Professor</option>
        <option value="moderador">Moderador</option>
      </select>

      <input
        type="text"
        placeholder="Digite o ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default LoginPage;
