import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTask] = useState([
    'Estudar react com typescript'
    'comprar pao meio dia'
    'estudar ingles'
  ])

  return(
    <div>
      <h1>Lista de tarefas</h1>
      <hr/>
      {tasks.map(() => {})}  {/**map é uma função em js usada para percorrer uma lista */}
    </div>
  )
 
  
}

export default App;
