import { configureStore } from "@reduxjs/toolkit";
import postReduces from "./reducers/postSlice";
import userReducer from "./reducers/userSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        posts: postReduces,
        user: userReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;