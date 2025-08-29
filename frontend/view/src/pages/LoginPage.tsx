import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "../components/Login.module.css";


function LoginPage() {
  const [role, setRole] = useState("alunos"); // aluno | professor | moderador
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!id) {
      alert("Digite o ID ou senha!");
      return;
    }

    if (role === "moderador") {
      if (id === "1234") {
        alert("Login de moderador realizado com sucesso!");
        navigate("/moderator");
      } else {
        alert("Senha de moderador incorreta!");
      }
      return;
    }

    try {
      const res = await axios.get(`http://localhost:8080/${role}/${id}`);

      if (res.data) {
        alert("Login realizado com sucesso!");

        if (role === "alunos") navigate(`/students/${id}`);
        if (role === "professores") navigate("/professor");
        
      }
    } catch (error) {
      alert("Usuário não encontrado!");
    }
  };

  return (
    <div className={styles["login-page"]}>
      <h1>Login</h1>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="alunos">Aluno</option>
        <option value="professores">Professor</option>
        <option value="moderador">Moderador</option>
      </select>

      <input
        type={role === "moderador" ? "password" : "text"}
          placeholder={role === "moderador" ? "Digite a senha" : "Digite o ID"}
          value={id}
          onChange={(e) => setId(e.target.value)}
      />

      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default LoginPage;
