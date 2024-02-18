import { memo, useMemo, useState } from 'react';
import cls from './EventsSlider.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EventSlide } from '../EventSlide/EventSlide';
import { Button } from '@/shared/ui/Button/Button';
import { Arrow } from '@/shared/ui/Arrow/Arrow';
import { useSelector } from 'react-redux';
import { getYearsEvents } from '../../model/selectors/getYearsEvents';
import { getYears } from '../../model/selectors/getYears';
import { getIsEventsSliderHidden } from '../../model/selectors/getIsEventsSliderHidden';
import { getDevice } from '@/shared/lib/helpers/getDevice/getDevice';

const { viewportWidth } = getDevice();

interface EventsSliderProps {
	className?: string;
	paginationElClassName: string;
	prevElClassName: string;
	nextElClassName: string;
}
export const EventsSlider = memo((props: EventsSliderProps) => {
	const { className, nextElClassName, paginationElClassName, prevElClassName } = props;
	const yearsEvents = useSelector(getYearsEvents);
	const years = useSelector(getYears);
	const isEventsSliderHidden = useSelector(getIsEventsSliderHidden);
	const [yearss, setYearss] = useState(years);

	useMemo(() => {
		setTimeout(() => {
			setYearss(years);
		}, 700);
	}, [years]);

	if (!years || !yearss) return null;

	return (
		<div className={classNames(cls.eventsSlider, { [cls.isHidden]: isEventsSliderHidden }, [])}>
			{viewportWidth > 320 && (
				<Button className={prevElClassName} size='40' shadow variant='circle' onClick={() => {}}>
					<Arrow course='left' size='s' />
				</Button>
			)}
			<div
				className={classNames(cls.swiperWrapper)}
				style={{ width: viewportWidth > 320 ? 1150 : 278 }}
			>
				<Swiper
					className={cls.swiper}
					modules={[Pagination, ...(viewportWidth > 320 ? [Navigation] : [])]}
					navigation={
						viewportWidth > 320 && {
							nextEl: `.${nextElClassName}`,
							prevEl: `.${prevElClassName}`,
						}
					}
					pagination={
						viewportWidth <= 320 && {
							clickable: true,
							el: `.${paginationElClassName}`,
						}
					}
					spaceBetween={viewportWidth > 320 ? 80 : 30}
					slidesPerView={viewportWidth > 320 ? 3 : 1.5}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}
				>
					{yearsEvents[`${yearss[0]}-${yearss[1]}`].map((yearEvents) => {
						return (
							<SwiperSlide key={yearEvents.title}>
								{({ isActive }) => (
									<EventSlide
										text={yearEvents.text}
										title={yearEvents.title}
										className={!isActive ? cls.noActiveSlide : undefined}
									/>
								)}
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
			{viewportWidth > 320 && (
				<Button className={nextElClassName} size='40' shadow variant='circle' onClick={() => {}}>
					<Arrow course='right' size='s' />
				</Button>
			)}
		</div>
	);
});
