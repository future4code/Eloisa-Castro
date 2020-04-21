const initialState = {
  allVideos: null,
  videoDetails: null,
}

export const videos = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VIDEOS":
      return { ...state, allVideos: action.payload.videos };
    case "SET_VIDEO_DETAILS":
      return { ...state, videoDetails: action.payload.video };
  }
}

export default videos;