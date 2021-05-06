import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const pizzaReducer = (state=[], action) => {
    if (action.type === 'GET_PIZZA_LIST') {
        return action.payload
    }
    return state
}

const checkoutReducer = (state = [], action) => {
    if (action.type === 'ADD') {
        return [...state, action.payload]
    } else if (action.type === 'REMOVE') {
        return [...state, action.payload]
    } else if (action.type === 'CLEAR') {
        return state
    }
}

const customerInfoReducer = (state = [], action) => {

}

const storeInstance = createStore(
    combineReducers({
        pizzaReducer,
        checkoutReducer,
        customerInfoReducer
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));
