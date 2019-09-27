const initialState = {
  loading: false,
  error: null,
  kronikles: []
}

export default function kroniklesReducer(state = initialState, action){
  switch(action.type) {

    case 'LOAD_KRONICKLES':
      return {
        ...state,
        loading: true,
        error: null
      };


    case 'FETCH_KRONICKLES_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload.error
    };

    case 'FETCH_KRONICKLES_SUCCESS':
    return {
      ...state,
      loading: false,
      kronikles: action.payload
    };


    case 'FETCH_SINGLE_KRONICLE':
      const selectedKronicle= state.kronikles.map(k => k._id === action._id ? {k: action.payload} : k )

      return {
        ...state,
        loading: false,
        error: null,
        kronikles: selectedKronicle
      };


    case 'ADD_NEW_KRONIKLE_BEGIN':
    return {
      ...state,
      loading: true,
      error: null
    };

    case 'ADD_NEW_KRONIKLE_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        kronikles: action.payload
      };

    case 'ADD_NEW_KRONIKLE_ERROR':
      return {
        ...state,
         loading: false,
         error: action.error.message
      }

    case 'DELETE_KRONIKLE':
      return {
        kronikles: state.kronikles.filter(k => k._id !== action.payload)
      };

    case 'DELETE_KRONIKLE_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        kronikles: action.payload
      };

      case 'DELETE_KRONIKLE_ERROR':
        return {
          ...state,
           loading: false,
           error: action.error.message
        };


    case 'EDIT_KRONIKLE_ATTEMPT':
      return {
        ...state,
         loading: true,
         error: null
      }

    case 'EDIT_KRONIKLE_SUCCESS':
      const newKroniklesList = state.kronikles.map(k => k._id === action._id ? {k: action.payload} : k)
    return {
      ...state,
      loading: false,
      error: null,
      kronikles: newKroniklesList
    };

    case 'EDIT_KRONIKLE_ERROR':
      return {
        ...state,
         loading: false,
         error: action.error.message
      };

    default:
      return state
  }
}
