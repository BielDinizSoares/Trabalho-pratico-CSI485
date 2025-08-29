

import { Header } from "../components/Header"
import { KeyButtonsList } from "../components/KeyButtonsList"
import { SearchBar } from "../components/SearchBar"
import { TaskForm } from "../components/TaskForm"



export function DisciplinaProfessor(){
    return (
        <div>
            <Header pageName="Página dos professores" />
            <h1>Disciplina</h1>
            <KeyButtonsList items={[
                { title: "Título 1", description: "Descrição 1" },
                { title: "Título 2", description: "Descrição 2" },
                { title: "Título 3", description: "Descrição 3" },
            ]} />

            <TaskForm onAddTask={(task) => console.log(task)} />
            <SearchBar />
        </div>
    )
}
