import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import usersReducer from './users/reducer';
import productsReducer from './products/reducer';
import isCreateEventButtonCloseOnClickReducer from './isCreateEventButtonCloseOnClick/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    products: productsReducer,
    isCreateEventButtonCloseOnClick: isCreateEventButtonCloseOnClickReducer,
  },
});

export default store;
