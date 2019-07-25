const initialState = {
  loading: false,
  error: null,
  notes: []
}

export default function notesReducer(state = initialState, action){
  switch(action.type) {

    case 'LOAD_NOTES':
      return {
        ...state,
        loading: true,
        error: null
      };


    case 'FETCH_NOTES_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload.error
    };

    case 'FETCH_NOTES_SUCCESS':
    return {
      ...state,
      loading: false,
      notes: action.payload
    };


    case 'ADD_NEW_NOTE_BEGIN':
    return {
      ...state,
      loading: true,
      error: null
    };

    case 'ADD_NEW_NOTE_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        notes: state.notes.concat(action.payload)
      };
    case 'ADD_NEW_NOTE_ERROR':
      return {
        ...state,
         loading: false,
         error: action.error.message
      }

    case 'DELETE_NOTE':
      return {
        notes: state.notes.filter(foodItem => foodItem.id !== action.payload),
      };

    case 'EDIT_NOTE_ATTEMPT':
      return {
        ...state,
         loading: true,
         error: null
      }

    case 'EDIT_NOTE_SUCCESS':
      const newNoteList = state.notes.map(note => note.id === action.id ? {note: action.payload} : note)
    return {
      ...state,
      loading: false,
      error: null,
      notes: newNoteList
    };

    case 'EDIT_NOTE_ERROR':
      return {
        ...state,
         loading: false,
         error: action.error.message
      };

    default:
      return state
  }
}
