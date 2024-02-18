import { YearEvents } from './History';

export interface HistorySchema {
	selectedPoint: number;
	wheelDegs: number;
	yearsEvents: Record<string, YearEvents[]>;
	isEventsSliderHidden: boolean;
	pointsTitles: Record<string, string>;
}
