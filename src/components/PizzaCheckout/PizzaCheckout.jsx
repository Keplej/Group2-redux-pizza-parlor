import {useSelector} from 'react-redux';
import axios from 'axios'



function PizzaCheckout() {

    //reducer
    const checkoutList = useSelector(store => store.checkoutReducer)
    const customerList = useSelector(store => store.customerListReducer)





    return(
        <>
        {customerList.map(customer => {
                    return (<p>{customer.name}</p>)
                            (<p>{customer.address}</p>)
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
            <button onClick={checkoutPizza}>Checkout</button>
        </table>
        </>

    );


}

export default PizzaCheckout