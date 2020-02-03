const initialState = {
  allTasks: []
}

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ALL_TASKS':
      return { ...state, allTasks: action.payload.allTasks }      
  
    default:
      return state
  }
}

export default tasks;