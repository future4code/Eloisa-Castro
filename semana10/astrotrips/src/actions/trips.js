import axios from "axios"

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureX/eloisac'

export const putTripsOnState = (tripsList) => ({
  type: 'PUT_TRIPS_ON_STATE',
  payload: {
    tripsList,
  }
})

// export const getSelectedTripDetails = (tripId, tripName) => ({
//   type: 'GET_SELECTED_TRIP_DETAILS',
//   payload: {
//     tripId,
//     tripName,
//   }
// })

export const setTripDetails = (tripDetail) => ({
  type: 'SET_TRIP_DETAILS',
  payload: {
    tripDetail,
  }
})

export const getAllTrips = () => async (dispatch) => {
  const response = await axios.get(`${baseURL}/trips`)
  dispatch(putTripsOnState(response.data.trips))
}

export const applyToTrip = (tripId, bodyRequest) => async (dispatch) => {
  try {
    await axios.post(`${baseURL}/trips/${tripId}/apply`, bodyRequest)
    window.alert("Inscrição realizada com sucesso!")
  } catch {
    window.alert("Ocorreu um erro em sua inscrição. Tente novamente.")
  }
}

export const getTripDetails = (tripId) => async (dispatch) => {
  const token = window.localStorage.getItem('token')
  const headerRequest = {
    headers: {
      auth: token
    }
  }
  const response = await axios.get(`${baseURL}/trip/${tripId}?=`, headerRequest)
  dispatch(setTripDetails(response.data.trip))
}

export const createNewTrip = (bodyRequest) => async (dispatch) => {
  const token = window.localStorage.getItem('token')
  const headerRequest = {
    headers: {
      auth: token
    }
  }
  try {
    await axios.post(`${baseURL}/trips`, bodyRequest, headerRequest)
    window.alert("Cadastro realizado com sucesso!")
  } catch {
    window.alert("Ocorreu um erro no cadastro. Tente novamente.")
  }

}