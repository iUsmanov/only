import { memo } from 'react';
import cls from './Wheel.module.scss';
import { WheelPoint } from '../WheelPoint/WheelPoint';
import { WheelDiameter } from '../WheelDiameter/WheelDiameter';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useHistoryContext } from '../../lib/context/HistoryContext';

interface WheelProps {
	className?: string;
}

export const Wheel = memo((props: WheelProps) => {
	const { className } = props;
	const { historyData } = useHistoryContext();
	console.log(historyData.selectedPoint);

	if (!historyData.pointsTitles) return null;

	return (
		<div
			className={cls.wheel}
			style={{ transform: `translate(-50%, -50%) rotate(${historyData.wheelDegs}deg)` }}
		>
			<WheelDiameter className={classNames(cls.one, {}, [cls.diameter])}>
				<WheelPoint className={cls.point} number={1} title={historyData.pointsTitles[1]} />
				<WheelPoint className={cls.point} number={4} title={historyData.pointsTitles[4]} />
			</WheelDiameter>
			<WheelDiameter className={classNames(cls.two, {}, [cls.diameter])}>
				<WheelPoint className={cls.point} number={2} title={historyData.pointsTitles[2]} />
				<WheelPoint className={cls.point} number={5} title={historyData.pointsTitles[5]} />
			</WheelDiameter>
			<WheelDiameter className={classNames(cls.three, {}, [cls.diameter])}>
				<WheelPoint className={cls.point} number={3} title={historyData.pointsTitles[3]} />
				<WheelPoint className={cls.point} number={6} title={historyData.pointsTitles[6]} />
			</WheelDiameter>
		</div>
	);
});
