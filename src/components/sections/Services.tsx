/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Apple, Flame, Brain, Sparkles, Utensils, Activity, Check, ArrowRight } from 'lucide-react';
import { Section } from '../layout/Section';
import { Card } from '../ui/Card';
import { SPECIALTIES, NUTRI_PROFILE } from '../../utils/data';

const iconMap = {
  Apple,
  Flame,
  Brain,
  Sparkles,
  Utensils,
  Activity,
};

export const Services: React.FC = () => {
  const getWhatsAppWithSpecialty = (title: string) => {
    const textMsg = `Olá, Dra. Gislene! Visitei o site gnutrielev.com.br e gostaria de entender melhor como funciona o acompanhamento focado em ${title}. Qual a disponibilidade de horários?`;
    const phone = (NUTRI_PROFILE as any).whatsappPhone || '5579981425786';
    return `https://wa.me/${phone}?text=${encodeURIComponent(textMsg)}`;
  };

  return (
    <Section
      id="especialidades"
      tag="Especialidades"
      title="Programas Nutricionais de Alta Performance"
      subtitle="Estratégias científicas sob medida criadas do zero para o seu metabolismo, preferências e objetivos específicos."
      bgType="light"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SPECIALTIES.map((spec) => {
          const IconComponent = iconMap[spec.iconName] || Apple;
          
          return (
            <Card
              key={spec.id}
              variant="glass"
              hoverEffect={true}
              className="flex flex-col h-full text-left"
            >
              <div
                className="p-6 md:p-8 flex flex-col justify-between h-full cursor-pointer group"
                onClick={() => window.open(getWhatsAppWithSpecialty(spec.title), '_blank')}
                title="Clique para agendar esta especialização via WhatsApp"
              >
                <div>
                  {/* Top Row: Icon container & Focus pill */}
                  <div className="flex items-center justify-between gap-2.5 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 transition-colors group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 shrink-0 shadow-sm">
                      <IconComponent className="w-5.5 h-5.5" />
                    </div>
                    
                    <span className="text-[10px] font-bold tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full uppercase">
                      {spec.focus}
                    </span>
                  </div>

                  {/* Specialty Title */}
                  <h3 className="text-lg font-bold font-display text-slate-900 leading-tight group-hover:text-emerald-700 transition-colors">
                    {spec.title}
                  </h3>

                  {/* Summary description */}
                  <p className="text-xs text-slate-500 mt-3 leading-relaxed mb-6">
                    {spec.shortDescription}
                  </p>

                  {/* Bullet specifics details */}
                  <ul className="space-y-2.5 border-t border-slate-100 pt-5 mb-6">
                    {spec.detailedPoints.map((point, pointIdx) => (
                      <li key={pointIdx} className="flex items-start gap-2 text-xs text-slate-600 leading-snug">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card footer redirect trigger */}
                <div className="mt-auto pt-2 flex items-center gap-1.5 text-xs font-semibold text-emerald-700 group-hover:emerald-500 transition-colors">
                  <span>Agendar planejamento para {spec.title.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
                </div>

              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};
