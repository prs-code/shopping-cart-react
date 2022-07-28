import React, {useContext} from 'react';

//component
import Cart from './shared/Cart';
//context
import {CrtContext} from '../context/CartContext';

const ShopCart = () => {
    const {state, dispatch} = useContext(CrtContext);

    return (
        <div>
            <div>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>
        </div>
    );
};

export default ShopCart;