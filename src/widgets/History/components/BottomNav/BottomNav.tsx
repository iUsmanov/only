import { memo } from 'react';
import cls from './BottomNav.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { WheelNav } from '../WheelNav/WheelNav';
import { getDevice } from '@/shared/lib/helpers/getDevice/getDevice';

interface BottomNavProps {
	className?: string;
}

const { viewportWidth } = getDevice();

export const BottomNav = memo((props: BottomNavProps) => {
	const { className } = props;
	return (
		<div className={classNames(cls.bottomNav, {}, [className])}>
			<div className={cls.yearsNavAndPagination}>
				<WheelNav className={cls.wheelNav} />
				<div data-swiper-pagination className={cls.pagination}></div>
			</div>
		</div>
	);
});
