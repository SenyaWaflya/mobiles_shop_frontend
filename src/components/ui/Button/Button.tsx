import styles from './Button.module.css';
import clsx from 'clsx';

type ButtonProps = {
    children: React.ReactNode;
    href: string;
    className?: string;
}

export default function Button({ children, href, className }: ButtonProps) {
    const buttonClass = clsx(styles.button, styles['Button'], className);

    return (
        <button className={buttonClass}>{children}</button>
    )
}
