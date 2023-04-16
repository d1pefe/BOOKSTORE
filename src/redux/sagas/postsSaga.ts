import { takeLatest, all, call, put } from "redux-saga/effects"

import {getAllPosts, getSinglePost, setAllPosts, setSinglePost } from "../reducers/postSlice";
import API from "../api";
import {ApiResponse} from "apisauce";
import {SinglePageTypes} from "../../pages/SinglePage/SinglePage";
import {PayloadAction} from "@reduxjs/toolkit";

function* getAllPostsWorker() {
    const { ok, data, problem }: ApiResponse<any> = yield call(API.getPosts);
    if (ok) {
        yield put(setAllPosts(data.books));
    } else {
        console.warn("Error getting all posts ", problem)
    }
}

function* getSinglePostsWorker(action: PayloadAction<string>) {
    const { ok, data, problem }: ApiResponse<SinglePageTypes> = yield call(API.getPost, action.payload);
    if (ok && data) {
        yield put(setSinglePost(data));
    } else {
        console.warn("Error getting single posts ", problem)
    }
}

export default function* postsSaga() {
    yield all([
        takeLatest(getAllPosts, getAllPostsWorker),
        takeLatest(getSinglePost, getSinglePostsWorker),
    ])
};