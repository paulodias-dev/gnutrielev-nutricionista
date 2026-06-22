/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, MessageSquareCode, Calendar, ArrowRight } from 'lucide-react';
import { Section } from '../layout/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { TESTIMONIALS, NUTRI_PROFILE } from '../../utils/data';

export const Testimonials: React.FC = () => {
  return (
    <Section
      id="depoimentos"
      tag="Depoimentos"
      title="Quem passa pela consulta aprova"
      subtitle="Histórias reais de pessoas que conquistaram saúde, estética e paz com o próprio espelho de forma sustentável."
      bgType="white"
    >
      {/* Testimonials GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TESTIMONIALS.map((test) => (
          <Card
            key={test.id}
            variant="glass"
            hoverEffect={true}
            className="flex flex-col text-left h-full"
          >
            <div className="p-6 md:p-8 flex flex-col justify-between h-full relative">
              {/* Decorative icon quote marker inside card */}
              <div className="absolute top-6 right-6 text-slate-100 font-sans font-black text-6xl leading-none select-none pointer-events-none">
                "
              </div>

              <div>
                {/* Visual Stars */}
                <div className="flex items-center gap-1 mb-5 z-10 relative">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" />
                  ))}
                </div>

                {/* Patient Goal & Result summary tag */}
                <div className="mb-5 flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold tracking-tight text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    Meta: {test.goal}
                  </span>
                  <span className="text-[10px] font-bold tracking-tight text-emerald-800 bg-emerald-55/65 px-2.5 py-1 rounded-md border border-emerald-100">
                    Resultado: {test.result}
                  </span>
                </div>

                {/* Main Quote text */}
                <p className="text-sm italic text-slate-600 leading-relaxed mb-6 font-medium z-10 relative">
                  "{test.quote}"
                </p>
              </div>

              {/* Patient Identity segment info */}
              <div className="flex items-center gap-3.5 border-t border-slate-100 pt-5 mt-auto">
                <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 border border-slate-200 bg-slate-100">
                  <img
                    src={test.avatarUrl}
                    alt={test.patientName}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">
                    {test.patientName}, {test.age} anos
                  </h4>
                  <span className="text-[10px] text-slate-400 block mt-0.5 font-medium">{test.period}</span>
                </div>
              </div>

            </div>
          </Card>
        ))}
      </div>

      {/* Trust Callout bottom panel */}
      <div className="mt-14 md:mt-20 max-w-4xl mx-auto rounded-3xl bg-slate-900 text-white p-8 md:p-12 relative overflow-hidden shadow-xl text-left">
        {/* Soft background mesh */}
        <div className="absolute bottom-[-100px] right-[-100px] w-64 h-64 bg-emerald-500/20 rounded-full filter blur-[60px]" />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-8 flex flex-col gap-2.5">
            <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Seu Turno de Mudar</span>
            <h3 className="text-2xl md:text-3xl font-bold font-display tracking-tight leading-tight">
              E o próximo resultado pode ser o seu!
            </h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-xl">
              Vamos definir juntos as estratégias metabólicas ideais para o seu biotipo de forma simples e rápida? O primeiro passo da sua evolução começa agora.
            </p>
          </div>
          <div className="md:col-span-4 justify-self-stretch sm:justify-self-start md:justify-self-end">
            <Button
              id="testimonials-cta"
              onClick={() => window.open(NUTRI_PROFILE.whatsappUrl, '_blank')}
              variant="primary"
              size="lg"
              icon={ArrowRight}
              className="w-full sm:w-auto"
            >
              Iniciar Minha Evolução
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
