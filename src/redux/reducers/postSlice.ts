import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import { RootState } from "../store";
import {CardTypes} from "../../components/Card";

type InitialType = {
    selectedPost: CardTypes | null,
    isVisibleSelectedModal: boolean
}

const initialState: InitialType = {
    selectedPost: null,
    isVisibleSelectedModal: false,
}

const postSlice = createSlice({
    name: "selected post",
    initialState,
    reducers: {
        setSelectedPost:(state, action:PayloadAction<CardTypes | null>) => {
            state.selectedPost = action.payload;
        },
        setPostVisibility: (state, action:PayloadAction<boolean>) => {
            state.isVisibleSelectedModal = action.payload;
        }
    },
});

export const { setSelectedPost, setPostVisibility } = postSlice.actions;

export default postSlice.reducer;

export const PostSelectors = {
    getSelectedPost : (state: RootState) =>
        state.posts.selectedPost,
    getVisibleSelectedPost : (state: RootState) =>
        state.posts.isVisibleSelectedModal,
};