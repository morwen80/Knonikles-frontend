import { combineReducers } from 'redux';
import kroniclesReducer from './kronikles_reducer';
// import singleKronikleReducer from './singleKronikle_reducer';

const rootReducer = combineReducers({
  kronikles: kroniclesReducer
  // singleKronikle: singleKronikleReducer
})

export default rootReducer
