import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { KeyButtons } from "../components/KeyButtons";
import { SearchBar } from "../components/SearchBar";
import styles from "../components/ProfessorView.module.css"; // importa o CSS modular

// Tipagem do aluno
interface Aluno {
  id: number;
  name: string;
  matricula: string;
}

export function ProfessorView() {
  const [alunos, setAlunos] = useState<Aluno[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/alunos")
      .then((res) => res.json())
      .then((data) => setAlunos(data))
      .catch((error) => console.error("Erro ao carregar alunos:", error));
  }, []);

  return (
    <div className={styles.container}>
      <Header pageName="Página de Professor" />
      <h1 className={styles.title}>Alunos</h1>

    

      <h2 className={styles.subtitle}>Lista de Alunos</h2>
      {alunos.length > 0 ? (
        <ul className={styles.list}>
          {alunos.map((aluno) => (
            <li key={aluno.id} className={styles.item}>
              <strong>{aluno.name}</strong> - Matrícula: {aluno.matricula}
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.empty}>Nenhum aluno encontrado.</p>
      )}
    </div>
  );
}
