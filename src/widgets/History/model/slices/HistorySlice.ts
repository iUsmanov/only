import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HistorySchema } from '../types/HistorySchema';

export const initialState: HistorySchema = {
	selectedPoint: 1,
	wheelDegs: 0,
};

export const HistorySlice = createSlice({
	name: 'History',
	initialState,
	reducers: {
		selectPoint: (state, action: PayloadAction<number>) => {
			state.selectedPoint = action.payload;
		},
		setWheelDegs: (state, action: PayloadAction<number>) => {
			state.wheelDegs = action.payload;
		},
	},
});

export const { actions: HistoryActions } = HistorySlice;
export const { reducer: HistoryReducer } = HistorySlice;
