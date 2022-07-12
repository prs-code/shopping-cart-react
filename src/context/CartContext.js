import React, {useReducer, createContext} from 'react';

const initialState = { //firs input value useReducer
    selectedItems : [],
    itemsCounter: 0,
    total: 0,
    payment: false
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
                selectedItems: [...state.selectedItems]
            }
        case "REMOVE_ITEM" ://when deleted single product of the cart
            const newSelectedItem = state.selectedItems.filter(item => item.id !== action.payload.id);//filter deleted product of  the cart
            return {
                ...state,
                selectedItems: [...newSelectedItem]
            }
        case "INCREASE" :// when selecting a product multi times
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return {
                ...state,
            }
        case "DECREASE" :// when decreased number of a product
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexD].quantity--;
            return {
                ...state,
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