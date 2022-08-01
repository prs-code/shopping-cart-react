import React, {useContext} from 'react';

//context
import { CrtContext } from '../../context/CartContext';
//function
import {shortedTitle} from '../../helpers/functions';
//trash icon
import trash from '../../assets/icons/icons8-trash.svg';
//styles
import styles from './cart.module.css';


const Cart = (props) => {
    const {image, title, price, quantity} = props.data;
    const {dispatch} = useContext(CrtContext);

    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt="product" />
            <div className={styles.data}>
                <h3>{shortedTitle(title)}</h3>
                <span>{price} $</span>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {   
                    quantity ===1 ? 
                    <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: props.data})}><img src={trash} alt="trash-icon" /></button> :
                    <button onClick={() => dispatch({type: "DECREASE", payload: props.data})}>-</button>
                }
                <button onClick={() => dispatch({type: "INCREASE", payload: props.data})}>+</button> 
            </div>
        </div>
    );
};

export default Cart;