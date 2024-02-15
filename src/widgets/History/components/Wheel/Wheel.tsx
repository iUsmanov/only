import { memo } from 'react';
import cls from './Wheel.module.scss';
import { WheelPoint } from '../WheelPoint/WheelPoint';

interface WheelProps {
	className?: string;
}

export const Wheel = memo((props: WheelProps) => {
	const { className } = props;

	return (
		<div className={cls.wheel}>
			{/* <WheelDiameter className={classNames(cls.one, {}, [cls.diameter])}> */}
			<WheelPoint className={cls.point} number={1} onClick={() => {}} />
			<WheelPoint className={cls.point} number={2} onClick={() => {}} />
			{/* </WheelDiameter> */}
			{/* <WheelDiameter className={classNames(cls.two, {}, [cls.diameter])}> */}
			<WheelPoint className={cls.point} number={3} onClick={() => {}} />
			<WheelPoint className={cls.point} number={4} onClick={() => {}} />
			{/* </WheelDiameter> */}
			{/* <WheelDiameter className={classNames(cls.three, {}, [cls.diameter])}> */}
			<WheelPoint className={cls.point} number={5} onClick={() => {}} />
			<WheelPoint className={cls.point} number={6} onClick={() => {}} />
			{/* </WheelDiameter> */}
		</div>
	);
});
