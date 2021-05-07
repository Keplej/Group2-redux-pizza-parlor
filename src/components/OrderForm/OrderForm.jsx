import {useDispatch} from 'react-redux';
import {useState} from 'react'
import { useHistory } from 'react-router-dom';


function OrderForm() {
    // Dispatch to capture values from handle submit and push them into customerInfoReducer State
    const dispatch = useDispatch();
    const history = useHistory();
    // string states to obtain values on submit for handleSubmit function
    const [customerName, setCustomerName] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [type, setType] = useState('');
  
    

    

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(customerName, streetAddress, city, zip, type);
        dispatch({type: 'SUBMIT_INFO', payload: {
            customer_name: customerName,
            street_address: streetAddress,
            city: city,
            zip: zip,
            type: type
        }})
        // clear input fields
        setCustomerName('');
        setStreetAddress('');
        setCity('');
        setZip('');
        setType('');

        handleNext();
      } // END handleSubmit

      const handleNext = () => {
        alert('Are you getting hungry? One more step: Checkout')
        history.push('/PizzaCheckout');
    }

    return (
        // 
        <>
            <form onSubmit={handleSubmit}>

                <input placeholder="Name" type="text" value={customerName} onChange={(event) => setCustomerName(event.target.value)}/>
                
                <input placeholder="Street Address" value={streetAddress} type="text" onChange={(event) => setStreetAddress(event.target.value)}/>
                
                <input placeholder="City" type="text" value={city} onChange={(event) => setCity(event.target.value)}/>
                
                <input placeholder="Zip" type="text" value={zip} onChange={(event) => setZip(event.target.value)}/>

                
                <input type="radio" value={type} name="Pickup" onChange={(event) => setType("Pickup")}/> Pickup
                
                <input type="radio" value={type} name="Delivery" onChange={(event) => setType("Delivery")}/> Delivery
                
                
                <button className="next" type="submit">Next</button>


            </form>
        </>
    )
}

export default OrderForm; 


// {
//     customer_name: customerName,
//     street_address: streetAddress,
//     city: city,
//     zip: zip,
//     type: type
// }