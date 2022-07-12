import React, {useReducer, createContext} from 'react';

const initialState = { //firs input value useReducer
    selectedItems : [],
    itemsCounter: 0,
    total: 0,
    payment: false
}

    const sumItems = (items) => { // Calculate the total price and number of products
        const itemsCounter = items.reduce((total, product) => total + product.quantity, 0); //number of all products
        const total = items.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(3); //price all product until three decimal places
        return {itemsCounter, total};
    }

const cartReducer = (state, action) => {
     switch(action.type) {
        case "ADD_ITEM" : //The first time the product is added to the cart
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumItems(state.selectedItems)
            }
        case "REMOVE_ITEM" ://when deleted single product of the cart
            const newSelectedItem = state.selectedItems.filter(item => item.id !== action.payload.id);//filter deleted product of  the cart
            return {
                ...state,
                selectedItems: [...newSelectedItem],
                ...sumItems(state.selectedItems)
            }
        case "INCREASE" :// when selecting a product multi times
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "DECREASE" :// when decreased number of a product
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexD].quantity--;
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "PAYMENT" :
            return {
                selectedItems : [],
                itemsCounter: 0,
                total: 0,
                payment: true
            }
        case "CLEAR" : // return first input value
            return {
                selectedItems : [],
                itemsCounter: 0,
                total: 0,
                payment: false
            }
        default :
        return state;
    }
}

export const CrtContext = createContext();

const CartContext = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CrtContext.Provider value={{state, dispatch}}>
            {children}
        </CrtContext.Provider>
    );
};

export default CartContext;