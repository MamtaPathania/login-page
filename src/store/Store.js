// import { configureStore } from "@reduxjs/toolkit";
// import languageReducer from '../slice/languageSlice'


// const store=configureStore({
//     reducer:{
//         language:languageReducer
//     }
// })

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import languageReducer from '../slice/languageSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, languageReducer);

const store = configureStore({
    reducer: {
        language: persistedReducer,
    },
});

export const persistor = persistStore(store);
export default store;
