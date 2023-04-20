import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {RootState} from "../store";
import {CardTypes} from "../../components/Card";
import {SinglePageTypes} from "../../pages/SinglePage/SinglePage";

type InitialType = {
    postsList: CardTypes[];
    singlePost: SinglePageTypes | null;
    favoritePosts: SinglePageTypes[];
    cartPosts: SinglePageTypes[];
    searchValue: string | null;
    searchedPosts: CardTypes[];
};

const initialState: InitialType = {
    postsList: [],
    singlePost: null,
    favoritePosts: [],
    cartPosts: [],
    searchValue: null,
    searchedPosts: [],
};

const postSlice = createSlice({
    name: "selected post",
    initialState,
    reducers: {
        getAllPosts: (_, __: PayloadAction<undefined>) => {
        },
        setAllPosts: (state, action: PayloadAction<CardTypes[]>) => {
            state.postsList = action.payload;
        },
        getSinglePost: (_, __: PayloadAction<string>) => {
        },
        setSinglePost: (state, action: PayloadAction<SinglePageTypes | null>) => {
            state.singlePost = action.payload;
        },
        setFavoriteStatus: (
            state,
            action: PayloadAction<{ status: boolean; card: SinglePageTypes | null }>
        ) => {
            const {card} = action.payload;

            const favoritesIndex = state.favoritePosts.findIndex(
                (book) => book.isbn13 === card?.isbn13
            );

            if (favoritesIndex === -1 && card) {
                state.favoritePosts.push(card);
            } else {
                state.favoritePosts.splice(favoritesIndex, 1);
            }
        },
        setCartStatus: (
            state,
            action: PayloadAction<{
                count: number;
                card: SinglePageTypes | null;
            }>
        ) => {
            const {card, count} = action.payload;

            const cartIndex = state.cartPosts.findIndex(
                (book) => book.isbn13 === card?.isbn13
            );

            if (cartIndex === -1 && card) {
                state.cartPosts.push(card);
            } else {
                state.cartPosts.splice(cartIndex, 1);
            }

            if (count === 0 && count < 0) {
                state.cartPosts.splice(cartIndex, 1)
            }
        },
        getSearchedPosts: (_, __: PayloadAction<string>) => {
        },
        setSearchedValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
        setSearchedPosts: (state, action: PayloadAction<CardTypes[]>) => {
            state.searchedPosts = action.payload;
        },
    },
});

export const {
    getAllPosts,
    setAllPosts,
    getSinglePost,
    setSinglePost,
    setFavoriteStatus,
    setCartStatus,
    getSearchedPosts,
    setSearchedPosts,
    setSearchedValue
} = postSlice.actions;

export default postSlice.reducer;

export const PostSelectors = {
    getAllPosts: (state: RootState) => state.posts.postsList,
    getSinglePost: (state: RootState) => state.posts.singlePost,
    getFavorites: (state: RootState) => state.posts.favoritePosts,
    getCart: (state: RootState) => state.posts.cartPosts,
    getSearchedValue: (state: RootState) => state.posts.searchValue,
    getSearchedPosts: (state: RootState) => state.posts.searchedPosts,
};
