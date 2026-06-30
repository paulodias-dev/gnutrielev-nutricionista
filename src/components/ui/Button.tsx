/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'glass' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  animate?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  id?: string;
  title?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  'aria-label'?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  animate = true,
  className = '',
  href,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 rounded-xl tracking-tight select-none cursor-pointer';
  
  const variants = {
    primary: 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-md shadow-emerald-900/10 hover:shadow-lg hover:shadow-emerald-900/20 active:scale-98 border border-emerald-600/10',
    secondary: 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm hover:shadow-md active:scale-98',
    glass: 'bg-white/70 backdrop-blur-md text-slate-800 border border-slate-200/50 hover:bg-white/90 hover:border-slate-300/80 shadow-sm active:scale-98',
    danger: 'bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100 active:scale-98'
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2.5 rounded-2xl'
  };

  const disabledStyles = disabled ? 'opacity-60 pointer-events-none' : '';
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`;
  const Component = href ? (animate ? motion.a : 'a') : (animate ? motion.button : 'button');
  const animationProps = animate && !disabled
    ? {
        whileHover: { y: -2, scale: 1.01 },
        whileTap: { scale: 0.98 },
        transition: { type: 'spring', stiffness: 500, damping: 25 }
      }
    : {};

  return (
    <Component
      className={classes}
      href={href}
      type={href ? undefined : type}
      aria-disabled={href ? disabled : undefined}
      disabled={href ? undefined : disabled}
      {...animationProps}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon aria-hidden="true" className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon aria-hidden="true" className="w-4 h-4 shrink-0" />}
    </Component>
  );
};
