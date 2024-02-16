import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../slices/HistorySlice';

export const getWheelDegs = (state: StateSchema) => state.history.wheelDegs || initialState.wheelDegs;
