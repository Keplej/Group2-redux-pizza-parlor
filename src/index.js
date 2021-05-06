import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

const pizzaReducer = (state=[], action) => {

}

const checkoutReducer = (state = [], action) => {

}

const customerInfoReducer = (state = [], action) => {

}

const storeInstance = createStore(
    combineReducers({

    }),
    applyMiddleware(logger),
)

ReactDOM.render(<App />, document.getElementById('root'));
