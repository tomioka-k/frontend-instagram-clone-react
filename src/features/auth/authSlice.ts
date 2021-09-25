import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axios from "axios";
import { PROPS_AUTHEN, PROPS_PROFILE, NICK_NAME } from "../types";

const apiUrl = process.env.REACT_APP_DEV_API_URL;

const initialState = {
	openSignIn: true,
	openSignUp: false,
	openProfile: false,
	isLoadingAuth: false,
	myprofile: {
		id: 0,
		nickName: "",
		userProfile: 0,
		crated_on: "",
		img: "",
	},
	profiles: [
		{
			id: 0,
			nickName: "",
			userProfile: 0,
			created_on: "",
			img: "",
		},
	],
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		fetchCredStart(state) {
			state.isLoadingAuth = true;
		},
		fetchCredEnd(state) {
			state.isLoadingAuth = false;
		},
		setOpenSignIn(state) {
			state.openSignIn = true;
		},
		resetOpenSignIn(state) {
			state.openSignIn = false;
		},
		setOpenSignUP(state) {
			state.openSignUp = true;
		},
		resetOpenSignUp(state) {
			state.openSignUp = false;
		},
		setOpenProfile(state) {
			state.openProfile = true;
		},
		resetOpenProfile(state) {
			state.openProfile = false;
		},
		editNickname(state, action) {
			state.myprofile.nickName = action.payload;
		},
	},
});

export const {
	fetchCredStart,
	fetchCredEnd,
	setOpenSignIn,
	resetOpenSignIn,
	setOpenSignUP,
	resetOpenSignUp,
	setOpenProfile,
	resetOpenProfile,
	editNickname,
} = authSlice.actions;

export const selectAuth = (state: RootState) => state.counter.value;

export default authSlice.reducer;
