import { Header } from "../components/Header"
import  { KeyButtons } from "../components/KeyButtons"
import { ProfessorDisciplinaList } from "../components/ProfessoresDisciplinas"
import { SearchBar } from "../components/SearchBar"



export function ProfessorView(){
    return (
        <div>
            <Header pageName="Página dos professores" />
        
            <ProfessorDisciplinaList onAddAluno={() => {}} onDelete={() => {}} />
          
        
        </div>
    )
}
