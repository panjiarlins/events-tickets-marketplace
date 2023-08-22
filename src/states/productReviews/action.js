import api from '../../utils/api';

const ActionType = {
  RECEIVE_PRODUCT_REVIEWS: 'RECEIVE_PRODUCT_REVIEWS',
  CREATE_PRODUCT_REVIEW: 'CREATE_PRODUCT_REVIEW',
};

function receiveProductReviewsActionCreator(productReviews) {
  return {
    type: ActionType.RECEIVE_PRODUCT_REVIEWS,
    payload: { productReviews },
  };
}

function createProductReviewActionCreator(productReview) {
  return {
    type: ActionType.CREATE_PRODUCT_REVIEW,
    payload: { productReview },
  };
}

function asyncReceiveProductReviews({ productId }) {
  return async (dispatch) => {
    try {
      const { data } = await api.getProductReviews({ productId });
      dispatch(receiveProductReviewsActionCreator(data));
    } catch (error) {
      console.log(error);
    }
  };
}

function asyncCreateProductReview({
  userId, productId, comment, rating,
}) {
  return async (dispatch) => {
    try {
      const { data } = await api.createProductReview({
        userId,
        productId,
        comment,
        rating,
      });
      dispatch(createProductReviewActionCreator(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export {
  ActionType,
  receiveProductReviewsActionCreator,
  createProductReviewActionCreator,
  asyncReceiveProductReviews,
  asyncCreateProductReview,
};
