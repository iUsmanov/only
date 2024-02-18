import { memo, useEffect, useState } from 'react';
import cls from './EventsSlider.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Button } from '@/shared/ui/Button/Button';
import { Arrow } from '@/shared/ui/Arrow/Arrow';
import { useSelector } from 'react-redux';
import { getYears } from '../../model/selectors/getYears';
import { getIsEventsSliderHidden } from '../../model/selectors/getIsEventsSliderHidden';
import { getDevice } from '@/shared/lib/helpers/getDevice/getDevice';
import { EventsSwiper } from '../EventsSwiper/EventsSwiper';
import { getSelectedPoint } from '../../model/selectors/getSelectedPoint';
import { getPointsTitles } from '../../model/selectors/getPointsTitles';

const { viewportWidth } = getDevice();

interface EventsSliderProps {
	className?: string;
	paginationElClassName: string;
	prevElClassName: string;
	nextElClassName: string;
}
export const EventsSlider = memo((props: EventsSliderProps) => {
	const { className, nextElClassName, paginationElClassName, prevElClassName } = props;
	const years = useSelector(getYears);
	const isEventsSliderHidden = useSelector(getIsEventsSliderHidden);
	const pointsTitles = useSelector(getPointsTitles);
	const selectedPoint = useSelector(getSelectedPoint);
	const [yearsAfterTimeout, setYearsAfterTimeout] = useState(years);
	const [selectedPointAfterTimeout, setSelectedPointAfterTimeout] = useState(selectedPoint);

	useEffect(() => {
		setTimeout(() => {
			setSelectedPointAfterTimeout(selectedPoint);
			setYearsAfterTimeout(years);
		}, 700);
	}, [selectedPoint, years]);

	if (!years || !yearsAfterTimeout) return null;

	return (
		<div
			className={classNames(cls.eventsSlider, { [cls.isHidden]: isEventsSliderHidden }, [className])}
		>
			{viewportWidth <= 320 && (
				<div className={cls.pointTitle}>{pointsTitles[selectedPointAfterTimeout]}</div>
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
