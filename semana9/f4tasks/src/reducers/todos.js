const initialState = {
  listaDeTarefas: []
}

const todos = (state = initialState, action) => {
  switch(action.type) {
    case 'ADICIONAR_TAREFA':
      const tarefa = {
        id: new Date().getTime(),
        textoTarefa: action.payload.novaTarefa,
        statusTarefa: false
      }
      return { ...state, listaDeTarefas: [...state.listaDeTarefas, tarefa]}
    
    case 'COMPLETAR_TAREFA':
      const listaModificada = state.listaDeTarefas.map( tarefa => {
        if (tarefa.id === action.payload.idTarefa) {
          return {...tarefa, statusTarefa: !tarefa.statusTarefa}
        } else {
          return tarefa
        }
      })
      
      return { ...state, listaDeTarefas: listaModificada}
    
    case 'REMOVER_TAREFA':
      const copiaArray = [...state.listaDeTarefas]
      const indexTarefa = state.listaDeTarefas.findIndex( tarefa => {
        return tarefa.id === action.payload.idTarefa
      })
      copiaArray.splice(indexTarefa, 1)
      return {...state, listaDeTarefas: copiaArray}
    
    case 'COMPLETAR_TUDO':
      const listaTodaCompleta = state.listaDeTarefas.map( tarefa => {
        return {...tarefa, statusTarefa: true}
      })

      return {...state, listaDeTarefas: listaTodaCompleta}
    
    case 'REMOVER_COMPLETAS':
      const listaSemCompletas = state.listaDeTarefas.filter( tarefa => {
        return tarefa.statusTarefa === false 
      })
      return { ...state, listaDeTarefas: listaSemCompletas }
    
    default:
      return state;
  }
} 

export default todos;