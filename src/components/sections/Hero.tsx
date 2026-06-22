/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';
import { CLINIC_METRICS, NUTRI_PROFILE } from '../../utils/data';
import { scrollToSection } from '../../utils/navigation';
// @ts-ignore
import gislenePortrait from '../../assets/images/gislene_exact_portrait_1782125784190.jpg';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-44 md:pb-32 bg-slate-50 overflow-hidden font-sans"
    >
      {/* Dynamic blurred organic spot to simulate macOS desktop aesthetic */}
      <div className="absolute top-0 right-0 w-[45vw] h-[45vw] rounded-full bg-emerald-100/40 filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-12 left-10 w-[25vw] h-[25vw] rounded-full bg-teal-50/50 filter blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Tag/Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-emerald-800 bg-emerald-100/60 uppercase border border-emerald-200/40 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
              <span>Inscrições Abertas — Atendimento Online & Presencial</span>
            </motion.div>

            {/* Main Catchy Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold font-display text-slate-900 tracking-tight leading-[1.2] md:leading-[1.1]"
            >
              Nutrição inteligente para <span className="text-emerald-700 relative inline-block">resultados reais<span className="absolute left-0 bottom-1 w-full h-[6px] bg-emerald-100 rounded-full -z-10" /></span>, sem restrições extremas.
            </motion.h1>

            {/* Explanatory Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-xl"
            >
              Conquiste o corpo dos seus sonhos e tenha mais energia no dia a dia com um acompanhamento personalizado adaptado à sua rotina real, sob a responsabilidade técnica de quem aplica a ciência na prática.
            </motion.p>

            {/* Multi-CTA block */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
            >
              <Button
                id="hero-primary-cta"
                onClick={() => window.open(NUTRI_PROFILE.whatsappUrl, '_blank')}
                variant="primary"
                size="lg"
                icon={ArrowRight}
                className="justify-center text-sm py-3.5"
              >
                Começar Meu Acompanhamento
              </Button>
              
              <Button
                id="hero-secondary-cta"
                onClick={() => {
                  scrollToSection('sobre');
                }}
                variant="glass"
                size="lg"
                className="justify-center text-sm py-3.5"
              >
                Conhecer Abordagem
              </Button>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-xs text-slate-500 font-medium ml-1"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Formatos On-line ou Presencial</span>
              </div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300" />
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{NUTRI_PROFILE.crn}</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Nutritionist mockup showcase with floating elements */}
          <div className="lg:col-span-5 flex items-center justify-center relative mt-6 lg:mt-0 px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px]"
            >
              {/* Soft decorative shadow backing */}
              <div className="absolute inset-0 bg-emerald-600/5 rounded-[28px] sm:rounded-[40px] rotate-3 scale-102 filter blur-md" />

              {/* Main portrait photo frame */}
              <div className="aspect-[4/5] rounded-[28px] sm:rounded-[36px] overflow-hidden border-4 border-white shadow-xl shadow-slate-300/60 relative bg-slate-200">
                <img
                  src={gislenePortrait}
                  alt={`Nutricionista ${NUTRI_PROFILE.shortName}`}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual shade overlay to guarantee text legibility if applicable */}
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Floating credentials tag 1 */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden sm:flex absolute -left-6 bottom-16 bg-white/80 backdrop-blur-md border border-slate-200/50 rounded-2xl p-4 shadow-lg items-center gap-3.5 max-w-[220px]"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-900 leading-tight">Dietas Sem Terrorismo</h5>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-snug">Prescrição focada na digestão e prazer estético.</p>
                </div>
              </motion.div>

              {/* Floating credentials tag 2 */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="hidden sm:flex absolute -right-6 top-12 bg-white/85 backdrop-blur-md border border-emerald-100 rounded-2xl p-4 shadow-lg items-center gap-3.5 max-w-[210px]"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center shrink-0 shadow-md shadow-emerald-600/10">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-900 leading-tight">CRN Autenticado</h5>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-snug">{NUTRI_PROFILE.crn}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Dynamic clean statistical values showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 md:mt-32 border-t border-slate-200/60 pt-16">
          {CLINIC_METRICS.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-start border-l-2 border-emerald-500 pl-6 text-left"
            >
              <span className="text-3xl md:text-4xl font-extrabold font-display text-emerald-800 tracking-tight">
                {metric.value}
              </span>
              <span className="text-sm font-bold text-slate-900 mt-2 tracking-tight">
                {metric.label}
              </span>
              <p className="text-xs text-slate-500 mt-1.5 leading-normal max-w-xs">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
