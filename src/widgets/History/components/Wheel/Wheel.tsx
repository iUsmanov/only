import { memo } from 'react';
import cls from './Wheel.module.scss';
import { WheelPoint } from '../WheelPoint/WheelPoint';
import { WheelDiameter } from '../WheelDiameter/WheelDiameter';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getWheelDegs } from '../../model/selectors/getWheelDegs';
import { getPointsTitles } from '../../model/selectors/getPointsTitles';

interface WheelProps {
	className?: string;
}

export const Wheel = memo((props: WheelProps) => {
	const { className } = props;
	const wheelDegs = useSelector(getWheelDegs);
	const pointsTitles = useSelector(getPointsTitles);

	return (
		<div className={cls.wheel} style={{ transform: `translate(-50%, -50%) rotate(${wheelDegs}deg)` }}>
			<WheelDiameter className={classNames(cls.one, {}, [cls.diameter])}>
				<WheelPoint className={cls.point} number={1} title={pointsTitles[1]} />
				<WheelPoint className={cls.point} number={4} title={pointsTitles[4]} />
			</WheelDiameter>
			<WheelDiameter className={classNames(cls.two, {}, [cls.diameter])}>
				<WheelPoint className={cls.point} number={2} title={pointsTitles[2]} />
				<WheelPoint className={cls.point} number={5} title={pointsTitles[5]} />
			</WheelDiameter>
			<WheelDiameter className={classNames(cls.three, {}, [cls.diameter])}>
				<WheelPoint className={cls.point} number={3} title={pointsTitles[3]} />
				<WheelPoint className={cls.point} number={6} title={pointsTitles[6]} />
			</WheelDiameter>
		</div>
	);
});
