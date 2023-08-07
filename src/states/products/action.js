import api from '../../utils/api';

const ActionType = {
  RECEIVE_PRODUCTS: 'RECEIVE_PRODUCTS',
  CREATE_PRODUCT: 'CREATE_PRODUCT',
  EDIT_PRODUCT: 'EDIT_PRODUCT',
  DELETE_PRODUCT: 'DELETE_PRODUCT',
};

function receiveProductsActionCreator(products) {
  return {
    type: ActionType.RECEIVE_PRODUCTS,
    payload: {
      products,
    },
  };
}

function createProductActionCreator(product) {
  return {
    type: ActionType.CREATE_PRODUCT,
    payload: {
      product,
    },
  };
}

function editProductActionCreator(product) {
  return {
    type: ActionType.EDIT_PRODUCT,
    payload: {
      product,
    },
  };
}

function deleteProductActionCreator(productId) {
  return {
    type: ActionType.DELETE_PRODUCT,
    payload: {
      productId,
    },
  };
}

function asyncReceiveProducts() {
  return async (dispatch) => {
    try {
      const { data: products } = await api.getAllProducts();
      dispatch(receiveProductsActionCreator(products));
    } catch (error) {
      console.log(error);
    }
  };
}

function asyncCreateProduct({
  userId,
  title,
  imageUrl,
  country,
  province,
  city,
  address,
  description,
  startAt,
  price,
  capacity,
}) {
  return async (dispatch) => {
    try {
      const { data: product, error } = await api.createProduct({
        userId,
        title,
        imageUrl,
        country,
        province,
        city,
        address,
        description,
        startAt,
        price,
        capacity,
      });
      dispatch(createProductActionCreator(product));
      return { error };
    } catch (error) {
      console.log(error);
    }
  };
}

function asyncEditProduct(productId, productDetail) {
  return async (dispatch) => {
    try {
      const { data: product } = await api.editProduct(productId, productDetail);
      dispatch(editProductActionCreator(product));
    } catch (error) {
      console.log(error);
    }
  };
}

function asyncDeleteProduct(productId) {
  return async (dispatch) => {
    try {
      const { error, message } = await api.deleteProduct(productId);
      if (!error) {
        dispatch(deleteProductActionCreator(productId));
        return;
      }
      console.log(message);
    } catch (error) {
      console.log(error);
    }
  };
}

export {
  ActionType,
  receiveProductsActionCreator,
  createProductActionCreator,
  editProductActionCreator,
  deleteProductActionCreator,
  asyncReceiveProducts,
  asyncCreateProduct,
  asyncEditProduct,
  asyncDeleteProduct,
};
