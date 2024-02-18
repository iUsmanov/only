import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../slices/HistorySlice';

export const getPointsTitles = (state: StateSchema) =>
	state.history.pointsTitles || initialState.pointsTitles;
