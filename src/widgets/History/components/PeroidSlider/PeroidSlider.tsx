import { memo } from 'react';
import cls from './PeroidSlider.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { Wheel } from '../Wheel/Wheel';

export const PeroidSlider = memo((props: { className?: string }) => {
	const { className } = props;
	return (
		<div className={classNames(cls.periodSlider, {}, [className])}>
			<div className={cls.years}>
				<div className={cls.firstYear}>2015</div>
				<div className={cls.secondYear}>2022</div>
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
