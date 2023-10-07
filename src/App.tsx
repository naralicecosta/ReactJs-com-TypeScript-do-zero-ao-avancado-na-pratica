import { Header } from "./components/Header"
import { Aluno } from "./components/Aluno"

export default function App(){
//no return fica tudo que ireemos retornar, o que queremos renderizar
return(
  <div>
    <Header />
    
     {/**passando propriedades dentro do componente */}
    <Aluno nome='naralice' idade={20}/>

    <Aluno nome='Alison' idade={20}/>
    <Aluno  nome='Nathy' idade={18}/>
  </div>

)
}

//precisamos falar que vamos receber o nome como propriedade, para isso temos que criar tipagens
//e dentro da interface colocamos o que esperamos que entre
//propriedade
interface AlunoProps {
nome: string
idade: number
}
//componente aluno
function Aluno({nome, idade}: AlunoProps){
  //como retornar esse dado?? procure pela tag <aluno/>
  return(
    <div>

    <h1>Aluno: {nome}</h1>
    <h3>Idade: {idade}</h3>
        </div>

  )
}