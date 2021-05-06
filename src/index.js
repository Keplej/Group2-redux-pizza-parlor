import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

const pizzaReducer = (state=[], action) => {
    if (action.type === 'GET_PIZZA_LIST') {
        return action.payload
    }
    return state
}

const checkoutReducer = (state = [], action) => {

}

const customerInfoReducer = (state = [], action) => {
    if(action.payload === 'SUBMIT_INFO')

}

const storeInstance = createStore(
    combineReducers({
        pizzaReducer,
        checkoutReducer,
        customerInfoReducer
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<App />, document.getElementById('root'));
