import axios from 'axios';

const BASE_URL =" https://fakestoreapi.com";

const getProducts = async () => {//function for get data from API
    const response = await axios.get(`${BASE_URL}/products`);
    console.log(response.data);
    return response.data;
}  

export {getProducts};