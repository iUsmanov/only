import { memo } from 'react';
import cls from './EventsSlider.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EventSlide } from '../EventSlide/EventSlide';

interface EventsSliderProps {
	className?: string;
}
export const EventsSlider = memo((props: EventsSliderProps) => {
	const { className } = props;

	return (
		<div className={classNames(cls.EventsSlider)} style={{ width: 1362 }}>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar]}
				navigation
				spaceBetween={50}
				slidesPerView={3}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
				<SwiperSlide>
					<EventSlide />
				</SwiperSlide>
				<SwiperSlide>
					<EventSlide />
				</SwiperSlide>
				<SwiperSlide>
					<EventSlide />
				</SwiperSlide>
				<SwiperSlide>
					<EventSlide />
				</SwiperSlide>
				<SwiperSlide>
					<EventSlide />
				</SwiperSlide>
				<SwiperSlide>
					<EventSlide />
				</SwiperSlide>
			</Swiper>
		</div>
	);
});
