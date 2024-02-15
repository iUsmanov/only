import { ButtonHTMLAttributes, memo, useMemo } from 'react';
import { Mods } from '@/shared/lib/classNames/classNames';
import cls from './WheelPoint.module.scss';
import { Button } from '@/shared/ui/Button/Button';

interface WheelPointProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	number: number;
	onClick: VoidFunction;
}

export const WheelPoint = memo((props: WheelPointProps) => {
	const { number, onClick } = props;
	const mods: Mods = useMemo(() => ({}), []);

	return (
		<div className={cls.root}>
			<div className={cls.dot}></div>
			<Button onClick={onClick} variant='circle' size='56' className={cls.button}>
				{number}
			</Button>
		</div>
	);
});
