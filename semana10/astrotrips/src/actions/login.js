import axios from 'axios';

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureX/eloisac'


export const createNewUser = (bodyRequest) => async () => {
  try {
    await axios.post(`${baseURL}/signup`, bodyRequest)
    window.alert("Usuário cadastrado com sucesso!")
  } catch {
    window.alert("Erro ao cadastrar usuário! Tente novamente.")
  }
}

export const userLogin = (bodyRequest) => () => {
  const request = axios.post(`${baseURL}/login`, bodyRequest)
  request.then( response => {
    window.localStorage.setItem('token', response.data.token)
  }).catch(error => {
    window.alert("Erro ao realizar o login.")
  })
}