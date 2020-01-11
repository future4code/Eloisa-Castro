const initialState = {
  listaDeTarefas: []
}

const todos = (state = initialState, action) => {
  switch(action.type) {
    case 'EXIBIR_TAREFAS':
      return { ...state, listaDeTarefas: action.payload.tarefas}

    default:
      return state;
  }
} 

export default todos;