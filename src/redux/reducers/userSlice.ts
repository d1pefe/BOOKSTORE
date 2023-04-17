import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";

type InitialType = {
    name: string | null,
    email: string | null,
    token: string | null,
    id: string | null
};

const initialState: InitialType = {
    name: null,
    email: null,
    token: null,
    id: null
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers: {
        setUser(state, action){
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
        }
    }
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;

export const PostSelectors = {
    getUserInfo: (state: RootState) => state.user,
};