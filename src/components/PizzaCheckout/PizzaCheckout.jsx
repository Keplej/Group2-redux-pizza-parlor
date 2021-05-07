import {useSelector} from 'react-redux';
import { useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import '../PizzaCheckout/PizzaCheckout.css'



function PizzaCheckout() {

    //reducer
    const checkoutList = useSelector(store => store.checkoutReducer)
    const customerList = useSelector(store => store.customerInfoReducer)

    const history = useHistory();


    

    const checkoutPizza = () => {


        axios({
            method: 'POST',
            url: '/api/order', 
            data: { 

                customer_name: customerList.customer_name,
                street_address: customerList.street_address,
                city: customerList.city,
                zip: customerList.zip,
                type: customerList.type,
                total: checkoutList.price,
                pizzas: [{
                    id: checkoutList.id,
                    quantity: 1  
                }]  

            }
        })
        .then(response => {
            console.log('You checkout out:', response);
            alert(`'Za is on the way! DOPE WOOT!`)
            history.push('/');

        })
        .catch(error => {
            console.log('Something went wrong on checkout:', error);
            alert('Error checking out.')
        })
    }




    return(
        <>
        <div className="customerInfo">
            <p>{customerList.customer_name}</p>
            <p>{customerList.street_address}</p>
            <p>{customerList.city}, {customerList.zip}</p>
        </div>
        <div className="checkoutList">
        <table >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                <tr className="checkoutRow">
                    <td>{checkoutList.name}</td> 
                    <td>{checkoutList.price}</td> 
                </tr>
            </tbody>
        </table>
        </div>
        <button className="checkoutBtn" onClick={checkoutPizza}>Checkout</button>
        </>

    );


}

export default PizzaCheckout

// {customerList.map((customer, i) => 
//     <p key={i}>{customer.customer_name} {customer.street_address} {customer.city} {customer.zip}</p>)
           
// }


// {checkoutList.map((pizza, i) => 
//     <td>{pizza.name} {pizza.price}</td>
// )
// }