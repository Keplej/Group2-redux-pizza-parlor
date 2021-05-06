import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';

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
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
