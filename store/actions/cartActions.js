import { 
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    ADD_QUANTITY_WITH_NUMBER,
    RESET_CART, CART_ADDED, CART_COUNT_INIT_SET, SET_TOTAL, SET_CHECKOUT_INFO
} from './action-types/cart-actions'

//add cart action
export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
};

// added by Coding
export const addedToCart = (addedCount) => {
    return{
        type : CART_ADDED,
        addedCount
    }
};

// added by Coding
export const setCheckoutInfo = (data) => ({
    type : SET_CHECKOUT_INFO,
    cartInfo : data
});

export const initCartCountSet = (initCount) => ({
    type : CART_COUNT_INIT_SET,
    initCount
});


//remove item action
export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
};
//subtract qt action
export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }
};
//add qt action
export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}

//add qt action with quantity number
export const addQuantityWithNumber = (id, qty) => {
    return {
        type: ADD_QUANTITY_WITH_NUMBER,
        id,
        qty
    }
}

// Reset cart after form submit
export const resetCart = () => {
    return {
        type: RESET_CART
    }
}
