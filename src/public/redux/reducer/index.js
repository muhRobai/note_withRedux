import { combineReducers } from 'redux';

// import all reducers
import notes from './notes';
import category from './category';

// combine them
const appReducer = combineReducers({
    // auth,
    notes : notes,
    category: category
})

export default appReducer;