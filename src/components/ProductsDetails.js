import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';

//Context
// import {productsContext} from '../context/ProductContext'; 
//styles
import styles from './shared/details.module.css';
//axios
import axios from 'axios';


const ProductsDetails = (props) => {
    const {id} = useParams();
    const [products, setProducts] =useState([]);
    const {image, title, description, price, category} = products;

    useEffect(() => {
      const BASE_URL =" https://fakestoreapi.com/products/";
      axios.get(`${BASE_URL}${id}`)
        .then(product => setProducts(product.data))
      }, [id]);
      
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