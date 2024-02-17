import { useEffect, useRef, useState } from 'react';

interface UseDynamicNumberProps {
	endNumber?: number;
	time: number;
}

export const useDynamicNumber = (props: UseDynamicNumberProps) => {
	const { endNumber, time } = props;
	// Текущее отображаемое число
	const [currentNumber, setCurrentNumber] = useState<number | undefined>(undefined);
	// Число, с которого начинается новый отчёт
	const startNumber = useRef<number | undefined>(undefined);
	// Был ли вмонтирован компонент ?
	const [wasOpened, setWasOpened] = useState<boolean>(false);

	// Самая первая загрузка компонента
	useEffect(() => {
		// console.log('FIRST RENDER');
		setCurrentNumber(endNumber);
		startNumber.current = endNumber;
		setWasOpened(true);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		// Если это не первая загрузка
		if (wasOpened) {
			// console.log('NEW RENDER');
			setCurrentNumber(startNumber.current);
			startNumber.current = endNumber;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [endNumber]);

	// Начинаем увеличивать или уменьшать число
	useEffect(() => {
		if (wasOpened) {
			// console.log('CHANGE');
			if (currentNumber && currentNumber !== endNumber && endNumber) {
				if (currentNumber < endNumber) {
					setTimeout(setCurrentNumber, time, currentNumber + 1);
				} else if (currentNumber > endNumber) {
					setTimeout(setCurrentNumber, time, currentNumber - 1);
				}
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [endNumber, currentNumber]);

	// if (currentNumber && endNumber && startNumber.current) {
	// 	console.log(currentNumber);
	// 	// console.log(startNumber.current);
	// 	// console.log(endNumber);
	// }

	return currentNumber;
};
