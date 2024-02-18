import { memo } from 'react';
import cls from './PeroidSlider.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Wheel } from '../Wheel/Wheel';
import { WheelNav } from '../WheelNav/WheelNav';
import { useDynamicNumber } from '../../lib/hooks/useDynamicNumber/useDynamicNumber';
import { getDevice } from '@/shared/lib/helpers/getDevice/getDevice';
import { useHistoryContext } from '../../lib/context/HistoryContext';

const { viewportWidth } = getDevice();

export const PeroidSlider = memo((props: { className?: string }) => {
	const { className } = props;
	const { historyData } = useHistoryContext();
	const firstYear = useDynamicNumber({
		time: 30,
		endNumber: historyData.years?.(historyData.selectedPoint ?? 1)?.[0],
	});
	const secondYear = useDynamicNumber({
		time: 30,
		endNumber: historyData.years?.(historyData.selectedPoint ?? 1)?.[1],
	});

	if (!historyData.years) return null;

	return (
		<div className={classNames(cls.periodSlider, {}, [className])}>
			<div className={cls.years}>
				<div className={cls.firstYear}>{firstYear}</div>
				<div className={cls.secondYear}>{secondYear}</div>
				{viewportWidth > 320 && <Wheel />}
			</div>
			{viewportWidth > 320 && <WheelNav className={cls.navigation} />}
		</div>
	);
});
