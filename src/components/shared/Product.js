import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
//function helper
import {shortedTitle, isInCart, quantityCounter} from '../../helpers/functions';
//context
import {CrtContext} from '../../context/CartContext';

// trash icon
import trash from '../../assets/icons/icons8-trash.svg'


const Product = ({productData}) => {
   const {state, dispatch} = useContext(CrtContext);

    return (
        <div>
            <img src={productData.image} alt="product" style={{width: "250px"}}/>
            <h3>{shortedTitle(productData.title)}</h3>
            <p>{productData.price} $</p>
            <div>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div>
                    {quantityCounter(state, productData.id) === 1 && <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: productData})}><img src={trash} alt="trash-icon"/></button>}
                    {quantityCounter (state, productData.id) > 1 && <button onClick={() => dispatch({type: "DECREASE", payload: productData})}>-</button>}
                    {
                        isInCart(state, productData.id) ?
                        <button onClick={() => dispatch({type: "INCREASE", payload: productData})}>+</button> :
                        <button onClick={() => dispatch({type: "ADD_ITEM", payload: productData})}>add to Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;