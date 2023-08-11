import { ActionType } from './action';

function productReviewsReducer(productReviews = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_PRODUCT_REVIEWS:
      return action.payload.productReviews;

    case ActionType.CREATE_PRODUCT_REVIEW:
      return [action.payload.productReview, ...productReviews];

    default:
      return productReviews;
  }
}

export default productReviewsReducer;
