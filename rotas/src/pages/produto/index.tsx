import React from "react"
import { useParams } from "react-router-dom"

export function Produto(){
    const { id } = useParams(); // ter rotas dinamicas e passar pelo parametro, quando digita algo na url aparece na página
    return(
        <div>
            <h1>bem vindo ao proputo {id}</h1>
        </div>
    )
}