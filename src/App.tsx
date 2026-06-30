/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';
import { SEO } from './components/seo/SEO';
import { StructuredData } from './components/seo/StructuredData';
import { LegalPage } from './components/legal/LegalPage';
import { Button } from './components/ui/Button';

const legalRoutes = {
  '/politica-de-privacidade': 'privacy',
  '/termos-de-uso': 'terms',
  '/politica-de-cookies': 'cookies',
} as const;

const getCurrentPath = () => {
  if (typeof window === 'undefined') {
    return '/';
  }

  return window.location.pathname.replace(/\/$/, '') || '/';
};

const HomePage = () => (
  <>
    <SEO />
    <StructuredData />
    <main className="flex-grow">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <FAQ />
    </main>
    <FloatingWhatsApp />
  </>
);

const NotFoundPage = () => (
  <main className="flex-grow bg-slate-50 pt-32 pb-20">
    <SEO
      title="Página não encontrada"
      description="A página solicitada não foi encontrada no site GNutriElev."
      canonicalPath="/404"
      noIndex
    />
    <section className="max-w-3xl mx-auto px-6 text-center">
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-emerald-800 bg-emerald-100/60 uppercase border border-emerald-200/40 mb-4">
        Erro 404
      </span>
      <h1 className="text-3xl md:text-5xl font-bold font-display text-slate-900 tracking-tight">
        Página não encontrada
      </h1>
      <p className="mt-5 text-sm md:text-base text-slate-600 leading-relaxed">
        O endereço acessado não existe ou foi movido. Volte para a página inicial para consultar as informações de atendimento nutricional.
      </p>
      <div className="mt-8 flex justify-center">
        <Button href="/" variant="primary" size="lg" aria-label="Voltar para a página inicial da GNutriElev">
          Voltar para o início
        </Button>
      </div>
    </section>
  </main>
);

export default function App() {
  const path = getCurrentPath();
  const legalPageType = legalRoutes[path as keyof typeof legalRoutes];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-950 flex flex-col justify-between">
      <Header />
      {legalPageType ? <LegalPage type={legalPageType} /> : path === '/' ? <HomePage /> : <NotFoundPage />}
      <Footer />
    </div>
  );
}
