import { configureStore } from "@reduxjs/toolkit";
import postReduces from "./reducers/postSlice";

const store = configureStore({
    reducer: {
        posts: postReduces,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;