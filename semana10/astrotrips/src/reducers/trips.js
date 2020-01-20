const initialState = {
  tripsArray: [],
  // selectedTrip: {
  //   id: undefined,
  //   name: undefined
  // },
  tripDetails: undefined,
}

const trips = (state = initialState, action) => {
  switch (action.type) {
    case 'PUT_TRIPS_ON_STATE':
      return { ...state, tripsArray: action.payload.tripsList }
    
    // case 'GET_SELECTED_TRIP_DETAILS':
    //   return { ...state, selectedTrip: {id: action.payload.tripId, name: action.payload.tripName} }

    case 'SET_TRIP_DETAILS':
      return { ...state, tripDetails: action.payload.tripDetail }

    default:
      return state;
  }
}

export default trips;