import React from 'react';
import {shortedTitle} from '../../helpers/functions';
import {Link} from 'react-router-dom';

const Product = ({productData}) => {
    return (
        <div>
            <img src={productData.image} alt="product" style={{width: "250px"}}/>
            <h3>{shortedTitle(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div>
                    <button>add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;