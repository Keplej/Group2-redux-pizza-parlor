import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function Admin() {

    const dispatch = useDispatch();

    // const [adminOrders, setAdminOrders] = useState([]);

    useEffect(() => {
        // GET
        getAdmin();
    })

    const getAdmin = () => {
        axios.get('/api/order')
        .then(response => {
            dispatch({type: 'GET_ADMIN'})
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
                {/* THIS IS WHERE THE INFO WILL SHOW UP */}
                {adminReducer.map((item, i) =>
                    <div>
                        <td></td>
                    </div>
                )}
            </tbody>
        </div>
    )
}

export default Admin;