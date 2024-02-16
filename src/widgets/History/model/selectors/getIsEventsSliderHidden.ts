import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../slices/HistorySlice';

export const getIsEventsSliderHidden = (state: StateSchema) =>
	state.history.isEventsSliderHidden || initialState.isEventsSliderHidden;
