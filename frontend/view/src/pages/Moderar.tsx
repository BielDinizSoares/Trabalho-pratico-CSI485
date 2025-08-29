import axios from "axios"
import { AlunoForm } from "../components/AlunoForm"
import { AlunoList } from "../components/AlunoList"
import { DisciplinaForm } from "../components/DisciplinaForm"
import { DisciplinaList } from "../components/DisciplinaList"
import { ProfessorList } from "../components/ProfessorList"
import { Header } from "../components/Header"
import { ProfessorForm } from "../components/ProfessorForm"
import styles from "./Moderar.module.css"

export function Moderar() {

  async function handleAlunoSubmit(data: { matricula: string; name: string }) {
    await axios.post("http://localhost:8080/alunos", { ...data, disciplinas: [] }, {
      headers: { "Content-Type": "application/json" }
    })
  }

  async function handleAlunoDelete(id: number) {
    try {
      await axios.delete(`http://localhost:8080/alunos/${id}`)
      console.log("Aluno excluído:", id)
    } catch (err) {
      console.error("Erro ao excluir aluno:", err)
    }
  }


  async function handleProfessorDelete(id: number) {
    try {
      await axios.delete(`http://localhost:8080/professores/${id}`)
      console.log("Professor excluído:", id)
   
    } catch (err) {
      console.error("Erro ao excluir professor:", err)
    }
  }

  async function handleDisciplinaSubmit(data: { name: string; id_professor: number; carga_horaria: number }) {
    await axios.post("http://localhost:8080/disciplinas", data, {
      headers: { "Content-Type": "application/json" }
    })
  }

  async function handleDisciplinaDelete(id: number) {
    try {
      await axios.delete(`http://localhost:8080/disciplinas/${id}`)
      console.log("Disciplina excluída:", id)
    } catch (err) {
      console.error("Erro ao excluir disciplina:", err)
    }
  }

  return (
    <>
      <Header pageName="Moderação" />

      <div className={styles.formsContainer}>
        <AlunoForm onSubmit={handleAlunoSubmit} />
        <ProfessorForm onSubmit={(data) => console.log("Professor:", data)} />
        <DisciplinaForm onSubmit={(data) => console.log("Disciplina:", data)} />
      </div>

      <div className={styles.listsContainer}>
        <DisciplinaList
          disciplinas={[]}
          onAddAluno={(id) => console.log("Adicionar aluno disciplina:", id)}
          onDelete={(id) => console.log("Excluir disciplina:", id)}
        />
        <AlunoList onDelete={handleAlunoDelete} />

       
        <ProfessorList onDelete={handleProfessorDelete} />
      </div>
    </>
  )
}
