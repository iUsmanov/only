import { memo } from 'react';
import cls from './PeroidSlider.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { Wheel } from '../Wheel/Wheel';
import { useSelector } from 'react-redux';
import { getYears } from '../../model/selectors/getYears';

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
			<div className={cls.navigation}>
				<div className={cls.count}>
					{'06'}/{'06'}
				</div>
				<div className={cls.buttons}>
					<Button className={cls.leftButton} onClick={() => {}} variant='circle' size='50'>
						d
					</Button>
					<Button className={cls.rightButton} onClick={() => {}} variant='circle' size='50'>
						b
					</Button>
				</div>
			</div>
		</div>
	);
});
