import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../slices/HistorySlice';

export const getPointsQueue = (state: StateSchema) =>
	state.history.pointsQueue || initialState.pointsQueue;
