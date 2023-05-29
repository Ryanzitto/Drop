import CartActiontypes from "./action-type";

export const addProductToCart = (payload) => ({
  type: CartActiontypes.ADD_PRODUCT,
  payload,
});

export const openCart = () => ({
  type: CartActiontypes.OPEN_CART,
});

export const closeCart = () => ({
  type: CartActiontypes.CLOSE_CART,
});

export const removeProductFromCart = (payload) => ({
  type: CartActiontypes.REMOVE_PRODUCT,
  payload,
});

export const increaseProductQuantity = () => ({
  type: CartActiontypes.INCREASE_PRODUCT_QUANTITY,
});

export const decreaseProductQuantity = (payload) => ({
  type: CartActiontypes.DECREASE_PRODUCT_QUANTITY,
  payload,
});

export const clearCart = () => ({
  type: CartActiontypes.CLEAR_CART,
});

export const addToHistory = (payload) => ({
  type: CartActiontypes.ADD_TO_HISTORY,
  payload,
});
