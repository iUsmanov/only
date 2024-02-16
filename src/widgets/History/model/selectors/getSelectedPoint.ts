import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../slices/HistorySlice';

export const getSelectedPoint = (state: StateSchema) =>
	state.history.selectedPoint || initialState.selectedPoint;
