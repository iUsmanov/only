import { memo } from 'react';
import cls from './WheelNav.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getSelectedPoint } from '../../model/selectors/getSelectedPoint';
import { HistoryActions } from '../../model/slices/HistorySlice';
import { classNames } from '@/shared/lib/classNames/classNames';

interface WheelNavProps {
	className?: string;
}

export const WheelNav = memo((props: WheelNavProps) => {
	const { className } = props;
	const dispatch = useAppDispatch();

	const selectedPoint = useSelector(getSelectedPoint);

	const onClickNext = () => {
		dispatch(HistoryActions.selectPoint(selectedPoint + 1));
	};

	const onClickLast = () => {
		dispatch(HistoryActions.selectPoint(selectedPoint - 1));
	};

	return (
		<div className={classNames(cls.navigation, {}, [className])}>
			<div className={cls.count}>
				0{selectedPoint}/{'06'}
			</div>
			<div className={cls.buttons}>
				<Button
					className={cls.leftButton}
					onClick={onClickLast}
					variant='circle'
					size='50'
					disabled={selectedPoint === 1}
				>
					d
				</Button>
				<Button
					className={cls.rightButton}
					onClick={onClickNext}
					variant='circle'
					size='50'
					disabled={selectedPoint === 6}
				>
					b
				</Button>
			</div>
		</div>
	);
});
