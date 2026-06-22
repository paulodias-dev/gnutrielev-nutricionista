/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Calendar, ShieldAlert, Award, GraduationCap, ArrowUpRight } from 'lucide-react';
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
      title="Conectando Ciência de Ponta e Prática Humana"
      subtitle="Equipada com os consensos científicos mais recentes do mundo para criar soluções alimentares viáveis e modernas."
      bgType="white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Elegant Portrait image */}
        <div className="lg:col-span-5 relative">
          <div className="relative w-full max-w-[360px] md:max-w-[400px] mx-auto">
            
            {/* Background geometric accents reminiscent of clean Cupertino UI framing */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-100 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-slate-100 rounded-3xl -z-10" />
            
            <div className="aspect-[3/4] rounded-3xl overflow-hidden border-2 border-slate-200/50 shadow-lg relative bg-slate-100">
              <img
                src={gislenePortrait}
                alt={`Dra. Gislene Gomes — ${NUTRI_PROFILE.crn}`}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Micro Badge for CRN assurance */}
            <div className="absolute bottom-6 right-6 bg-slate-900/90 text-white text-xs px-3.5 py-2 rounded-xl backdrop-blur-md border border-slate-700 font-semibold shadow-md flex items-center gap-1.5">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>{NUTRI_PROFILE.crn}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Mini Bio, Academic Pillar Cards and WhatsApp Call */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <span className="text-sm font-semibold text-emerald-700 tracking-wide uppercase">Formação de Elite</span>
          <h3 className="text-2xl md:text-3xl font-bold font-display text-slate-900 mt-2 tracking-tight">
            Por que escolher uma nutricionista atualizada?
          </h3>
          
          <p className="mt-5 text-sm md:text-base text-slate-600 leading-relaxed">
            Muitos profissionais mais antigos prescrevem dietas repetitivas de gaveta com base no que se estudava há 15 anos. Por ter finalizado minha formação recentemente, meu compromisso técnico é aplicar os <strong>consensos internacionais e diretrizes brasileiras mais contemporâneos</strong> sobre metabolismo, emagrecimento saudável e nutrição do sono.
          </p>

          <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
            Minha missão de vida é desmistificar e simplificar o ato de comer bem. Se você busca comer sem culpa, atingindo seus objetivos físicos com pratos fáceis de preparar, está no lugar certo!
          </p>

          {/* Academic/Professional pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5 w-full mt-8">
            
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/40 flex gap-3 text-left">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                <GraduationCap className="w-5 h-5 text-emerald-800" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 tracking-tight">USP & UNIFESP-Ref</h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                  Excelência acadêmica de primeira linha integrada ao registro profissional federal ativo.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/40 flex gap-3 text-left">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                <Award className="w-5 h-5 text-emerald-800" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 tracking-tight">Suplementação Prática</h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                  Especialização em fitoterápicos e nutrição clínica de alta precisão.
                </p>
              </div>
            </div>

          </div>

          {/* Prompt Message and Call */}
          <div className="mt-8 pt-6 border-t border-slate-200/60 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs text-slate-500 font-medium">Agende online sem sair de casa</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Disponibilidade rápida de horários nesta semana</p>
            </div>
            <Button
              id="about-cta"
              onClick={() => window.open(NUTRI_PROFILE.whatsappUrl, '_blank')}
              variant="secondary"
              size="md"
              icon={Calendar}
            >
              Agendar Avaliação Inicial
            </Button>
          </div>

        </div>

      </div>
    </Section>
  );
};
