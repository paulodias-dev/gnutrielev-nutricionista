/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  id: string;
  tag?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  bgType?: 'light' | 'white' | 'gradient';
  className?: string;
  centered?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  id,
  tag,
  title,
  subtitle,
  children,
  bgType = 'light',
  className = '',
  centered = true,
}) => {
  const backgrounds = {
    light: 'bg-slate-50',
    white: 'bg-white',
    gradient: 'bg-gradient-to-b from-slate-50 to-white'
  };

  return (
    <section id={id} className={`scroll-mt-24 md:scroll-mt-28 py-20 md:py-28 relative overflow-hidden ${backgrounds[bgType]} ${className}`}>
      {/* Structural background elements mimicking macOS mesh gradients */}
      {bgType === 'gradient' && (
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-100/10 rounded-full filter blur-[120px] pointer-events-none" />
      )}
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {(tag || title || subtitle) && (
          <div className={`mb-16 md:mb-20 max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
            {tag && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-emerald-800 bg-emerald-100/60 uppercase border border-emerald-200/40 mb-4"
              >
                {tag}
              </motion.span>
            )}
            
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4.5xl font-bold font-display text-slate-900 tracking-tight leading-tight"
              >
                {title}
              </motion.h2>
            )}

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};
