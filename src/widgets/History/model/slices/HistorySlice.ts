import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HistorySchema } from '../types/HistorySchema';
import { degreesMap, yearsEvents } from '../../consts/history';

export const initialState: HistorySchema = {
	selectedPoint: 1,
	wheelDegs: 0,
	yearsEvents: yearsEvents,
	isEventsSliderHidden: false,
	pointsTitles: {
		1: 'Кино',
		2: 'Литература',
		3: 'Музыка',
		4: 'Наука',
		5: 'Путешествия',
		6: 'Работа',
	},
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
		setIsEventsSliderHidden: (state, action: PayloadAction<boolean>) => {
			state.isEventsSliderHidden = action.payload;
		},
	},
});

export const { actions: HistoryActions } = HistorySlice;
export const { reducer: HistoryReducer } = HistorySlice;
