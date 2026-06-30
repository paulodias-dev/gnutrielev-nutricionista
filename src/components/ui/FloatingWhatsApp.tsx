/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NUTRI_PROFILE } from '../../utils/data';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3.5 bg-slate-900 text-white text-xs py-3 px-4.5 rounded-2xl shadow-xl border border-slate-800 flex items-center gap-3.5 whitespace-nowrap relative mr-2"
          >
            <div className="absolute right-6 -bottom-1.5 w-3 h-3 bg-slate-900 rotate-45 border-r border-b border-slate-800" />
            
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
              <span>Consulte horários pelo <strong>WhatsApp</strong>.</span>
            </div>

            <button
              type="button"
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-white transition-colors shrink-0 p-0.5 rounded-md hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
              aria-label="Fechar aviso do WhatsApp"
            >
              <X aria-hidden="true" className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={NUTRI_PROFILE.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp para consultar atendimento nutricional"
        id="floating-whatsapp-trigger"
        className="relative w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-700/25 border border-emerald-500 hover:border-emerald-400/80 transition-all cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
      >
        <span className="absolute -inset-0.5 rounded-full bg-emerald-600/30 animate-pulse -z-10 scale-108" aria-hidden="true" />
        <MessageCircle aria-hidden="true" className="w-6.5 h-6.5 text-white transition-transform duration-300 group-hover:rotate-12" />
      </motion.a>
    </div>
  );
};
