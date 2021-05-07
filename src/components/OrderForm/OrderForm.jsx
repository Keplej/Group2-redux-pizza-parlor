import { useDispatch } from 'react-redux';
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './OrderForm.css';


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
        dispatch({
            type: 'SUBMIT_INFO', payload: {
                customer_name: customerName,
                street_address: streetAddress,
                city: city,
                zip: zip,
                type: type
            }
        })
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

            <form className="orderForm" onSubmit={handleSubmit}>
                <div>
                    <input placeholder="Name" type="text" value={customerName} onChange={(event) => setCustomerName(event.target.value)} />
                    <br />
                    <br />
                    <input placeholder="Street Address" value={streetAddress} type="text" onChange={(event) => setStreetAddress(event.target.value)} />
                    <br />
                    <br />
                    <input placeholder="City" type="text" value={city} onChange={(event) => setCity(event.target.value)} />
                    <br />
                    <br />
                    <input placeholder="Zip" type="text" value={zip} onChange={(event) => setZip(event.target.value)} />
                </div>
                <br />
                <br />
                <div className="flexType">
                    <input type="radio" value={type} name="Pickup" onChange={(event) => setType("Pickup")} /> Pickup
                    <br />
                    <input type="radio" value={type} name="Delivery" onChange={(event) => setType("Delivery")} /> Delivery
                </div>
                <br />
                <button className="next" type="submit">Next</button>


            </form>
        </>
    )
}

export default OrderForm;