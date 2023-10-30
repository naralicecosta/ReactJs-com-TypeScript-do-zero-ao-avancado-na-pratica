import { useState } from 'react'
import './App.css'

function App() {
  const[signed, setSigned] = useState(false)

  return (
        <div>
          <button onClick={ () => setSigned(true) }>entrar</button> {/** ao clicar, a pagona renderiza para true */}
          <br /><br />
        {signed && (
          <div>
            <h1>Bem vindo</h1>
            <p>usario online</p>
            <button onClick={() => setSigned(false)}>sair</button> {/**muda o usestate para false e volta para o primeiro estado */}
          </div>
        )}
      </div>
  )
}

export default App
