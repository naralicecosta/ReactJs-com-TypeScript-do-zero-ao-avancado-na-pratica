interface AlunoProps { //definindo as propriedades que aluno vai receber
    nome: string
    idade: number
    }
    //componente aluno
    export function Aluno({nome, idade}: AlunoProps){
      //como retornar esse dado?? procure pela tag <aluno/>
      return(
        <div>
    
        <h1>Aluno: {nome}</h1>
        <h3>Idade: {idade}</h3>
            </div>
    
      )
    }