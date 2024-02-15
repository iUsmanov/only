import { memo } from 'react';
import cls from './History.module.scss';
import { Header } from '../Header/Header';
import { PeroidSlider } from '../PeroidSlider/PeroidSlider';

export const History = memo(() => {
	return (
		<main className={cls.container}>
			<section className={cls.history}>
				<Header className={cls.header} />
				<PeroidSlider className={cls.peroidSlider} />
			</section>
		</main>
	);
});
