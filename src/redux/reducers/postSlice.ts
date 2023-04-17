import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { CardTypes } from "../../components/Card";
import { SinglePageTypes } from "../../pages/SinglePage/SinglePage";

type InitialType = {
  selectedPost: CardTypes | null;
  isVisibleSelectedModal: boolean;
  favoritePost: SinglePageTypes | null;
  isFavoritePost: boolean;
  postsList: CardTypes[];
  idFromUrl: string | undefined;
  singlePost: SinglePageTypes | null;
};

const initialState: InitialType = {
  selectedPost: null,
  isVisibleSelectedModal: false,
  favoritePost: null,
  isFavoritePost: false,
  postsList: [],
  idFromUrl: undefined,
  singlePost: null,
};

const postSlice = createSlice({
  name: "selected post",
  initialState,
  reducers: {
    getAllPosts: (_, __: PayloadAction<undefined>) => {},
    setAllPosts: (state, action: PayloadAction<CardTypes[]>) => {
      state.postsList = action.payload;
    },
    setFavoritePost: (state, action: PayloadAction<SinglePageTypes | null>) => {
      state.favoritePost = action.payload;
    },
    setFavoritePostStatus: (state, action: PayloadAction<boolean>) => {
      state.isFavoritePost = action.payload;
    },
    getSinglePost: (_, __: PayloadAction<string>) => {},
    setSinglePost: (state, action: PayloadAction<SinglePageTypes | null>) => {
      state.singlePost = action.payload;
    },
  },
});

export const {
  getAllPosts,
  setAllPosts,
  setFavoritePost,
  setFavoritePostStatus,
  getSinglePost,
  setSinglePost,
} = postSlice.actions;

export default postSlice.reducer;

export const PostSelectors = {
  getFavoritePostStatus: (state: RootState) => state.posts.isFavoritePost,
  // getFavoritesPost: (state: RootState) => state.posts.favoritePost, TODO customize your favorites page
  getAllPosts: (state: RootState) => state.posts.postsList,
  getSinglePost: (state: RootState) => state.posts.singlePost,
};
