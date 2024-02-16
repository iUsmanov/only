import { createSelector } from '@reduxjs/toolkit';
import { getSelectedPoint } from './getSelectedPoint';

export const getYears = createSelector(getSelectedPoint, (selectedPoint) => {
	switch (selectedPoint) {
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
	}
});
