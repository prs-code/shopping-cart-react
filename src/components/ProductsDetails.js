import React, {useContext} from 'react';
import {useParams, Link} from 'react-router-dom';

//Context
import {productsContext} from '../context/ProductContext'; 
//styles
import styles from './shared/details.module.css'
const ProductsDetails = (props) => {
    const {id} = useParams();
    const data = useContext(productsContext);
    const product = data[id - 1];
    const {image, title, description, price, category} = product;

    return (
        <div className={styles.container}>
          <img className={styles.image} src={image} alt="product" />
          <div className={styles.textContainer}>
            <h3>{title}</h3>
            <p className={styles.description}>{description}</p>
            <p className={styles.category}><span>Category:</span> {category}</p>
            <div className={styles.buttonContainer}>
                <span className={styles.price}>{price} $</span><br />
                <Link to='/products'>Back to shop</Link>
            </div>
          </div>
        </div>
    );
};

export default ProductsDetails;