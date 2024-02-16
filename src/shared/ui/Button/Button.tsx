import { ButtonHTMLAttributes, LegacyRef, ReactNode, forwardRef, memo, useMemo } from 'react';
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

const Button = forwardRef((props: ButtonProps, ref: LegacyRef<HTMLButtonElement> | undefined) => {
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
			ref={ref}
			type='button'
			onClick={onClick}
			className={classNames(cls.button, mods, [className, cls[variant]])}
		>
			{children}
		</button>
	);
});

const MemoizedButton = memo(Button);

export { MemoizedButton as Button };
