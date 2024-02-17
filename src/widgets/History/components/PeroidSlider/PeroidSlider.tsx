import { memo } from 'react';
import cls from './PeroidSlider.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Wheel } from '../Wheel/Wheel';
import { useSelector } from 'react-redux';
import { getYears } from '../../model/selectors/getYears';
import { WheelNav } from '../WheelNav/WheelNav';
import { useDynamicNumber } from '../../lib/hooks/useDynamicNumber/useDynamicNumber';

export const PeroidSlider = memo((props: { className?: string }) => {
	const { className } = props;
	const years = useSelector(getYears);
	const firstYear = useDynamicNumber({ time: 30, endNumber: years?.[0] });
	const secondYear = useDynamicNumber({ time: 30, endNumber: years?.[1] });

	if (!years) return null;

	return (
		<div className={classNames(cls.periodSlider, {}, [className])}>
			<div className={cls.years}>
				<div className={cls.firstYear}>{firstYear}</div>
				<div className={cls.secondYear}>{secondYear}</div>
				<Wheel />
			</div>
			<WheelNav className={cls.navigation} />
		</div>
	);
});
