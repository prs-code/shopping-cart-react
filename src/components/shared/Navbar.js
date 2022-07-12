import React,{useContext} from 'react';
import { Link } from 'react-router-dom';

//context
import {CrtContext} from '../../context/CartContext';
//shoppinCart icon
import shop from '../../assets/icons/shopping-cart.svg'

const Navbar = () => {
    const {state} = useContext(CrtContext);
     
    return (
        <div>
            <div>
                <Link to="/products">Products</Link>
                <div>
                <span>{state.itemsCounter}</span>
                <Link to="/Cart"><img src={shop} alt='shopping-cart-icon' style={{width: "44px"}}/></Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;