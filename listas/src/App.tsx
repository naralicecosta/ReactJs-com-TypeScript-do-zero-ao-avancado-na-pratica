import{ useState } from 'react';

export default function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([
    'Estudar react com typescript',
    'comprar pao meio dia',
    'estudar ingles'
  ])
  function handleRegister(){
    if(!input){
      alert("Preencha o nome da sua tarefs!")
      return
    }
    setTasks(tarefas => [...tarefas, input])
    setInput("") {/**para voltar o input ao status vazio */}
    
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
          <button>excluir</button>
        </section>
      ))}  {/**map é uma função em js usada para percorrer uma lista */}
    </div>
  )
 
  
}
