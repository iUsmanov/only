import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../slices/HistorySlice';

export const getYearsEvents = (state: StateSchema) =>
	state.history.yearsEvents || initialState.yearsEvents;
