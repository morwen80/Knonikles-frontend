const initialState = {
  title: "",
  body: ""
}

export default function singleKronikleReducer(state = initialState, action){
  switch(action.type) {

    case 'FETCH_SINGLE_KRONICLE':
      const selectedKronicle = state.kronikles.filter(k => k._id === action.payload)
      return {
        ...state,
        kronikle: selectedKronicle
      };

    default:
    return state
}
}
