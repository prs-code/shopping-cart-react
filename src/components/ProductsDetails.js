import React, {useContext} from 'react';
import {useParams, Link} from 'react-router-dom';

//Context
import {productsContext} from '../context/ProductContext'; 

const ProductsDetails = (props) => {
    const {id} = useParams();
    const data = useContext(productsContext);
    const product = data[id - 1];
    const {image, title, description, price, category} = product;

    return (
        <div>
          <img src={image} alt="product" />
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Category: {category}</p>
            <div>
                <span>{price} $</span><br />
                <Link to='/products'>Back to shop</Link>
            </div>
          </div>
        </div>
    );
};

export default ProductsDetails;