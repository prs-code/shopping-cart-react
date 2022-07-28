import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
//function helper
import {shortedTitle, isInCart, quantityCounter} from '../../helpers/functions';
//context
import {CrtContext} from '../../context/CartContext';
//trash icon
import trash from '../../assets/icons/icons8-trash.svg';
// styles
import styles from './product.module.css';


const Product = ({productData}) => {
   const {state, dispatch} = useContext(CrtContext);

    return (
        <div className={styles.container}>
            <img className={styles.cartImage} src={productData.image} alt="product" />
            <h3>{shortedTitle(productData.title)}</h3>
            <p>{productData.price} $</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div className={styles.buttonContainer}>
                    {quantityCounter(state, productData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch({type: "REMOVE_ITEM", payload: productData})}><img src={trash} alt="trash-icon"/></button>}
                    {quantityCounter (state, productData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch({type: "DECREASE", payload: productData})}>-</button>}
                    {
                        isInCart(state, productData.id) ?
                        <button className={styles.smallButton} onClick={() => dispatch({type: "INCREASE", payload: productData})}>+</button> :
                        <button onClick={() => dispatch({type: "ADD_ITEM", payload: productData})}>add to Cart</button>
                    }
                </div>
            </div>
            <div className={styles.bottonTask}></div>
        </div>
    );
};

export default Product;