import {applyMiddleware, combineReducers, createStore} from "redux";
import {callMeReducer} from "./reducers/callMeReducer";
import thunkMiddleware from 'redux-thunk';

let rootReducer = combineReducers({
    callMeReducer: callMeReducer
})

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;