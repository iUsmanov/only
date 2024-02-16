import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HistorySchema } from '../types/HistorySchema';
import { degreesMap, yearsEvents } from '../../consts/history';

export const initialState: HistorySchema = {
	selectedPoint: 1,
	wheelDegs: 0,
	yearsEvents: yearsEvents,
};

export const HistorySlice = createSlice({
	name: 'History',
	initialState,
	reducers: {
		selectPoint: (state, action: PayloadAction<number>) => {
			const finalDegs = state.wheelDegs + degreesMap[state.selectedPoint][action.payload];
			state.selectedPoint = action.payload;
			state.wheelDegs = finalDegs;
		},
	},
});

export const { actions: HistoryActions } = HistorySlice;
export const { reducer: HistoryReducer } = HistorySlice;
