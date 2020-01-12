import axios from 'axios'

export const setProfileToSwipe = (profile) => ({
	type: 'SET_PROFILE_TO_SWIPE',
	payload: {
		profile,
	}
})

export const seeChoosenProfiles = (profiles) => ({
	type: 'SEE_CHOOSEN_PROFILES',
	payload: {
		profiles
	}
}) 

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eloisac/'

export const clearSwipes = () => async (dispatch) => {
	await axios.put(`${baseURL}clear`)
}

export const fetchProfileToSwipe = () => async (dispatch) => {
	const response = await axios.get(`${baseURL}person`)
	
	dispatch(setProfileToSwipe(response.data.profile))
}

export const onChooseProfile = (personId, choice) => async (dispatch) => {
	const bodyRequest = {
		id: personId,
		choice: choice,
	}
	await axios.post(`${baseURL}choose-person`, bodyRequest)
	dispatch(fetchProfileToSwipe())
}

export const getAllMatches = () => async (dispatch) => {
	const response =  await axios.get(`${baseURL}matches`)

	dispatch(seeChoosenProfiles(response.data.matches))
}