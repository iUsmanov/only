import { memo } from 'react';
import cls from './History.module.scss';
import { EventsSlider } from '../EventsSlider/EventsSlider';
import { Header } from '../Header/Header';
import { PeroidSlider } from '../PeroidSlider/PeroidSlider';
import { Cross } from '../Cross/Cross';

export const History = memo(() => {
	return (
		<main className={cls.container}>
			<section className={cls.history}>
				<Cross />
				<Header className={cls.header} />
				<PeroidSlider className={cls.peroidSlider} />
				<EventsSlider />
			</section>
		</main>
	);
});
