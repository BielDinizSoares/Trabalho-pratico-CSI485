import { Header } from "../components/Header"
import  { KeyButtons } from "../components/KeyButtons"
import { SearchBar } from "../components/SearchBar"



export function StudentView(){
    return (
        <div>
            <Header pageName="Página de Alunos" />
            <h1>Turmas</h1>
            <KeyButtons title="Título" setTitle={() => {}} description="Descrição" setDescription={() => {}} />
            <SearchBar />
        </div>
    )
}
