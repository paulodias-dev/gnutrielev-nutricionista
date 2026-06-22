/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'flat' | 'glass' | 'borderless';
  hoverEffect?: boolean;
  className?: string;
  id?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'glass',
  hoverEffect = true,
  className = '',
  id,
}) => {
  const baseStyles = 'rounded-2xl transition-all duration-300 relative overflow-hidden';
  
  const variants = {
    flat: 'bg-white border border-slate-100 shadow-sm',
    glass: 'bg-white/70 backdrop-blur-md border border-slate-200/40 shadow-sm',
    borderless: 'bg-slate-50/50 border-0 shadow-none'
  };

  const hoverStyles = hoverEffect 
    ? 'hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200/80 hover:-translate-y-1' 
    : '';

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
    >
      {/* Decorative gradient overlay inside card for a premium Apple sheen */}
      {variant === 'glass' && (
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-50/5 through-transparent to-transparent opacity-60 pointer-events-none" />
      )}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
};
