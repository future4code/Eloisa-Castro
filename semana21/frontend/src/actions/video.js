import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";

// Actions
export const setVideos = (videos) => ({
  type: "SET_VIDEOS",
  payload: {
    videos,
  }
})

export const setVideoDetails = (video) => ({
  type: "SET_VIDEO_DETAILS",
  payload: {
    video,
  }
})

// Integração com API
const baseUrl = ""

const token = window.localStorage.getItem("token")
const requestHeader = {
    headers: {
      auth: token
    }
}

export const fetchVideos = () => async (dispatch) => {
  try {
      const response = await axios.get(`${baseUrl}/getAllVideos`, requestHeader)
      dispatch(setVideos(response.data.videos))
  } catch (error) {
      window.alert(error.response.data.message)
  }
}

export const saveVideo = (videoData) => async (dispatch) => {
  try {
      await axios.post(`${baseUrl}/uploadVideo`, videoData, requestHeader)
  } catch (error) {
      window.alert(error.response.data.message)
  }
}

export const fetchVideoDetails = (id) => async (dispatch) => {
  try {
      const response = await axios.get(`${baseUrl}/videoDetails/${id}`, requestHeader)
      dispatch(setVideoDetails(response.data.video))
      dispatch(push(routes.videoDetails))
  } catch (err) {
      window.alert(err.response.data.message)
  }
}

