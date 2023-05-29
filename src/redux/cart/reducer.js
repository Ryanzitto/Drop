import CartActiontypes from "./action-type";

const initialState = {
  products: [],
  historic: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActiontypes.ADD_PRODUCT:
      const existingProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        // O item já existe no array
        const updatedProducts = [...state.products];
        updatedProducts[existingProductIndex].quantity =
          action.payload.quantity;

        return {
          ...state,
          products: updatedProducts,
        };
      } else {
        // O item não existe no array, adicioná-lo como um novo item
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      }

    case CartActiontypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id === action.payload.id
        ),
      };

    case CartActiontypes.CLEAR_CART:
      return {
        ...state,
        products: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
