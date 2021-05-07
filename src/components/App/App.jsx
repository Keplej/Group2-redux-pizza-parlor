import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SelectPizza from '../SelectPizza/SelectPizza';
import PizzaCheckout from '../PizzaCheckout/PizzaCheckout';
import OrderForm from '../OrderForm/OrderForm'
import {useDispatch} from 'react-redux';

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
        <Route path="/">
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
      
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
    </div>
  );
}

export default App;
