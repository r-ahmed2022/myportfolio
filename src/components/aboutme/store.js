/* eslint-disable eol-last */
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '.';

const store = configureStore({
  reducer: rootReducer,

});

export default store;