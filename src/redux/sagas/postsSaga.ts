import {all, call, put, takeLatest} from "redux-saga/effects";

import {
    getAllPosts,
    getSearchedPosts,
    getSinglePost,
    setAllPosts,
    setSearchedPosts,
    setSinglePost,
} from "../reducers/postSlice";
import API from "../api";
import {ApiResponse} from "apisauce";
import {PayloadAction} from "@reduxjs/toolkit";
import {GetSearchedPostsPayload, SinglePageTypes} from "../../utils/@globalTypes";

function* getAllPostsWorker() {
    const {ok, data, problem}: ApiResponse<any> = yield call(API.getPosts);
    if (ok) {
        yield put(setAllPosts(data.books));
    } else {
        console.warn("Error getting all posts ", problem);
    }
}

function* getSinglePostsWorker(action: PayloadAction<string>) {
    const {ok, data, problem}: ApiResponse<SinglePageTypes> = yield call(API.getPost, action.payload);
    if (ok && data) {
        yield put(setSinglePost(data));
    } else {
        console.warn("Error getting single posts ", problem)
    }
}

function* getSearchedPostsWorker(action: PayloadAction<GetSearchedPostsPayload>) {
    const { page, query } = action.payload;
    const {ok, data, problem}: ApiResponse<any> = yield call(API.getSearchList, page, query);
    if (ok && data) {
        yield put(setSearchedPosts({cardList: data.books, postCounter: data.total}));
    } else {
        console.warn("Error getting search posts ", problem)
    }
}

export default function* postsSaga() {
    yield all([
        takeLatest(getAllPosts, getAllPostsWorker),
        takeLatest(getSinglePost, getSinglePostsWorker),
        takeLatest(getSearchedPosts, getSearchedPostsWorker)
    ])
};