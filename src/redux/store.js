import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {dogReducer} from './reducers';

const reducers = combineReducers({
    dogReducer: dogReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));
export default store;