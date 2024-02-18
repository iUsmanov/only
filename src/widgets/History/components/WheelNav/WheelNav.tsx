import { memo } from 'react';
import cls from './WheelNav.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Arrow } from '@/shared/ui/Arrow/Arrow';
import { getDevice } from '@/shared/lib/helpers/getDevice/getDevice';
import { useHistoryContext } from '../../lib/context/HistoryContext';

const { viewportWidth } = getDevice();

interface WheelNavProps {
	className?: string;
}

export const WheelNav = memo((props: WheelNavProps) => {
	const { className } = props;
	const { historyData, setHistoryData } = useHistoryContext();

	const toggleIsHidden = () => {
		setHistoryData({ ...historyData, isEventsSliderHidden: true });
		setTimeout(() => {
			setHistoryData({ ...historyData, isEventsSliderHidden: false });
		}, 700);
	};

	const onClickNext = () => {
		if (!historyData.selectedPoint) return;
		console.log('clcic');

		setHistoryData((prev) => {
			if (prev.selectedPoint) {
				console.log('trye');
				return { ...prev, selectedPoint: prev.selectedPoint + 1 };
			} else {
				return prev;
			}
		});
		toggleIsHidden();
	};

	const onClickLast = () => {
		if (!historyData.selectedPoint) return;
		setHistoryData({ ...historyData, selectedPoint: historyData.selectedPoint - 1 });
		toggleIsHidden();
	};

	return (
		<div className={classNames(cls.navigation, {}, [className])}>
			<div className={cls.count}>
				0{historyData.selectedPoint}/{'06'}
			</div>
			<div className={cls.buttons}>
				<Button
					className={viewportWidth > 320 ? cls['margin-right-20'] : cls['margin-right-10']}
					onClick={onClickLast}
					variant='circle'
					size={viewportWidth > 320 ? '50' : '25'}
					disabled={historyData.selectedPoint === 1}
				>
					<Arrow course='left' size={viewportWidth > 320 ? 'l' : 'm'} />
				</Button>
				<Button
					className={cls.rightButton}
					onClick={onClickNext}
					variant='circle'
					size={viewportWidth > 320 ? '50' : '25'}
					disabled={historyData.selectedPoint === 6}
				>
					<Arrow course='right' size={viewportWidth > 320 ? 'l' : 'm'} />
				</Button>
			</div>
		</div>
	);
});
