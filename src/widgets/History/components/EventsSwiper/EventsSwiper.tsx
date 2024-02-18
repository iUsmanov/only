import { memo } from 'react';
import cls from './EventsSwiper.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EventSlide } from '../EventSlide/EventSlide';
import { useSelector } from 'react-redux';
import { getYearsEvents } from '../../model/selectors/getYearsEvents';
import { getDevice } from '@/shared/lib/helpers/getDevice/getDevice';

const { viewportWidth } = getDevice();

interface EventsSwiperProps {
	className?: string;
	paginationElClassName: string;
	prevElClassName: string;
	nextElClassName: string;
	yearsAfterTimeout: number[];
}
export const EventsSwiper = memo((props: EventsSwiperProps) => {
	const { className, nextElClassName, paginationElClassName, prevElClassName, yearsAfterTimeout } =
		props;
	const yearsEvents = useSelector(getYearsEvents);

	return (
		<div
			className={classNames(cls.swiperWrapper, {}, [className])}
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
				{yearsEvents[`${yearsAfterTimeout[0]}-${yearsAfterTimeout[1]}`].map((yearEvents) => {
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
	);
});
