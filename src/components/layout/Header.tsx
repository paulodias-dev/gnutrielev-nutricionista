/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, ArrowRight } from 'lucide-react';
import { NAV_ITEMS, NUTRI_PROFILE } from '../../utils/data';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'motion/react';
import { scrollToSection } from '../../utils/navigation';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map(i => i.href.replace('#', ''));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const scrollFromHash = () => {
      const hashTarget = window.location.hash.replace('#', '');
      if (hashTarget) {
        scrollToSection(hashTarget, { updateHash: false });
      }
    };

    const rafId = window.requestAnimationFrame(scrollFromHash);
    window.addEventListener('hashchange', scrollFromHash);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('hashchange', scrollFromHash);
    };
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    scrollToSection(targetId);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/40 shadow-sm py-4'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#inicio"
          onClick={(e) => handleLinkClick(e, 'inicio')}
          className="flex items-center gap-2 group select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 rounded-lg"
          id="logo-link"
          aria-label="Ir para o início da página GNutriElev"
        >
          <div className="w-8.5 h-8.5 rounded-lg bg-emerald-600 flex items-center justify-center shadow-md shadow-emerald-600/20 group-hover:bg-emerald-500 transition-colors">
            <span className="text-white text-base font-extrabold tracking-tight">ge</span>
          </div>
          <span className="text-xl font-bold font-display text-slate-900 tracking-tight">
            gnutri<span className="text-emerald-600">elev</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7" id="desktop-nav" aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href.replace('#', ''))}
              className={`text-sm font-medium tracking-tight transition-colors relative py-1.5 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 ${
                activeSection === item.href.replace('#', '')
                  ? 'text-emerald-700 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              aria-current={activeSection === item.href.replace('#', '') ? 'page' : undefined}
            >
              {item.label}
              {activeSection === item.href.replace('#', '') && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            id="header-cta"
            href={NUTRI_PROFILE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="sm"
            icon={Calendar}
            aria-label="Consultar horários pelo WhatsApp"
          >
            Consultar Horários
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-drawer"
          id="mobile-menu-toggle"
        >
          {isOpen ? <X aria-hidden="true" className="w-5 h-5" /> : <Menu aria-hidden="true" className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200/50 absolute top-full left-0 right-0 overflow-hidden shadow-lg"
            id="mobile-drawer"
          >
            <nav className="px-6 py-6 flex flex-col gap-5" aria-label="Navegação principal mobile">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href.replace('#', ''))}
                  className={`text-base font-medium tracking-tight py-1 border-b border-slate-100/60 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-emerald-700 font-semibold pl-1.5 border-l-2 border-emerald-600 border-b-transparent'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  aria-current={activeSection === item.href.replace('#', '') ? 'page' : undefined}
                >
                  {item.label}
                </a>
              ))}
              <Button
                id="mobile-header-cta"
                href={NUTRI_PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                icon={ArrowRight}
                aria-label="Falar no WhatsApp para consultar atendimento nutricional"
                className="w-full mt-2"
              >
                Falar pelo WhatsApp
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
