import { memo } from 'react';
import cls from './Wheel.module.scss';
import { WheelPoint } from '../WheelPoint/WheelPoint';
import { WheelDiameter } from '../WheelDiameter/WheelDiameter';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getWheelDegs } from '../../model/selectors/getWheelDegs';

interface WheelProps {
	className?: string;
}

export const Wheel = memo((props: WheelProps) => {
	const { className } = props;
	const wheelDegs = useSelector(getWheelDegs);

	return (
		<div className={cls.wheel} style={{ transform: `translate(-50%, -50%) rotate(${wheelDegs}deg)` }}>
			<WheelDiameter className={classNames(cls.one, {}, [cls.diameter])}>
				<WheelPoint className={cls.point} number={1} />
				<WheelPoint className={cls.point} number={4} />
			</WheelDiameter>
			<WheelDiameter className={classNames(cls.two, {}, [cls.diameter])}>
				<WheelPoint className={cls.point} number={2} />
				<WheelPoint className={cls.point} number={5} />
			</WheelDiameter>
			<WheelDiameter className={classNames(cls.three, {}, [cls.diameter])}>
				<WheelPoint className={cls.point} number={3} />
				<WheelPoint className={cls.point} number={6} />
			</WheelDiameter>
		</div>
	);
});
