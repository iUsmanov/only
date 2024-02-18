import { memo } from 'react';
import cls from './WheelNav.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getSelectedPoint } from '../../model/selectors/getSelectedPoint';
import { HistoryActions } from '../../model/slices/HistorySlice';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Arrow } from '@/shared/ui/Arrow/Arrow';
import { getDevice } from '@/shared/lib/helpers/getDevice/getDevice';

const { viewportWidth } = getDevice();

interface WheelNavProps {
	className?: string;
}

export const WheelNav = memo((props: WheelNavProps) => {
	const { className } = props;
	const dispatch = useAppDispatch();

	const selectedPoint = useSelector(getSelectedPoint);

	const toggleIsHidden = () => {
		dispatch(HistoryActions.setIsEventsSliderHidden(true));
		setTimeout(() => {
			dispatch(HistoryActions.setIsEventsSliderHidden(false));
		}, 700);
	};

	const onClickNext = () => {
		dispatch(HistoryActions.selectPoint(selectedPoint + 1));
		toggleIsHidden();
	};

	const onClickLast = () => {
		dispatch(HistoryActions.selectPoint(selectedPoint - 1));
		toggleIsHidden();
	};

	return (
		<div className={classNames(cls.navigation, {}, [className])}>
			<div className={cls.count}>
				0{selectedPoint}/{'06'}
			</div>
			<div className={cls.buttons}>
				<Button
					className={viewportWidth > 320 ? cls['margin-right-20'] : cls['margin-right-10']}
					onClick={onClickLast}
					variant='circle'
					size={viewportWidth > 320 ? '50' : '25'}
					disabled={selectedPoint === 1}
				>
					<Arrow course='left' size={viewportWidth > 320 ? 'l' : 'm'} />
				</Button>
				<Button
					className={cls.rightButton}
					onClick={onClickNext}
					variant='circle'
					size={viewportWidth > 320 ? '50' : '25'}
					disabled={selectedPoint === 6}
				>
					<Arrow course='right' size={viewportWidth > 320 ? 'l' : 'm'} />
				</Button>
			</div>
		</div>
	);
});
