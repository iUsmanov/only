import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HistorySchema } from '../types/HistorySchema';
import { degreesMap, yearsEvents } from '../../consts/history';
import { halfReverse } from '../../lib/helpers/halfReverse';

export const initialState: HistorySchema = {
	selectedPoint: 1,
	wheelDegs: 0,
	yearsEvents: yearsEvents,
	isEventsSliderHidden: false,
	pointsQueue: [1, 2, 3, 4, 5, 6],
};

export const HistorySlice = createSlice({
	name: 'History',
	initialState,
	reducers: {
		selectPoint: (state, action: PayloadAction<number>) => {
			const finalDegs = state.wheelDegs + degreesMap[state.selectedPoint][action.payload];
			state.selectedPoint = action.payload;
			state.wheelDegs = finalDegs;
			state.pointsQueue = halfReverse(state.pointsQueue, action.payload);
			console.log(state.pointsQueue);
		},
		setIsEventsSliderHidden: (state, action: PayloadAction<boolean>) => {
			state.isEventsSliderHidden = action.payload;
		},
	},
});

export const { actions: HistoryActions } = HistorySlice;
export const { reducer: HistoryReducer } = HistorySlice;
