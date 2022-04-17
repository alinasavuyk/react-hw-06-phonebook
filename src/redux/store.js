import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactSlice';
import filterReducer from './filterSlice';

export default configureStore({
  reducer: {
    contact: contactReducer,
    filter: filterReducer,
  
  },
})
