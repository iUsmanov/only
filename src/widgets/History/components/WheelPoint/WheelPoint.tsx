import { memo } from 'react';
import cls from './WheelPoint.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useHistoryContext } from '../../lib/context/HistoryContext';

interface WheelPointProps {
	className?: string;
	number: number;
	title: string;
}

export const WheelPoint = memo((props: WheelPointProps) => {
	const { number, title } = props;
	const { historyData, setHistoryData } = useHistoryContext();

	const onClick = () => {
		setHistoryData((prev) => ({ ...prev, selectedPoint: number }));

		const toggleIsHidden = () => {
			setHistoryData({ ...historyData, isEventsSliderHidden: true });
			setTimeout(() => {
				setHistoryData({ ...historyData, isEventsSliderHidden: false });
			}, 700);
		};

		toggleIsHidden();
	};

	return (
		<div
			className={classNames(cls.root, { [cls['_active']]: historyData.selectedPoint === number }, [
				cls[`selected-point-${historyData.selectedPoint}`],
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
