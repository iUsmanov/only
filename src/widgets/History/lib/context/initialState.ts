import { yearsEvents } from '../../consts/history';
import { HistoryData } from './HistoryContext';

export const initialState: HistoryData = {
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
	years: function (point: number) {
		switch (point) {
			case 1:
				return [1975, 1980];
			case 2:
				return [1980, 1985];
			case 3:
				return [1985, 1990];
			case 4:
				return [1990, 1995];
			case 5:
				return [1995, 2000];
			case 6:
				return [2000, 2005];
			default:
				return [1975, 1980];
		}
	},
};
