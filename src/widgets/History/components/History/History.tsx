import { memo, useEffect, useState } from 'react';
import cls from './History.module.scss';
import { EventsSlider } from '../EventsSlider/EventsSlider';
import { Header } from '../Header/Header';
import { PeroidSlider } from '../PeroidSlider/PeroidSlider';

function Counter({ val, time }: { val: any; time: any }) {
	const [currVal, setCurrVal] = useState(0);

	useEffect(() => {
		currVal !== val && setTimeout(setCurrVal, time, currVal + 1);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currVal]);

	return <div>{currVal}</div>;
}

// Есть таймер
// Есть изначальное число
// Есть конечное число
// Затем эти числа меняются и происходит анимация

export const History = memo(() => {
	return (
		<main className={cls.container}>
			<Counter time={500} val={100} />
			<section className={cls.history}>
				<Header className={cls.header} />
				<PeroidSlider className={cls.peroidSlider} />
				<EventsSlider />
			</section>
		</main>
	);
});
