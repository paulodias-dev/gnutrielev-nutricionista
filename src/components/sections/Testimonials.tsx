/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, UserRound, ArrowRight } from 'lucide-react';
import { Section } from '../layout/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { TESTIMONIALS, NUTRI_PROFILE } from '../../utils/data';

export const Testimonials: React.FC = () => {
  return (
    <Section
      id="depoimentos"
      tag="Depoimentos"
      title="Relatos de Experiência no Atendimento"
      subtitle="Depoimentos anonimizados e autorizados. Cada acompanhamento é individual, e resultados podem variar conforme avaliação, adesão, histórico e condições clínicas."
      bgType="white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TESTIMONIALS.map((test) => (
          <Card
            key={test.id}
            variant="glass"
            hoverEffect={true}
            className="flex flex-col text-left h-full"
          >
            <div className="p-6 md:p-8 flex flex-col justify-between h-full relative">
              <div className="absolute top-6 right-6 text-slate-100 font-sans font-black text-6xl leading-none select-none pointer-events-none">
                "
              </div>

              <div>
                <div className="flex items-center gap-1 mb-5 z-10 relative" aria-label={`${test.rating} de 5 estrelas`}>
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} aria-hidden="true" className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" />
                  ))}
                </div>

                <div className="mb-5 flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold tracking-tight text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    Contexto: {test.context}
                  </span>
                  <span className="text-[10px] font-bold tracking-tight text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                    Relato sem identificação pessoal
                  </span>
                </div>

                <p className="text-sm italic text-slate-600 leading-relaxed mb-6 font-medium z-10 relative">
                  "{test.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 border-t border-slate-100 pt-5 mt-auto">
                <div className="w-11 h-11 rounded-full shrink-0 border border-slate-200 bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <UserRound aria-hidden="true" className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">
                    {test.patientLabel}
                  </h4>
                  <span className="text-[10px] text-slate-400 block mt-0.5 font-medium">{test.period}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8 max-w-3xl mx-auto text-center text-[11px] leading-relaxed text-slate-500">
        Os relatos acima descrevem experiências individuais e não representam promessa, garantia ou previsão de resultado. Condutas nutricionais devem ser definidas após avaliação individual.
      </div>

      <div className="mt-14 md:mt-20 max-w-4xl mx-auto rounded-3xl bg-slate-900 text-white p-8 md:p-12 relative overflow-hidden shadow-xl text-left">
        <div className="absolute bottom-[-100px] right-[-100px] w-64 h-64 bg-emerald-500/20 rounded-full filter blur-[60px]" />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-8 flex flex-col gap-2.5">
            <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Próximo passo</span>
            <h3 className="text-2xl md:text-3xl font-bold font-display tracking-tight leading-tight">
              Entenda qual estratégia faz sentido para você
            </h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-xl">
              A avaliação inicial ajuda a definir objetivos, limitações, rotina e prioridades antes de qualquer plano alimentar.
            </p>
          </div>
          <div className="md:col-span-4 justify-self-stretch sm:justify-self-start md:justify-self-end">
            <Button
              id="testimonials-cta"
              href={NUTRI_PROFILE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              icon={ArrowRight}
              aria-label="Consultar estratégia nutricional pelo WhatsApp"
              className="w-full sm:w-auto"
            >
              Consultar pelo WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
