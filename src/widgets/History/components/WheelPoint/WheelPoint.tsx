import { MutableRefObject, memo } from 'react';
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
	wheelRef?: MutableRefObject<any>;
}

export const WheelPoint = memo((props: WheelPointProps) => {
	const { number, wheelRef } = props;
	const dispatch = useAppDispatch();
	const selectedPoint = useSelector(getSelectedPoint);
	const wheelDegs = useSelector(getWheelDegs);

	const onClick = () => {
		dispatch(HistoryActions.selectPoint(number));
	};

	return (
		<div className={classNames(cls.root, { [cls['_active']]: selectedPoint === number }, [])}>
			<div className={cls.dot}></div>
			<Button onClick={onClick} variant='circle' size='56' className={cls.button}>
				{number}
			</Button>
			{selectedPoint === number && <div className={cls.title}>Movie</div>}
		</div>
	);
});
