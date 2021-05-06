import {useDispatch} from 'react-redux';
import {useState} from 'react'


function OrderForm() {

    dispatch = useDispatch();
    const [customerInfo, setCustomerInfo] = useState([]);
  


    return (
        <>
            <form>
                <input placeholder="Name" type="text" onChange={(event) => setCustomerInfo({customer_name: event.target.value})}/>
                <input placeholder="Street Address" type="text" onChange={(event) => setCustomerInfo({street_address: event.target.value})}/>
                <input placeholder="City" type="text" onChange={(event) => setCustomerInfo({city: event.target.value})}/>
                <input placeholder="Zip" type="text" onChange={(event) => setCustomerInfo({zip: event.target.value})}/>
                <button>Pickup</button>
                <input type="radio" value="Male" name="gender" /> Male
                <button className="next">Next</button>
            </form>
        </>
    )
}