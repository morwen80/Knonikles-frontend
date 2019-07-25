import { combineReducers } from 'redux';
import kroniclesReducer from './kronikles_reducer';

const rootReducer = combineReducers({
  kronikles: kroniclesReducer
})

export default rootReducer
