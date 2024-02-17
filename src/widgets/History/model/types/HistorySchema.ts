import { YearEvents } from './History';

export interface HistorySchema {
	selectedPoint: number;
	wheelDegs: number;
	yearsEvents: Record<string, YearEvents[]>;
	isEventsSliderHidden: boolean;
	pointsQueue: number[];
}
