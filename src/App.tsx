import { useState } from "react"

interface InfoAlunoProps{
  nome: string,
  idade: string
}
export default function App(){
  const [input, setInput] = useState('') //dentro do () fica o valor inicial que queremos
  //input acessar o valor e o setInput para quando queremos trocar o valor
  //const [aluno, setAluno] = useState('')
  const [idade, setIdade] = useState('' )
  //const [alunoIdade, setAlunoIdade] = useState('')

  //criamos uma interface para não ficar fzendo vários estados
  const[infoAluno, setInfoAluno] = useState<InfoAlunoProps>()

  const [contador, setContador] = useState(0)


  function mostrarAluno(){
    setInfoAluno({
      nome: input,
      idade: idade
    })

    //setAluno(input)
    //setAlunoIdade(idade)
  }
  function adicionar(){
    setContador(valorAtual => valorAtual+1)

  }
  function diminuir(){
    //para não aparecer -1-2-3
    if(contador===0){
      return;
    }
    setContador(valorAtual => valorAtual-1)

  }
return(
  <div>
    <h1>Conhecendo useState</h1>
    <input  placeholder="Digite um nome"
    value={input}
    onChange={(e) =>setInput(e.target.value) } //dispara um evento
    />


    <input placeholder='digite a idade'
    value={idade}
    onChange={(e) => setIdade(e.target.value)} />

    <br /><br />

    <button onClick={mostrarAluno}>Mostrar aluno</button>

    <hr />

    <h3>Bem vindo:{infoAluno?.nome}</h3>
    <h4>idade:{infoAluno?.idade}</h4>

    <hr />
    <br />
    <h1>Contador com useState</h1>

    {/**vamos criar uma usestate para adc dinamicidade */}
    {/**onclick para adiconar as ações */}
    <button onClick={adicionar}>+</button> {contador} <button onClick={diminuir}>-</button>
    
  </div>

)
}