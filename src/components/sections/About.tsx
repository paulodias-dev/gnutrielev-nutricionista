/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Calendar, Award, GraduationCap } from 'lucide-react';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';
import { NUTRI_PROFILE } from '../../utils/data';
// @ts-ignore
import gislenePortrait from '../../assets/images/gislene_exact_portrait_1782125784190.jpg';

export const About: React.FC = () => {
  return (
    <Section
      id="sobre"
      tag="Sobre a Nutricionista"
      title="Atendimento Nutricional Individualizado e Responsável"
      subtitle="Estratégias alimentares construídas a partir de avaliação, escuta clínica, rotina real e objetivos possíveis."
      bgType="white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative w-full max-w-[360px] md:max-w-[400px] mx-auto">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-100 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-slate-100 rounded-3xl -z-10" />
            
            <div className="aspect-[3/4] rounded-3xl overflow-hidden border-2 border-slate-200/50 shadow-lg relative bg-slate-100">
              <img
                src={gislenePortrait}
                alt={`Nutricionista ${NUTRI_PROFILE.shortName} — ${NUTRI_PROFILE.crn}`}
                width="800"
                height="1067"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="absolute bottom-6 right-6 bg-slate-900/90 text-white text-xs px-3.5 py-2 rounded-xl backdrop-blur-md border border-slate-700 font-semibold shadow-md flex items-center gap-1.5">
              <Award aria-hidden="true" className="w-4 h-4 text-emerald-400" />
              <span>{NUTRI_PROFILE.crn}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <span className="text-sm font-semibold text-emerald-700 tracking-wide uppercase">Avaliação antes da conduta</span>
          <h3 className="text-2xl md:text-3xl font-bold font-display text-slate-900 mt-2 tracking-tight">
            Por que escolher um acompanhamento nutricional personalizado?
          </h3>
          
          <p className="mt-5 text-sm md:text-base text-slate-600 leading-relaxed">
            Minha abordagem busca unir atualização científica, escuta individualizada e estratégias alimentares viáveis para a rotina de cada paciente. O objetivo é transformar informação técnica em decisões práticas, respeitando preferências, histórico de saúde, exames e contexto de vida.
          </p>

          <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
            A consulta nutricional não parte de promessas prontas. O plano é ajustado a partir da avaliação individual e pode envolver educação alimentar, organização de refeições, suplementação quando indicada e acompanhamento da adesão ao longo do processo.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5 w-full mt-8">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/40 flex gap-3 text-left">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                <GraduationCap aria-hidden="true" className="w-5 h-5 text-emerald-800" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 tracking-tight">Formação e atualização</h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                  {NUTRI_PROFILE.graduation}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/40 flex gap-3 text-left">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                <Award aria-hidden="true" className="w-5 h-5 text-emerald-800" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 tracking-tight">Conduta individual</h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                  {NUTRI_PROFILE.postGraduation}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200/60 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs text-slate-500 font-medium">Atendimento presencial em Aracaju e online</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Consulte disponibilidade de horários pelo WhatsApp.</p>
            </div>
            <Button
              id="about-cta"
              href={NUTRI_PROFILE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="md"
              icon={Calendar}
              aria-label="Consultar disponibilidade para avaliação nutricional pelo WhatsApp"
            >
              Consultar Avaliação
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
