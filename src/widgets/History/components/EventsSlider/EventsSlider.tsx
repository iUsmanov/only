import { memo, useRef } from 'react';
import cls from './EventsSlider.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from 'swiper/react';
// import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EventSlide } from '../EventSlide/EventSlide';
import { Button } from '@/shared/ui/Button/Button';
import { Arrow } from '@/shared/ui/Header/Arrow';

interface EventsSliderProps {
	className?: string;
}
export const EventsSlider = memo((props: EventsSliderProps) => {
	const { className } = props;
	const nextRef = useRef(null);
	const lastRef = useRef(null);
	const swiperRef = useRef<SwiperRef>(null);
	const swiper = useSwiper();

	const s = (s: any) => {
		setInterval(() => {
			console.log(s);
		}, 500);
	};

	return (
		<div className={cls.eventsSlider}>
			<Button data-swiper-prev size='40' shadow variant='circle' onClick={() => {}}>
				<Arrow course='left' size='s' />
			</Button>
			<div className={classNames(cls.swiperWrapper)} style={{ width: 1150 }}>
				<Swiper
					ref={swiperRef}
					className={cls.swiper}
					modules={[Navigation, Pagination]}
					navigation={{
						nextEl: '[data-swiper-next]',
						prevEl: '[data-swiper-prev]',
					}}
					// navigation
					spaceBetween={80}
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
			<Button data-swiper-next size='40' shadow variant='circle' onClick={() => {}}>
				<Arrow course='right' size='s' />
			</Button>
		</div>
	);
});
