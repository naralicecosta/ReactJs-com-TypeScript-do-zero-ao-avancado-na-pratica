import { Link } from 'react-router-dom'
import * as React from "react"

export function Sobre (){
    return(
        <>
            <div>
                <h1>Página sobre!</h1>
            </div>
            <Link to="/home">ir para a pagina home</Link>
        </>
    )
}