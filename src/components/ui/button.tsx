import React from 'react';

type ButtonProps = React.PropsWithChildren<{
  variant?: 'primary' | 'accent' | 'error';
  className?: string;
}> & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ variant = 'primary', className = '', children, ...props }: ButtonProps) => {
  let base = 'px-6 py-2 rounded font-semibold transition focus:outline-none ';
  if (variant === 'primary') base += 'bg-primary text-white hover:bg-primary-dark ';
  if (variant === 'accent') base += 'bg-accent text-white hover:bg-accent-light ';
  if (variant === 'error') base += 'bg-error text-white hover:bg-red-700 ';
  return (
    <button className={`${base}${className}`} {...props}>
      {children}
    </button>
  );
}; 