import { Header } from "../components/Header"
import  { KeyButtons } from "../components/KeyButtons"
import { SearchBar } from "../components/SearchBar"



export function StudentView(){
    return (
        <div>
            <Header pageName="Gerenciamento de Alunos" />
            <KeyButtons title="Título" setTitle={() => {}} description="Descrição" setDescription={() => {}} />
            <SearchBar />
        </div>
    )
}
