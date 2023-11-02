import { Link } from "react-router-dom"
import React from "react"
import { Header } from "../../components/header"
export function Home(){
    return(
        <div>
            <Header />
            <h1>Bem vindo a página Home!</h1>
            <span>Essa é minha página com navegação</span>

            <br />
            <Link to="/sobre">Sobre </Link><br/>
            <Link to='/contato'>Conato</Link>
        </div>
    )
}