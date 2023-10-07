import { useState } from "react"
export default function App(){
  const [input, setInput] = useState('') //dentro do () fica o valor inicial que queremos
  //input acessar o valor e o setInput para quando queremos trocar o valor
  const [aluno, setAluno] = useState('')
  const [idade, setIdade] = useState('' )
  function mostrarAluno(){
    setAluno(input)
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

    <h3>Bem vindo:{aluno}</h3>
    <h2>sua idade é: {idade}</h2>
    
  </div>

)
}