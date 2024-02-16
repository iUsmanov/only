import { memo } from 'react';
import cls from './PeroidSlider.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Wheel } from '../Wheel/Wheel';
import { useSelector } from 'react-redux';
import { getYears } from '../../model/selectors/getYears';
import { WheelNav } from '../WheelNav/WheelNav';

export const PeroidSlider = memo((props: { className?: string }) => {
	const { className } = props;
	const years = useSelector(getYears);

	if (!years) return null;
	return (
		<div className={classNames(cls.periodSlider, {}, [className])}>
			<div className={cls.years}>
				<div className={cls.firstYear}>{years[0]}</div>
				<div className={cls.secondYear}>{years[1]}</div>
				<Wheel />
			</div>
			<WheelNav className={cls.navigation} />
		</div>
	);
});
