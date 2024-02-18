import { memo, useEffect, useState } from 'react';
import cls from './EventsSlider.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Button } from '@/shared/ui/Button/Button';
import { Arrow } from '@/shared/ui/Arrow/Arrow';
import { getDevice } from '@/shared/lib/helpers/getDevice/getDevice';
import { EventsSwiper } from '../EventsSwiper/EventsSwiper';
import { useHistoryContext } from '../../lib/context/HistoryContext';

const { viewportWidth } = getDevice();

interface EventsSliderProps {
	className?: string;
	paginationElClassName: string;
	prevElClassName: string;
	nextElClassName: string;
}
export const EventsSlider = memo((props: EventsSliderProps) => {
	const { className, nextElClassName, paginationElClassName, prevElClassName } = props;
	const {
		historyData: { isEventsSliderHidden, pointsTitles, selectedPoint, years },
	} = useHistoryContext();
	const [yearsAfterTimeout, setYearsAfterTimeout] = useState(years?.(selectedPoint ?? 1));
	const [selectedPointAfterTimeout, setSelectedPointAfterTimeout] = useState(selectedPoint);

	useEffect(() => {
		setTimeout(() => {
			setSelectedPointAfterTimeout(selectedPoint);
			setYearsAfterTimeout(years?.(selectedPoint ?? 1));
		}, 700);
	}, [selectedPoint, years]);

	if (!selectedPoint || !years || !yearsAfterTimeout || !selectedPointAfterTimeout) return null;

	return (
		<div
			className={classNames(cls.eventsSlider, { [cls.isHidden]: isEventsSliderHidden }, [className])}
		>
			{viewportWidth <= 320 && (
				<div className={cls.pointTitle}>{pointsTitles?.[selectedPointAfterTimeout]}</div>
			)}
			{viewportWidth <= 320 && <div className={cls.horizontalLine}></div>}
			<div className={cls.sliderWithNav}>
				{viewportWidth > 320 && (
					<Button className={prevElClassName} size='40' shadow variant='circle' onClick={() => {}}>
						<Arrow course='left' size='s' />
					</Button>
				)}
				<EventsSwiper
					yearsAfterTimeout={yearsAfterTimeout}
					nextElClassName={nextElClassName}
					paginationElClassName={paginationElClassName}
					prevElClassName={prevElClassName}
				/>
				{viewportWidth > 320 && (
					<Button className={nextElClassName} size='40' shadow variant='circle' onClick={() => {}}>
						<Arrow course='right' size='s' />
					</Button>
				)}
			</div>
		</div>
	);
});
