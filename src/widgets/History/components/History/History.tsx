import { memo } from 'react';
import cls from './History.module.scss';
import { EventsSlider } from '../EventsSlider/EventsSlider';
import { Header } from '../Header/Header';
import { PeroidSlider } from '../PeroidSlider/PeroidSlider';
import { Cross } from '../Cross/Cross';
import { getDevice } from '@/shared/lib/helpers/getDevice/getDevice';
import { BottomNav } from '../BottomNav/BottomNav';

const { viewportWidth } = getDevice();

export const History = memo(() => {
	return (
		<main className={cls.container}>
			<section className={cls.history}>
				{viewportWidth > 320 && <Cross />}
				<Header className={cls.header} />
				<PeroidSlider className={cls.peroidSlider} />
				<EventsSlider />
				{viewportWidth <= 320 && <BottomNav className={cls.bottomNav} />}
			</section>
		</main>
	);
});
