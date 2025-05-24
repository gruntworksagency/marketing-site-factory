import { clsx } from 'clsx';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  isLoading?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  isLoading,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        {
          'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500':
            variant === 'primary',
          'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus-visible:ring-neutral-500':
            variant === 'secondary',
          'border border-neutral-300 bg-transparent hover:bg-neutral-50 focus-visible:ring-neutral-500':
            variant === 'outline',
          'bg-transparent hover:bg-neutral-100 focus-visible:ring-neutral-500':
            variant === 'ghost',
          'h-9 px-3 text-sm': size === 'sm',
          'h-11 px-8': size === 'md',
          'h-12 px-8 text-lg': size === 'lg',
        },
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
}
