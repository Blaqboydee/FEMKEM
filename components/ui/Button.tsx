import { ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className,
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-md font-semibold transition-all duration-200 inline-block text-center';
  
  const variantStyles = {
    primary: 'bg-[#1E7F43] text-white hover:bg-opacity-90 hover:-translate-y-0.5',
    secondary: 'bg-[#A3D9A5] text-[#1A1A1A] hover:bg-opacity-90 hover:-translate-y-0.5',
    outline: 'border-2 border-[#1E7F43] text-[#1E7F43] hover:bg-[#1E7F43] hover:text-white'
  };

  const classes = clsx(baseStyles, variantStyles[variant], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
