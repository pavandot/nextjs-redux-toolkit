import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const counterSlice = createSlice({
	name: "counter",

	initialState: {
		count: 0,
	},

	reducers: {
		increment: (state) => {
			state.count += 1;
		},
		decrement: (state) => {
			state.count -= 1;
		},
	},

	extraReducers: {
		[HYDRATE]: (state, action) => {
			return {
				...state,
				...action.payload.counter,
			};
		},
	},
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
