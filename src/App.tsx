import { Header } from "./components/Header"
import { Aluno } from "./components/Aluno"
import { Footer } from "./components/Footer"

export default function App(){
//no return fica tudo que ireemos retornar, o que queremos renderizar
return(
  <div>
    <Header title=" aprendendo do zero ao avançado curso react+typescript" />
    
     {/**passando propriedades dentro do componente */}
    <Aluno nome='naralice' idade={20}/>

    <Aluno nome='Alison' idade={20}/>
    <Aluno  nome='Nathy' idade={18}/>

    <Footer />
  </div>

)
}