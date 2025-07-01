'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  variant = 'primary',
  size = 'medium',
  children,
  icon,
  className,
  onClick,
  disabled,
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-full transition-all duration-300 flex items-center gap-2 justify-center shadow-lg hover:shadow-xl transform active:scale-95';
  
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-opacity-90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-opacity-90',
    ghost: 'bg-transparent hover:bg-muted text-foreground',
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {icon && <span className="animate-bounce-slow">{icon}</span>}
      {children}
    </motion.button>
  );
} 