import React, {useContext} from 'react';
import {productsContext} from '../context/ProductContext';//context
import Product from './shared/Product';
//styles
import styles from './shared/store.module.css';

const Store = () => {
    const products = useContext(productsContext);

    return (
        <div className={styles.container}>
            {
                products.map(product => <Product key={product.id}  productData={product} />)
            }        
        </div>
    );
};

export default Store;