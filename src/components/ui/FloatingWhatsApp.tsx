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

  // Show tooltip after 4 seconds to catch attention without being annoying
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
            {/* Tiny arrow pointing downwards to the green button */}
            <div className="absolute right-6 -bottom-1.5 w-3 h-3 bg-slate-900 rotate-45 border-r border-b border-slate-800" />
            
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
              <span>Dra. Gislene está <strong>On-line</strong>. Agende agora!</span>
            </div>

            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-white transition-colors shrink-0 p-0.5 rounded-md hover:bg-slate-800 focus:outline-none cursor-pointer"
              aria-label="Ignorar aviso"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulsing Trigger Circle CTA button */}
      <motion.a
        href={NUTRI_PROFILE.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale direto conosco no WhatsApp"
        id="floating-whatsapp-trigger"
        className="relative w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-700/25 border border-emerald-500 hover:border-emerald-400/80 transition-all cursor-pointer group"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
      >
        {/* Repeating pulsing radar aura of the button */}
        <span className="absolute -inset-0.5 rounded-full bg-emerald-600/30 animate-pulse -z-10 scale-108" />
        <span className="absolute inset-0 rounded-full bg-emerald-500/20 blur-[1px] animate-ping -z-10 scale-120 opacity-50" />

        <MessageCircle className="w-6.5 h-6.5 text-white transition-transform duration-300 group-hover:rotate-12" />
      </motion.a>
    </div>
  );
};
