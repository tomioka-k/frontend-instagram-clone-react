import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axios from "axios";
import { PROPS_AUTHEN, PROPS_PROFILE, NICK_NAME } from "../types";

const apiUrl = process.env.REACT_APP_DEV_API_URL;

export const fetchAsyncLogin = createAsyncThunk(
	"auth/post",
	async (authen: PROPS_AUTHEN) => {
		const res = await axios.post(`${apiUrl}authen/jwt/create/`, authen, {
			headers: {
				"Content-Type": "Application/json",
			},
		});
		return res.data;
	}
);

export const fetchAsyncRegister = createAsyncThunk(
	"auth/register",
	async (authen: PROPS_AUTHEN) => {
		const res = await axios.post(`${apiUrl}api/register/`, authen, {
			headers: {
				"Content-Type": "Application/json",
			},
		});
		return res.data;
	}
);

export const fetchAsyncCreateProfile = createAsyncThunk(
	"profile/post",
	async (nickName: PROPS_PROFILE) => {
		const res = await axios.post(`${apiUrl}api/profile`, nickName, {
			headers: {
				"Content-Type": "Application/json",
				Authorization: `JWT ${localStorage.localJWT}`,
			},
		});
		return res.data;
	}
);

export const fetchAsyncUpdateProf = createAsyncThunk(
	"profile/put",
	async (profile: PROPS_PROFILE) => {
		const uploadData = new FormData();
		uploadData.append("nickName", profile.nickName);
		profile.img && uploadData.append("img", profile.img, profile.img.name);
		const res = await axios.put(
			`${apiUrl}api/profile/${profile.id}`,
			uploadData,
			{
				headers: {
					"Content-Type": "Application/json",
					Authorization: `JWT ${localStorage.localJWT}`,
				},
			}
		);
		return res.data;
	}
);

export const fetchAsyncGetMyProf = createAsyncThunk(
	"profile/myprofile",
	async () => {
		const res = await axios.get(`${apiUrl}api/myprofile/`, {
			headers: {
				Authorization: `JWT ${localStorage.localJWT}`,
			},
		});
		return res.data[0];
	}
);

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
