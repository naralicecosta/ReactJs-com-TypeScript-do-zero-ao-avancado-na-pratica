import './Header.css'

interface HeaderProps{
    title?: string //a ? diz que a propriedade é opcional
}
export function Header ({title = "curso react + typescript"}: HeaderProps){ //estou falando que o componente vai seguir a tipagem HeaderProps
    //explicando {title = "curso react + typescript"} / se não for passado nada no comp. a pagina vai começar com o nome do title
    return(
        <header className='header'>
            <h1 className='title'>{title}</h1>

            <hr />
        </header>
    )
}
