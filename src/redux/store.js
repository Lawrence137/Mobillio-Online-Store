import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cartSlice';

// Configuration for redux-persist
const persistConfig = {
    key: 'root',
    storage,
}; 

// Your root reducer, you can combine multiple reducers here
const rootReducer = {
    cart: cartReducer,
    // other reducers go here
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store with the persisted reducer
const store = configureStore({
    reducer: persistedReducer,
});

export default store;