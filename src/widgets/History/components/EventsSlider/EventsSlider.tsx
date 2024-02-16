import { memo } from 'react';
import cls from './EventsSlider.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EventSlide } from '../EventSlide/EventSlide';
import { Button } from '@/shared/ui/Button/Button';
import { Arrow } from '@/shared/ui/Header/Arrow';
import { useSelector } from 'react-redux';
import { getYearsEvents } from '../../model/selectors/getYearsEvents';
import { getYears } from '../../model/selectors/getYears';

interface EventsSliderProps {
	className?: string;
}
export const EventsSlider = memo((props: EventsSliderProps) => {
	const { className } = props;
	const yearsEvents = useSelector(getYearsEvents);
	const years = useSelector(getYears);

	if (!years) return null;

	return (
		<div className={cls.eventsSlider}>
			<Button data-swiper-prev size='40' shadow variant='circle' onClick={() => {}}>
				<Arrow course='left' size='s' />
			</Button>
			<div className={classNames(cls.swiperWrapper)} style={{ width: 1150 }}>
				<Swiper
					className={cls.swiper}
					modules={[Navigation, Pagination]}
					navigation={{
						nextEl: '[data-swiper-next]',
						prevEl: '[data-swiper-prev]',
					}}
					spaceBetween={80}
					slidesPerView={3}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}
				>
					{yearsEvents[`${years[0]}-${years[1]}`].map((yearEvents) => {
						return (
							<SwiperSlide key={yearEvents.title}>
								<EventSlide text={yearEvents.text} title={yearEvents.title} />
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
			<Button data-swiper-next size='40' shadow variant='circle' onClick={() => {}}>
				<Arrow course='right' size='s' />
			</Button>
		</div>
	);
});
