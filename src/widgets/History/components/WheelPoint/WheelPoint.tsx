import { memo } from 'react';
import cls from './WheelPoint.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HistoryActions } from '../../model/slices/HistorySlice';
import { useSelector } from 'react-redux';
import { getSelectedPoint } from '../../model/selectors/getSelectedPoint';
import { getWheelDegs } from '../../model/selectors/getWheelDegs';
import { classNames } from '@/shared/lib/classNames/classNames';

interface WheelPointProps {
	className?: string;
	number: number;
	title: string;
}

export const WheelPoint = memo((props: WheelPointProps) => {
	const { number, title } = props;
	const dispatch = useAppDispatch();
	const selectedPoint = useSelector(getSelectedPoint);
	const wheelDegs = useSelector(getWheelDegs);

	const onClick = () => {
		dispatch(HistoryActions.selectPoint(number));

		const toggleIsHidden = () => {
			dispatch(HistoryActions.setIsEventsSliderHidden(true));
			setTimeout(() => {
				dispatch(HistoryActions.setIsEventsSliderHidden(false));
			}, 700);
		};

		toggleIsHidden();
	};

	return (
		<div
			className={classNames(cls.root, { [cls['_active']]: selectedPoint === number }, [
				cls[`selected-point-${selectedPoint}`],
				cls[`this-point-${number}`],
			])}
		>
			<div className={cls.dot}></div>
			<Button
				onClick={onClick}
				variant='circle'
				size='56'
				className={classNames(cls.button, {}, [])}
			>
				{number}
			</Button>
			<div className={cls.title}>{title}</div>
		</div>
	);
});
