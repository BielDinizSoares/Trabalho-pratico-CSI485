import { Header } from "../components/Header"
import  { KeyButtons } from "../components/KeyButtons"
import { SearchBar } from "../components/SearchBar"



export function ProfessorView(){
    return (
        <div>
            <Header pageName="Página dos professores" />
            <h1>Turmas</h1>
            <KeyButtons title="Título" setTitle={() => {}} description="Descrição" setDescription={() => {}} />
            <SearchBar />
        </div>
    )
}
