import { ADD_ADDRESS, ADD_ORDER, ADD_TO_CART, ADD_TO_WISHLIST, DELET_ADDRESS, DELET_ORDER, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from "./ActionsTypes";

export const addItemToCart = data =>({
    type: ADD_TO_CART,
    payload :data,
})

export const removeFromCart = index =>({
    type: REMOVE_FROM_CART,
    payload :index,
})

export const addToWishlist = data =>({
    type: ADD_TO_WISHLIST,
    payload :data,
})

export const removeFromWishlist = index =>({
    type: REMOVE_FROM_WISHLIST,
    payload :index,
})

export const addAddress = data =>({
    type: ADD_ADDRESS,
    payload :data,
})

export const deletAddress = index =>({
    type: DELET_ADDRESS,
    payload :index,
})

export const addOrder = data =>({
    type: ADD_ORDER,
    payload :data,
})

export const deletOrder = index =>({
    type: DELET_ORDER,
    payload :index,
})