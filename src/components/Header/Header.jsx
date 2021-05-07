import {useSelector} from 'react-redux';
import '../Header/Header.css';


function Header() {
    
    // We add in our selector in here
    // const 
    const checkoutList = useSelector(store => store.checkoutReducer)



    return(
        <header>
            <h1>Prime Pizza</h1>
            <h2>Total: {checkoutList.price}</h2>
            {/* We want to have out total info in the {} above */}
        </header>
    )
}

export default Header;