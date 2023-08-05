import { ActionType } from './action';

function productsReducer(products = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_PRODUCTS:
      return action.payload.products;

    case ActionType.CREATE_PRODUCT:
      return [action.payload.product, ...products];

    case ActionType.EDIT_PRODUCT:
      return products.map((product) => {
        if (product.id === action.payload.product.id) {
          return {
            ...product,
            ...action.payload.product,
          };
        }
      });

    case ActionType.DELETE_PRODUCT:
      return products.filter(
        (product) => product.id !== action.payload.productId
      );

    default:
      return products;
  }
}

export default productsReducer;
