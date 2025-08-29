import axios from "axios"
import { AlunoForm } from "../components/AlunoForm"
import { AlunoList } from "../components/AlunoList"
import { DisciplinaForm } from "../components/DisciplinaForm"
import { DisciplinaList } from "../components/DisciplinaList"
import { ProfessorList } from "../components/ProfessorList"
import { Header } from "../components/Header"
import { ProfessorForm } from "../components/ProfessorForm"
import styles from "./Moderar.module.css"

export function ListarAlunos() {

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



  return (
    <>
      <Header pageName="Moderação" />

     

      <div className={styles.listsContainer}>
        
        <AlunoList onDelete={handleAlunoDelete} />


        
      </div>
    </>
  )
}
