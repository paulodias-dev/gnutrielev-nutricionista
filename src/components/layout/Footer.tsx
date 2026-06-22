/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Instagram, MapPin, Shield, CheckCircle2 } from 'lucide-react';
import { NAV_ITEMS, NUTRI_PROFILE } from '../../utils/data';
import { scrollToSection, scrollToTop } from '../../utils/navigation';

export const Footer: React.FC = () => {
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToTop();
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    scrollToSection(targetId);
  };

  return (
    <footer id="footer" className="bg-slate-900 text-slate-300 border-t border-slate-800 relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Upper Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & CRN */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <a
              href="#inicio"
              onClick={handleLogoClick}
              className="flex items-center gap-2 select-none self-start"
              id="footer-logo"
            >
              <div className="w-8.5 h-8.5 rounded-lg bg-emerald-600 flex items-center justify-center">
                <span className="text-white text-base font-extrabold tracking-tight">ge</span>
              </div>
              <span className="text-xl font-bold font-display text-white tracking-tight">
                gnutri<span className="text-emerald-500">elev</span>
              </span>
            </a>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Nutrição de excelência, com embasamento científico, sem terrorismo nutricional e desenhada especificamente para caber na sua rotina corrida.
            </p>

            <div className="flex flex-col gap-2.5 mt-2">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-emerald-400 font-semibold tracking-wide uppercase">Registro</span>
                <span>{NUTRI_PROFILE.crn}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Conselho Regional de Nutricionistas</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase">Navegação</h4>
            <nav className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href.replace('#', ''))}
                  className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact Channels */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase">Contato & Atendimento</h4>
            <div className="flex flex-col gap-3.5 text-sm text-slate-400">
              <a
                href={`mailto:${NUTRI_PROFILE.email}`}
                className="flex items-center gap-3 hover:text-emerald-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-emerald-400" />
                </div>
                <span>{NUTRI_PROFILE.email}</span>
              </a>

              <a
                href={`https://instagram.com/${NUTRI_PROFILE.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-emerald-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                  <Instagram className="w-4 h-4 text-emerald-400" />
                </div>
                <span>{NUTRI_PROFILE.instagram}</span>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="leading-snug text-xs">{NUTRI_PROFILE.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal and Disclaimer Section */}
        <div className="py-8 text-xs text-slate-500 leading-relaxed flex flex-col md:flex-row gap-6 md:gap-12 md:items-center">
          <div className="flex items-start gap-2 max-w-2xl">
            <Shield className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
            <p>
              <strong>Aviso Legal de Saúde:</strong> As informações contidas nesta página têm caráter meramente informativo e educacional. O conteúdo não substitui, em hipótese alguma, a avaliação médica e o acompanhamento nutricional individual presencial ou devidamente regulamentado. Resultados podem variar de acordo com o organismo e biotipo individual.
            </p>
          </div>
          <div className="md:border-l md:border-slate-800 md:pl-8 shrink-0 text-slate-400">
            <p>{NUTRI_PROFILE.fullName} Nutrição</p>
            <p className="mt-1">CNPJ em credenciamento ativo</p>
          </div>
        </div>

        {/* Footer Base Banner */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} gnutrielev.com.br. Todos os direitos reservados.</p>
          <p className="tracking-tight">
            Desenvolvido por <a href="https://github.com/paulodias-dev/" target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-400 hover:text-white transition-colors">paulodias-dev</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
