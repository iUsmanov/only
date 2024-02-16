import { memo } from 'react';
import cls from './EventSlide.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface EventSlideProps {
	className?: string;
}

export const EventSlide = memo((props: EventSlideProps) => {
	const { className } = props;

	return (
		<div className={classNames(cls.eventSlide, {}, [className])}>
			<h3 className={cls.title}>Title</h3>
			<p className={cls.text}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae eius magni neque quos?
			</p>
		</div>
	);
});
