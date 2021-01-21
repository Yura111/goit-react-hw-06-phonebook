import { combineReducers, createStore } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import phonebookReducer from './../redux/phonebook/phonebook-reducer'
import logger from 'redux-logger'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// const rootPhonebookReducer = combineReducers({
//     phonebook:phonebookReducer
// })
// const store = createStore(rootPhonebookReducer, composeWithDevTools());

const middleware = [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }), logger]

const persistConfig = {
    key: 'phonebook',
    storage,
    blacklist:['filter']
  }
   

const store = configureStore({
    // reducer:{
    //     phonebook:phonebookReducer
    // },
    reducer:{
        phonebook:persistReducer(persistConfig, phonebookReducer)
    },
    middleware,
    devTools:process.env.NODE_ENV === 'development'
})

const persistor = persistStore(store)

export default {store, persistor};
