import { AlunoForm } from "../components/AlunoForm"
import { AlunoList } from "../components/AlunoList"
import { DisciplinaForm } from "../components/DisciplinaForm"
import { DisciplinaList } from "../components/DisciplinaList"
import { ProfessorList } from "../components/ProfessorList"
import { Header } from "../components/Header"
import { ProfessorForm } from "../components/ProfessorForm"

import styles from "./Moderar.module.css"

export function Moderar() {
  return (
    <>
 <Header pageName="Moderação" />

      <div className={styles.formsContainer}>
        

        <AlunoForm onSubmit={(data) => console.log("Aluno:", data)} />
        <ProfessorForm onSubmit={(data) => console.log("Professor:", data)} />
        <DisciplinaForm onSubmit={(data) => console.log("Disciplina:", data)} />
      </div>

      <div className={styles.listsContainer}>
        <DisciplinaList
          disciplinas={[]}
          onAddAluno={(id) => console.log("Adicionar aluno disciplina:", id)}
          onDelete={(id) => console.log("Excluir disciplina:", id)}
        />
        <AlunoList alunos={[]} onDelete={(id) => console.log("Excluir aluno:", id)} />
        <ProfessorList
          professores={[]}
          onDelete={(id) => console.log("Excluir professor:", id)}
        />
      </div>
  
    </>
    
  )
}
