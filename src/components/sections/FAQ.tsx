/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { Section } from '../layout/Section';
import { FAQ_ITEMS, NUTRI_PROFILE } from '../../utils/data';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Section
      id="faq"
      tag="Dúvidas Recorrentes"
      title="Dúvidas Sobre Emagrecimento e Massa Muscular"
      subtitle="Entenda como funciona a avaliação, o plano alimentar, o acompanhamento online e os ajustes para perda de gordura, hipertrofia e recomposição corporal."
      bgType="light"
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openId === item.id;
          const panelId = `faq-panel-${item.id}`;
          const buttonId = `faq-btn-${item.id}`;
          
          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden text-left ${
                isOpen
                  ? 'bg-white border-emerald-500/20 shadow-md shadow-slate-200/40'
                  : 'bg-white/80 backdrop-blur-sm border-slate-200/50 hover:bg-white hover:border-slate-300'
              }`}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 cursor-pointer select-none"
                aria-expanded={isOpen}
                aria-controls={panelId}
                id={buttonId}
                type="button"
              >
                <div className="flex gap-3">
                  <span className="w-5.5 h-5.5 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 text-slate-400 font-bold text-xs mt-0.5" aria-hidden="true">
                    {idx + 1}
                  </span>
                  <span className="text-sm md:text-base font-bold text-slate-900 tracking-tight">
                    {item.question}
                  </span>
                </div>

                <div
                  className={`w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200/40 shrink-0 text-slate-500 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-emerald-50 text-emerald-700 border-emerald-100' : ''
                  }`}
                >
                  <ChevronDown aria-hidden="true" className="w-4 h-4 shrink-0" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100/60 font-medium">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center text-xs font-semibold text-slate-500 flex flex-col sm:flex-row items-center justify-center gap-3">
        <span>Não encontrou sua dúvida aqui?</span>
        <a
          href={NUTRI_PROFILE.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-500 hover:underline transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 rounded"
          aria-label="Falar pelo WhatsApp para avaliar perda de peso ou ganho de massa"
        >
          <MessageCircle aria-hidden="true" className="w-4 h-4" />
          <span>Avaliar meu objetivo</span>
        </a>
      </div>
    </Section>
  );
};
