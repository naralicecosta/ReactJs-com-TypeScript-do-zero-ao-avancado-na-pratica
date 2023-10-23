import{ useState } from 'react';

export default function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([
    'Estudar react com typescript',
    'comprar pao meio dia',
    'estudar ingles'
  ])
  function handleRegister(){
    
  }

  return(
    <div>
      <h1>Lista de tarefas</h1>

      <input placeholder="Digite o nome da tarefa..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
       />
       <button
       onClick={handleRegister}>adicionar tarefa
       </button>
      <hr/>
      {tasks.map((item, index) => (
        <section key={item}> {/*as keys sao utilizadas para encontrar dentro das listas e ter mais performance */}
          <span>{item}</span>
        </section>
      ))}  {/**map é uma função em js usada para percorrer uma lista */}
    </div>
  )
 
  
}
