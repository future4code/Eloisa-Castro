import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router"

export const baseUrl = ""
const token = window.localStorage.getItem("token")
const requestHeader = {
  headers: {
    auth: token,
  }
}

export const userLogin = (email, password) => async (dispatch) => {
  const login = {
    email,
    password,
  }
  try {
    const response = await axios.post(`${baseUrl}/login`, login)
    window.localStorage.setItem("token", response.data.accessToken)
    dispatch(push(routes.videoFeed))
  } catch (error) {
    window.alert("Usuário não encontrado")
  }
}

export const userSignup = (newUserData) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, newUserData)
    window.localStorage.setItem("token", response.data.accessToken)
    dispatch(push(routes.videoFeed))
  } catch (e) {
    window.alert("Erro ao cadastrar o usuário")
  }
}

export const changePassword = (passwordData) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/changePassword`, passwordData, requestHeader)
    window.localStorage.setItem("token", response.data.accessToken)
    dispatch(push(routes.videoFeed))
  } catch (e) {
    window.alert(e.response.data.message)
  }
}