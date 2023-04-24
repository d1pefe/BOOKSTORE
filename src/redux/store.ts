import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postReduces from "./reducers/postSlice";
import userReducer from "./reducers/userSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import {cartReducer} from "./reducers/cartSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    posts: postReduces,
    user: userReducer,
    cart: cartReducer,
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducers = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducers,
    middleware: [sagaMiddleware],
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;