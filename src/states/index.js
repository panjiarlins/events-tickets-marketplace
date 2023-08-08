import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import usersReducer from './users/reducer';
import productsReducer from './products/reducer';
import isCreateProductButtonCloseOnClickReducer from './isCreateProductButtonCloseOnClick/reducer';
import userTransactionsReducer from './userTransactions/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    products: productsReducer,
    userTransactions: userTransactionsReducer,
    isCreateProductButtonCloseOnClick: isCreateProductButtonCloseOnClickReducer,
  },
});

export default store;
