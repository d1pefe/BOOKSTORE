import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {RootState} from "../store";
import {CardTypes, GetSearchedPostsPayload, SetSearchedPostsPayload, SinglePageTypes} from "../../utils/@globalTypes";

type InitialType = {
    postsList: CardTypes[];
    singlePost: SinglePageTypes | null;
    favoritePosts: SinglePageTypes[];
    searchValue: string | null;
    searchedPosts: CardTypes[];
    postCounter: number;
    selectedPost: string | null;
    isVisibleSelectedModal: boolean;
};

const initialState: InitialType = {
    postsList: [],
    singlePost: null,
    favoritePosts: [],
    searchValue: null,
    searchedPosts: [],
    postCounter: 1,
    selectedPost: null,
    isVisibleSelectedModal: false,
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
    getSearchedPosts: (_, __: PayloadAction<GetSearchedPostsPayload>) => {},
    setSearchedValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setSearchedPosts: (
      state,
      {
        payload: { cardList, postCounter },
      }: PayloadAction<SetSearchedPostsPayload>
    ) => {
      state.searchedPosts = cardList;
      state.postCounter = postCounter;
    },
      setSelectedPost: (state, action: PayloadAction<string | null>) => {
          state.selectedPost = action.payload;
      },
      setPostVisibility: (state, action: PayloadAction<boolean>) => {
          state.isVisibleSelectedModal = action.payload;
      },
  },
});

export const {
    getAllPosts,
    setAllPosts,
    getSinglePost,
    setSinglePost,
    setFavoriteStatus,
    getSearchedPosts,
    setSearchedPosts,
    setSearchedValue,
    setSelectedPost,
    setPostVisibility,
} = postSlice.actions;

export default postSlice.reducer;

export const PostSelectors = {
    getAllPosts: (state: RootState) => state.posts.postsList,
    getSinglePost: (state: RootState) => state.posts.singlePost,
    getFavorites: (state: RootState) => state.posts.favoritePosts,
    getSearchedValue: (state: RootState) => state.posts.searchValue,
    getSearchedPosts: (state: RootState) => state.posts.searchedPosts,
    getSearchedPostsCount: (state: RootState) => state.posts.postCounter,
    getSelectedPost: (state: RootState) => state.posts.selectedPost,
    getVisibleSelectedPost: (state: RootState) =>
        state.posts.isVisibleSelectedModal,
};
