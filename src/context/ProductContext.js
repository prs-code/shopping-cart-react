import React, {useState, useEffect, createContext} from 'react';
import { getProducts } from '../services/api';//API


export const productsContext = createContext();

const ProductContext = (props) => {
    const [products, setProducts] = useState([]); //State List

    useEffect(() => {
        const fetchApi = async () => { //Here use because we want to get products data when the application mount
            setProducts (await getProducts());
        };

        fetchApi ();
    }, []);


    return (
        <productsContext.Provider value={products}>
            {props.children}
        </productsContext.Provider>
    );
};

export default ProductContext;