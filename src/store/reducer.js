import { combineReducers } from 'redux';

// the parts- each of these will receive a part of the redux and are responsible for returning an updated part
// return the redux itself if no changes are made
// you can take this even further and split and combine each of these reducers using the same pattern
const reducerParts = {
    auth: (state={}, action) => {return state}
};

// we combine the individual parts
const reducer = combineReducers(reducerParts);

// and export only the parent reducer
export default reducer;
