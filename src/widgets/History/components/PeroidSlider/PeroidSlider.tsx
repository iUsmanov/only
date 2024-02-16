import { memo } from 'react';
import cls from './PeroidSlider.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { Wheel } from '../Wheel/Wheel';
import { useSelector } from 'react-redux';
import { getYears } from '../../model/selectors/getYears';
import { getSelectedPoint } from '../../model/selectors/getSelectedPoint';
import { HistoryActions } from '../../model/slices/HistorySlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

export const PeroidSlider = memo((props: { className?: string }) => {
	const { className } = props;
	const dispatch = useAppDispatch();
	const years = useSelector(getYears);
	const selectedPoint = useSelector(getSelectedPoint);

	const onClickNext = () => {
		dispatch(HistoryActions.selectPoint(selectedPoint + 1));
	};

	const onClickLast = () => {
		dispatch(HistoryActions.selectPoint(selectedPoint - 1));
	};

	if (!years) return null;
	return (
		<div className={classNames(cls.periodSlider, {}, [className])}>
			<div className={cls.years}>
				<div className={cls.firstYear}>{years[0]}</div>
				<div className={cls.secondYear}>{years[1]}</div>
				<Wheel />
			</div>
			<div className={cls.navigation}>
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
		</div>
	);
});
