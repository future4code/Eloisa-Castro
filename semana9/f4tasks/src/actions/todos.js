import axios from "axios"

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/eloisa/todos'

export const exibirTarefas = (tarefas) => ({
  type: 'EXIBIR_TAREFAS',
  payload: {
    tarefas
  }
})

export const pegarTarefas = () => async (dispatch, getState) => {
  const response = await axios.get(baseURL)
  dispatch(exibirTarefas(response.data.todos))
}

export const criarNovaTarefa = (tarefa) => async (dispatch, getState) => {
  await axios.post(baseURL, { text: tarefa })
  dispatch(pegarTarefas())
}

export const alterarStatusTarefa = (idTarefa) => async (dispatch, getState) => {
  await axios.put(`${baseURL}/${idTarefa}/toggle`)
  dispatch(pegarTarefas())
}

export const alterarStatusTodas = (idTarefa) => async (dispatch, getState) => {
  const response = await axios.get(baseURL)
  
  const listaTarefasIncompleta = response.data.todos.filter (tarefa => {
    return tarefa.done === false
  })
  
  for(let el of listaTarefasIncompleta) {
    await axios.put(`${baseURL}/${el.id}/toggle`)
  }
  
  dispatch(pegarTarefas())
}

export const deletarTarefa = (idTarefa) => async (dispatch, getState) => {
  await axios.delete(`${baseURL}/${idTarefa}`)
  dispatch(pegarTarefas())
}

export const deletarTarefasCompletas = () => async (dispatch, getState) => {
  await axios.delete(`${baseURL}/delete-done`)
  dispatch(pegarTarefas())
}

export const filtrarTodasTarefas = (tarefa) => async (dispatch, getState) => {
  dispatch(pegarTarefas())
}

export const filtrarTarefasPendentes = () => async (dispatch, getState) => {
  const response = await axios.get(baseURL)
  
  const listaTarefasPendentes = response.data.todos.filter (tarefa => {
    return tarefa.done === false
  })
  
  dispatch(exibirTarefas(listaTarefasPendentes))
}

export const filtrarTarefasCompletas = () => async (dispatch, getState) => {
  const response = await axios.get(baseURL)
  
  const listaTarefasCompletas = response.data.todos.filter (tarefa => {
    return tarefa.done === true
  })
  
  dispatch(exibirTarefas(listaTarefasCompletas))
}