import {all, call, put, takeLatest} from "redux-saga/effects";

import {
    getAllPosts,
    getSearchedPosts, GetSearchedPostsPayload,
    getSinglePost,
    setAllPosts,
    setSearchedPosts,
    setSinglePost,
} from "../reducers/postSlice";
import API from "../api";
import {ApiResponse} from "apisauce";
import {SinglePageTypes} from "../../pages/SinglePage/SinglePage";
import {PayloadAction} from "@reduxjs/toolkit";

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
    const {query, page} = action.payload
    const {ok, data, problem}: ApiResponse<any> = yield call(API.getSearchList, query, page);
    if (ok && data) {
        yield put(setSearchedPosts(data.books));
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