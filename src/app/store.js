import { configureStore, createSlice, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import counterReducer from "../features/counterSlice";
import userReducer from "../features/userSlice";

const makeStore = () =>
	configureStore({
		reducer: {
			counter: counterReducer,
			user: userReducer,
		},
		devTools: true,
	});

export const wrapper = createWrapper(makeStore);
