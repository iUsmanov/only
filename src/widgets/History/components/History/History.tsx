import { memo } from 'react';
import cls from './History.module.scss';
import { EventsSlider } from '../EventsSlider/EventsSlider';
import { Header } from '../Header/Header';
import { PeroidSlider } from '../PeroidSlider/PeroidSlider';
import { Cross } from '../Cross/Cross';
import { getDevice } from '@/shared/lib/helpers/getDevice/getDevice';
import { BottomNav } from '../BottomNav/BottomNav';
import { HistoryProvider } from '../../lib/context/HistoryContext';

const { viewportWidth } = getDevice();

export const History = memo(() => {
	return (
		<HistoryProvider>
			<HistoryComponent />
		</HistoryProvider>
	);
});

const HistoryComponent = memo(() => {
	// const { isEventsSliderHidden, pointsTitles, selectedPoint, wheelDegs, years, yearsEvents } =
	// 	useHistoryContext();

	// if (!pointsTitles || !selectedPoint || !years() || !yearsEvents) {
	// 	return null;
	// }

	return (
		<main className={cls.container}>
			<section className={cls.history}>
				{viewportWidth > 320 && <Cross />}
				<Header className={cls.header} />
				<PeroidSlider className={cls.peroidSlider} />
				<EventsSlider
					nextElClassName={cls.nextEl}
					paginationElClassName={cls.paginationEl}
					prevElClassName={cls.prevEl}
				/>
				{viewportWidth <= 320 && (
					<BottomNav paginationElClassName={cls.paginationEl} className={cls.bottomNav} />
				)}
			</section>
		</main>
	);
});
