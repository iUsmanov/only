import { memo } from 'react';
import cls from './Cross.module.scss';

interface CrossProps {
	className?: string;
}

export const Cross = memo((props: CrossProps) => {
	const { className } = props;
	return (
		<>
			<div className={cls.verticalLine}></div>
			<div className={cls.horizontalLine}></div>
		</>
	);
});
