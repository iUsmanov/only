import { ButtonHTMLAttributes, ReactNode, memo, useMemo } from 'react';
import cls from './Button.module.scss';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';

type ButtonVariant = 'circle';
type CircleButtonSize = '40' | '50' | '56';

interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	variant?: ButtonVariant;
	shadow?: boolean;
	children: ReactNode;
	onClick: () => void;
}

interface CircleButton extends ButtonBaseProps {
	variant: 'circle';
	size: CircleButtonSize;
}

type ButtonProps = CircleButton;

export const Button = memo((props: ButtonProps) => {
	const { className, children, variant = 'circle', onClick, size, shadow, ...otherProps } = props;

	const mods: Mods = useMemo(
		() => ({
			[cls.shadow]: shadow,
			[cls[`size-${size}`]]: size,
		}),
		[shadow, size]
	);

	return (
		<button
			{...otherProps}
			type='button'
			onClick={onClick}
			className={classNames(cls.button, mods, [className, cls[variant]])}
		>
			{children}
		</button>
	);
});
