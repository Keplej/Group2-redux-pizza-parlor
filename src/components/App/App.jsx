import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SelectPizza from '../SelectPizza/SelectPizza';
import PizzaCheckout from '../PizzaCheckout/PizzaCheckout';
import OrderForm from '../OrderForm/OrderForm';
import Admin from '../Admin/Admin';
import {useDispatch} from 'react-redux';
import { HashRouter as Router, Route } from "react-router-dom";


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetchPizza();
  }, [])

  const fetchPizza = () => {
    axios.get('/api/pizza')
    .then(response => {
      console.log(response.data);
      dispatch({
        type: 'GET_PIZZA_LIST',
        payload: response.data});
    })
    .catch(error => {
      alert(`Sorry, things are not currently working at the moment... Try again later!`);
      console.log('Error getting pizza', error);
    })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <Router >
        <Route path="/" exact>
          <SelectPizza />
        </Route>
        <Route path="/OrderForm">
          <OrderForm />
        </Route>
        <Route path="/PizzaCheckout">
          <PizzaCheckout />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Router>
      
      
    </div>
  );
}

export default App;
