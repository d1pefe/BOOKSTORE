import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { CardTypes } from "../../components/Card";
import { SinglePageTypes } from "../../pages/SinglePage/SinglePage";

type InitialType = {
  postsList: CardTypes[];
  singlePost: SinglePageTypes | null;
  favoritePosts: SinglePageTypes[];
};

const initialState: InitialType = {
  postsList: [],
  singlePost: null,
  favoritePosts: [],
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
    setStatus: (
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
  },
});

export const {
  getAllPosts,
  setAllPosts,
  getSinglePost,
  setSinglePost,
  setStatus,
} = postSlice.actions;

export default postSlice.reducer;

export const PostSelectors = {
  getAllPosts: (state: RootState) => state.posts.postsList,
  getSinglePost: (state: RootState) => state.posts.singlePost,
  getFavorites: (state: RootState) => state.posts.favoritePosts,
};
