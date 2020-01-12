const initialState = {
  currentProfile: null,
  choosenProfiles: null,
}

const profiles = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_PROFILE_TO_SWIPE':
      return { ...state, currentProfile: action.payload.profile }

    case 'SEE_CHOOSEN_PROFILES':
      return { ...state, choosenProfiles: action.payload.profiles }
    
    default:
      return state
  }
}

export default profiles
