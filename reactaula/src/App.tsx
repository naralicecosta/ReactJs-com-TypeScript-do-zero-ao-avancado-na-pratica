import { useState } from 'react'
import './App.css'

function App() {
  const[username, setUsername] = useState("nara")

  return (
    <div>
      {username.length >= 5 && <h1>Username muito grande</h1>} {/*se o tamanho do usernam efor >= 5, mostrar o h1 */}
          
    </div>
  )
}

export default App
