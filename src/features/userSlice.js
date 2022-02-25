import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const fetchUserId = createAsyncThunk("user/data", async () => {
	return fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json());
});

const user = createSlice({
	name: "user",
	initialState: {
		data: [],
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUserId.fulfilled, (state, action) => {
			state.data = action.payload;
		});
		builder.addCase(HYDRATE, (state, action) => {
			state.data = action.payload.user.data;
		});
	},
});

export default user.reducer;
