import { memo } from 'react';
import cls from './BottomNav.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { WheelNav } from '../WheelNav/WheelNav';

interface BottomNavProps {
	className?: string;
	paginationElClassName: string;
}

export const BottomNav = memo((props: BottomNavProps) => {
	const { className, paginationElClassName } = props;
	return (
		<div className={classNames(cls.bottomNav, {}, [className])}>
			<div className={cls.yearsNavAndPagination}>
				<WheelNav className={cls.wheelNav} />
				<div className={paginationElClassName}></div>
			</div>
		</div>
	);
});
