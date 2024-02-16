import { memo } from 'react';
import cls from './EventSlide.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface EventSlideProps {
	className?: string;
	title: string;
	text: string;
}

export const EventSlide = memo((props: EventSlideProps) => {
	const { className, text, title } = props;

	return (
		<div className={classNames(cls.eventSlide, {}, [className])}>
			<h3 className={cls.title}>{title}</h3>
			<p className={cls.text}>{text}</p>
		</div>
	);
});
