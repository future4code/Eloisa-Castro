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

      
      state.listaDeTarefas.forEach( el => {
          if (el.id === action.payload.idTarefa) {
            el.statusTarefa = !el.statusTarefa
          }
      })
      return state
    case 'REMOVER_TAREFA':
      const copiaArray = {...state}
      const indexTarefa = copiaArray.listaDeTarefas.findIndex( tarefa => {
        return tarefa.id === action.payload.idTarefa
      })
      copiaArray.listaDeTarefas.splice(indexTarefa, 1)
      state = {...copiaArray}
      return state
    default:
      return state;
  }
} 

export default todos;