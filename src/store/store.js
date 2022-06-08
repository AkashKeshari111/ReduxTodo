import {legacy_createStore,combineReducers,compose,applyMiddleware} from 'redux'
import { CounterReducer } from './CounterReducer'
import { TodoReducer } from './TodoReducer'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer=combineReducers({
    counter:CounterReducer,
    todo:TodoReducer,
})

export const store=legacy_createStore(rootReducer,composeEnhancers(applyMiddleware()))