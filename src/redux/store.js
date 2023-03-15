import { configureStore,combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux"
import  userReducer  from "./userRedux";
import  adminReducer  from "./adminUserRedux";
import productReducer from "./productRedux";
import getUserReducer from "./allUsersRedux"


import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
const adminPersistConfig={
  key:"admin",
  versio:1,
  storage,
}



  const rootReducer = combineReducers({
    user: userReducer,
    cart:cartReducer,
    adminUser: persistReducer(adminPersistConfig, adminReducer), 
    product:productReducer,
    getUser:getUserReducer
  })  
  
  const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store= configureStore({

    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

})

export let persistor = persistStore(store)
    
