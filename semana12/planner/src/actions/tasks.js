import axios from 'axios';

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/generic/planner-bouman-eloisa'

export const setAllTasks = (allTasks) => ({
  type: 'SET_ALL_TASKS',
  payload: {
    allTasks,
  }
});

export const getAllTasks = () => async (dispatch) => {
  const response = await axios.get(baseUrl)
  dispatch(setAllTasks(response.data))
}

export const postTask = (bodyRequest) => async (dispatch) => {
  try {
    await axios.post(baseUrl, bodyRequest)
    dispatch(getAllTasks())
  } catch {
    window.alert('Erro ao cadastrar a tarefa')
  }
}