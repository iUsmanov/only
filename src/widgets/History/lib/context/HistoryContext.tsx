import { ReactNode, createContext, memo, useContext, useMemo, useState } from 'react';
import { HistorySchema } from '../../model/types/HistorySchema';
import { initialState } from './initialState';

export interface HistoryData extends Partial<HistorySchema> {
	years?: (point: number) => number[] | undefined;
}

export interface HistoryContextPayload {
	historyData?: HistoryData;
	setHistoryData?: React.Dispatch<React.SetStateAction<HistoryData>>;
}

interface HistoryProvider {
	children: ReactNode;
}

export const HistoryContext = createContext<HistoryContextPayload>({});

export const useHistoryContext = () => {
	return useContext(HistoryContext) as Required<HistoryContextPayload>;
};

export const HistoryProvider = memo((props: HistoryProvider) => {
	const { children } = props;
	const [state, setState] = useState<HistoryData>({ ...initialState });
	const value = useMemo(
		() => ({
			historyData: state,
			setHistoryData: setState,
		}),
		[state]
	);
	return <HistoryContext.Provider value={value}>{children}</HistoryContext.Provider>;
});
