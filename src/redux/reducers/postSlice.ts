import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { CardTypes } from "../../components/Card";
import { SinglePageTypes } from "../../pages/SinglePage/SinglePage";

type InitialType = {
  postsList: CardTypes[];
  singlePost: SinglePageTypes | null;
  favoritePosts: SinglePageTypes[];
  cartPosts: SinglePageTypes[];
};

const initialState: InitialType = {
  postsList: [],
  singlePost: null,
  favoritePosts: [],
  cartPosts: [],
};

const postSlice = createSlice({
  name: "selected post",
  initialState,
  reducers: {
    getAllPosts: (_, __: PayloadAction<undefined>) => {},
    setAllPosts: (state, action: PayloadAction<CardTypes[]>) => {
      state.postsList = action.payload;
    },
    getSinglePost: (_, __: PayloadAction<string>) => {},
    setSinglePost: (state, action: PayloadAction<SinglePageTypes | null>) => {
      state.singlePost = action.payload;
    },
    setFavoriteStatus: (
      state,
      action: PayloadAction<{ status: boolean; card: SinglePageTypes | null }>
    ) => {
      const { card } = action.payload;

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
        status: boolean;
        count: number;
        card: SinglePageTypes | null;
      }>
    ) => {
      const { card, count } = action.payload;

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
  },
});

export const {
  getAllPosts,
  setAllPosts,
  getSinglePost,
  setSinglePost,
  setFavoriteStatus,
    setCartStatus
} = postSlice.actions;

export default postSlice.reducer;

export const PostSelectors = {
  getAllPosts: (state: RootState) => state.posts.postsList,
  getSinglePost: (state: RootState) => state.posts.singlePost,
  getFavorites: (state: RootState) => state.posts.favoritePosts,
  getCart: (state: RootState) => state.posts.cartPosts,
};
