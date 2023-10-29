import { useState } from 'react'
import './App.css'

function App() {
  const[signed, setSigned] = useState(false)

  return (
        <div>
          <button onClick={ () => setSigned(true) }>entrar</button> {/** ao clicar, a pagona renderiza para true */}

        {/**se usuario estiver logado (true) vai aparar a mensagem de bem vindo, se nao aparece a segunda msg */}
        {signed ?(
          <h1>Bem vinda Nara!</h1>
        ): (
          <h1>Nenhum usuario logado</h1>
        )}
      </div>
  )
}

export default App
