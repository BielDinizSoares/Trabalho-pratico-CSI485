import { useState } from "react"

import { Header } from "../components/Header"
import { KeyButtonsList } from "../components/KeyButtonsList"


// interface DisciplinaProps{
//     Disciplina: string
// }

export function DisciplinaAluno(){//passar disciplinaprops aqui

    return (
        <div>
            <Header pageName="Disciplinas" />
       
            <KeyButtonsList items={[
                { title: "Título 1", description: "Descrição 1" },
                { title: "Título 2", description: "Descrição 2" },
                { title: "Título 3", description: "Descrição 3" },
            ]} />

        </div>
    )
}

        

