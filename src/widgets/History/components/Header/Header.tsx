import { memo } from 'react';
import cls from './Header.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export const Header = memo((props: { className?: string }) => {
	const { className } = props;
	return (
		<div className={classNames(cls.header, {}, [className])}>
			<div className={cls.gradient}></div>
			<div className={cls.text}>
				Исторические
				<br /> даты
			</div>
		</div>
	);
});
