import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useState} from 'react';


function SelectPizza() {

    const [pizza, setPizza] = useState('')
    

    const pizzaList = useSelector(store => store.pizzaReducer);
    console.log(pizzaList);

    const dispatch = useDispatch();
    const history = useHistory();
  
    // const addPizza = (event) => {
    // //   dispatch( {type: 'ADD', payload: pizza});
    //   console.log();

    // //   history.push('/');
    // }

    const removePizza = (event) => {
        dispatch( {type: 'REMOVE', payload: event.id});
        console.log(event);
        // history.push('/');
      }
  
    const handleNext = () => {
        console.log(pizza)
        dispatch( {type: 'ADD', payload: pizza});
        alert('Mmmmm Pizzzza... But first, we need your info!')
        history.push('/OrderForm');
    }


    return (
        <>
        <div>
            <h2>Step 1: Select Your Pizza</h2>
        </div>
            {pizzaList.map(pizza => {
                return <div className="card" key={pizza.id}>
                        <p>{pizza.name}</p>
                        <p>{pizza.description}</p>
                        <p>{pizza.price}</p>
                        <button onClick={(event) => setPizza(pizza)}>Add</button>
                        <button onClick={(event) => removePizza(pizza.id)}>Remove</button>
                        </div>
            })}
            <div><button className="next" onClick={handleNext}>Next</button></div>
        </>
    )
}

export default SelectPizza;

