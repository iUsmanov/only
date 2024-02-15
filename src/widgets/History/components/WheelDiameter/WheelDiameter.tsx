import { ReactNode, memo } from 'react';
import cls from './WheelDiameter.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface WheelDiameter {
	className?: string;
	children: ReactNode;
}

export const WheelDiameter = memo((props: WheelDiameter) => {
	const { children, className } = props;

	return <div className={classNames(cls.one, {}, [className, cls.diameter])}>{children}</div>;
});
