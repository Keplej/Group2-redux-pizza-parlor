import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';


function SelectPizza() {
    

    const pizzaList = useSelector(store => store.pizzaReducer);
    console.log(pizzaList);

    const dispatch = useDispatch();
    const history = useHistory();
  
    const addPizza = (event) => {
      dispatch( {type: 'ADD', payload: [event.id, event.price]});
    //   history.push('/');
    }

    const removePizza = (event) => {
        dispatch( {type: 'REMOVE', payload: event.id});
        // history.push('/');
      }
  
    const handleNext = () => {
        alert('You are headed to')
        history.push('/customerInfo');
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
                        <p>{pizza.name}</p>
                        <button onClick={(event) => addPizza(pizza.id)}>Add</button>
                        <button onClick={(event) => removePizza(pizza.id)}>Remove</button>
                        </div>
            })}
            <div><button className="next" onClick={handleNext}>Next</button></div>
        </>

    
    return (
        
        

    )
}

export default SelectPizza;

