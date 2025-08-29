import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [role, setRole] = useState("aluno"); // aluno | professor | moderador
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

        if (role === "aluno") navigate("/students");
        if (role === "professor") navigate("/professor");
        if (role === "moderador") navigate("/");
      }
    } catch (error) {
      alert("Usuário não encontrado!");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="aluno">Aluno</option>
        <option value="professor">Professor</option>
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
