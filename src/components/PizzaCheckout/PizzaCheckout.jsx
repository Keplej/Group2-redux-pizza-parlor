import {useSelector} from 'react-redux';



function PizzaCheckout() {

    //reducer
    const checkoutList = useSelector(store => store.checkoutReducer)



    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Pizza type</td>
                    <td>Pizza Cost</td>
                </tr>
            </tbody>
            <button>Checkout</button>
        </table>
        </>

    );


}

export default PizzaCheckout