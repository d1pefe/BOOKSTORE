import { configureStore } from "@reduxjs/toolkit";
import postReduces from "./reducers/postSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        posts: postReduces,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>;

export default store;