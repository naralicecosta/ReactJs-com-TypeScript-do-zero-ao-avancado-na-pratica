import{ useState, useEffect, useRef } from 'react';

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const firstRender = useRef(true)


  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState<string[]>([]); {/**<string[]>/ esta fazendo uma tipagem, dizendo que tasks vai ser uma string */}
  const [editTask, setEditTask] = useState({
    enabled: false,
    task: ''
  })

  //busca as tarefas
  useEffect(() => {
     const tarefaSalvas = localStorage.getItem("@cursoreact") // vai no local storage, busca as tarefas salvas
      
      if(tarefaSalvas){ // se tiver algo em tarefas salvas
        setTasks(JSON.parse(tarefaSalvas)); //muda o usestate
      }

    },[])

  
    // executa as tarfas
  useEffect(()=>{
    if(firstRender.current){
      firstRender.current = false;
      return;
    }
    // executar quando a usestate task mudar
    localStorage.setItem("@cursoreact", JSON.stringify(tasks)) 
    console.log("useffect foi chamado")

  },[tasks])

  function handleRegister(){
    if(!input){
      alert("Preencha o nome da sua tarefs!")
      return
    }
    if(editTask.enabled){
      handleSaveEdit();
      return;
    }
    setTasks(tarefas => [...tarefas, input])
    setInput(""); { /*para voltar o input ao status vazio */}
    //localStorage.setItem("@cursoreact", JSON.stringify([...tasks, input])); {/** ao salvar uma nova tarefa ela fica salva em local storage */}
    
  }
  function handleSaveEdit(){
    const findIndexTask = tasks.findIndex(task => task === editTask.task) ; {/**findIndex/ vai achar a posição do item */}
    const allTasks = [...tasks];

    allTasks[findIndexTask] = input;
    setTasks(allTasks)

    setEditTask({
      enabled: false,
      task: ''
    })

   
    setInput("");{/*limpar o campo */}
    //localStorage.setItem("@cursoreact", JSON.stringify(allTasks)), {/**salvando uma tarefa editada no local storage */}
  }
  function handleDelete(item: string){
    const removeTask = tasks.filter(task => task !== item); {/**o filter vai percorrer a lista e cm base na condição ele devolve algo */}
    setTasks(removeTask)

  }
  function handleEdit(item: string){
    inputRef.current?.focus();

    {/**ao clicar em editar o conteudo vai voltar ao input para ser editado */}
    setInput(item); {/**quando clica em editar ja preenche o iput */}
    setEditTask({
      enabled: true,
      task: item
    })
  }

  return(
    <div>
      <h1>Lista de tarefas</h1>

      <input placeholder="Digite o nome da tarefa..."
      value={input}
      onChange={ (e) => setInput(e.target.value)}
      ref={inputRef}
       />
       <button
       onClick={handleRegister}>
        {editTask.enabled ? "Atualizar tarefa" : "Adicionar tarefa" } {/*quando clicar em editar o botao de adicionar tarefa muda para atualizar tarfa */}
       </button>
      <hr/>

      {tasks.map((item, index) => (
        <section key={item}> {/*as keys sao utilizadas para encontrar dentro das listas e ter mais performance */}
          <span>{item}</span>
          <button onClick={() => handleEdit(item)}>Editar</button>
          <button onClick={() => handleDelete(item) }>excluir</button>
        </section>
      ))}  {/**map é uma função em js usada para percorrer uma lista */}
    </div>
  )
 
  
}
