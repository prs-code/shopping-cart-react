import React,{useContext} from 'react';
import { Link } from 'react-router-dom';

//context
import {CrtContext} from '../../context/CartContext';
//shoppinCart icon
import shop from '../../assets/icons/shopping-cart.svg';
//styles
import styles from './navbar.module.css';

const Navbar = () => {
    const {state} = useContext(CrtContext);
     
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <Link to="/products" className={styles.productLink}>Products</Link>
                <div className={styles.iconContainer}>
                    <span>{state.itemsCounter}</span>
                    <Link to="/Cart"><img src={shop} alt='shopping-cart-icon' /></Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;