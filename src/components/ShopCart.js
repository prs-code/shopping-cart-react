import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
//component
import Cart from './shared/Cart';
//context
import {CrtContext} from '../context/CartContext';
//styles
import styles from './shopCart.module.css';


const ShopCart = () => {
    const {state, dispatch} = useContext(CrtContext);

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>

            {
                state.itemsCounter > 0 && <div className={styles.payments}>
                    <p><span>Total Items:</span> {state.itemsCounter} </p>
                    <p><span>Total Payment:</span> {state.total} $</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.clear} onClick={() => dispatch({type: "CLEAR"})}>Clear</button>
                        <button className={styles.checkout} onClick={() => dispatch({type: "PAYMENT"})}>Payment</button>
                    </div>
                </div>
            }
            {
                state.itemsCounter === 0 && !state.payment && <div className={styles.complete}>
                    <h3>Want To Buy Anything?</h3>
                    <Link to="/products">Go To Shop</Link>
                </div>
            } 
             {
                state.payment && <div className={styles.complete}>
                    <h3>Payment Successfully</h3>
                    <Link to="products">Buy more ...</Link>
                </div>
             }
        </div>
    );
};

export default ShopCart;