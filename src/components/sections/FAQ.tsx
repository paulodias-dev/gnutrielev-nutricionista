/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
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
      title="Perguntas Frequentes"
      subtitle="Esclareça suas principais dúvidas sobre o formato de acompanhamento, exames, reembolsos e cardápios."
      bgType="light"
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openId === item.id;
          
          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden text-left ${
                isOpen
                  ? 'bg-white border-emerald-500/20 shadow-md shadow-slate-200/40'
                  : 'bg-white/80 backdrop-blur-sm border-slate-200/50 hover:bg-white hover:border-slate-300'
              }`}
            >
              {/* Accordion clickable header */}
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none cursor-pointer select-none"
                aria-expanded={isOpen}
                id={`faq-btn-${item.id}`}
              >
                <div className="flex gap-3">
                  <span className="w-5.5 h-5.5 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 text-slate-400 font-bold text-xs mt-0.5">
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
                  <ChevronDown className="w-4 h-4 shrink-0" />
                </div>
              </button>

              {/* Collapsible Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
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

      {/* Support help footnote */}
      <div className="mt-12 text-center text-xs font-semibold text-slate-500 flex flex-col sm:flex-row items-center justify-center gap-3">
        <span>Não encontrou sua dúvida aqui?</span>
        <a
          href={NUTRI_PROFILE.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-500 hover:underline transition-colors cursor-pointer"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Fale direto com a Dra. Gislene no chat pessoal</span>
        </a>
      </div>
    </Section>
  );
};
