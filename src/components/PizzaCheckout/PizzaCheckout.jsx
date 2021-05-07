import {useSelector} from 'react-redux';
import axios from 'axios'



function PizzaCheckout() {

    //reducer
    const checkoutList = useSelector(store => store.checkoutReducer)
    const customerList = useSelector(store => store.customerInfoReducer)

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
                total: customerList.total,
                pizzas: [{
                    id: checkoutList.id,
                    quantity: 1  
                }]  
            }
        })
        .then(response => {
            console.log('You checkout out:', response);

            history.push('/selectPizza');

           alert('Your order has successfully been placed! DOPE WOOT!')
            
        })
        .catch(error => {
            console.log('Something went wrong on checkout:', error);
            alert('Error checking out.')
        })
    }




    return(
        <>
        {customerList.map(customer => {
                    return (<p>{customer.customer_name}</p>)
                            (<p>{customer.customer_address}</p>)
                    })
                    }
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {checkoutList.map(pizza => {
                        return (<td>{pizza.name}</td>)
                                (<td>{pizza.price}</td>)
                    })
                    }
                </tr>
            </tbody>
        </table>
        <button onClick={checkoutPizza}>Checkout</button>
        </>

    );


}

export default PizzaCheckout