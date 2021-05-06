// import {useDispatch} from 'react-redux';
// import {useState} from 'react'


function OrderForm() {

    // dispatch = useDispatch();
    // const [customerName, setCustomerName] = useState('');
    // const [streetAddress, setStreetAddress] = useState('');
    // const [city, setCity] = useState('');
    // const [zip, setZip] = useState('');
    // const [type, setType] = useState('');
    // const [total, setTotal] = useState('');
    // const [time, setTime] = useState('');
  
    // const dispatch= useDispatch();

    // const [plane, setPlane] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type: 'ADD_CUSTOMER_INFO', payload: {airline:plane}})
        setPlane('');
      }

    return (
        <>
            <form>
                <input placeholder="Name" type="text" value={customerName} onChange={(event) => setCustomerName(event.target.value)}/>
                <input placeholder="Street Address" value={streetAddress} type="text" onChange={(event) => setStreetAddress(event.target.value)}/>
                <input placeholder="City" type="text" value={city} onChange={(event) => setCity(event.target.value)}/>
                <input placeholder="Zip" type="text" value={zip} onChange={(event) => setZip(event.target.value)}/>
                <input type="radio" value={type} name="pickup" /> Pickup
                <input type="radio" value={type} name="delivery" /> Delivery
                <button className="next">Next</button>
            </form>
        </>
    )
}

export default OrderForm; 