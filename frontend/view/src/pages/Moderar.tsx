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

  // deletar professor (passado para o ProfessorList)
  async function handleProfessorDelete(id: number) {
    try {
      await axios.delete(`http://localhost:8080/professores/${id}`)
      console.log("Professor excluído:", id)
      // o ProfessorList ainda vai mostrar os dados antigos porque ele não se atualiza sozinho
      // se quiser, dá pra emitir um evento ou recarregar no ProfessorList
    } catch (err) {
      console.error("Erro ao excluir professor:", err)
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
        {/* <AlunoList alunos={[]} onDelete={(id) => console.log("Excluir aluno:", id)} /> */}
        
        {/* ProfessorList espera onDelete como prop */}
        <ProfessorList onDelete={handleProfessorDelete} />
      </div>
    </>
  )
}
