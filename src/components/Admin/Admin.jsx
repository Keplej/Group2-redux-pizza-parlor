import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Admin() {

    const dispatch = useDispatch();

    const adminSelector = useSelector(store => store.adminReducer);


    useEffect(() => {
        // GET
        getAdmin();
    })

    const getAdmin = () => {
        axios.get('/api/order')
        .then(response => {
            dispatch({type: 'GET_ADMIN', payload: response.data})
            console.log('GET ADMIN', response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }


    return(
        <div>
            <h1>Admin</h1>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Time Order Placed</th>
                    <th>Type</th>
                    <th>Cost</th>
                </tr>
            </table>
            <tbody>
                {adminSelector.map((item, i) =>
                    <tr key={i}>
                        <td>{item.customer_name}</td>
                        <td>{item.time}</td>
                        <td>{item.type}</td>
                        <td>{item.total}</td>
                    </tr>
                )}
            </tbody>
        </div>
    )
}

export default Admin;

