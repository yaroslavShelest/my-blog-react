import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';


let reducers = combineReducers({
    // mainPage: mainPageReducer,
    // articlesPage: articleReducer,
    // auth: authReducer,
    // newsPage: newsReducer,
    // app: appReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;