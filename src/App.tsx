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

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-950 flex flex-col justify-between">
      <SEO />
      {/* Cupertino premium sticky sticky navigation bar */}
      <Header />

      <main className="flex-grow">
        {/* Core Sections of the High-Conversion Dietitian Landing Page */}
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <FAQ />
      </main>

      {/* Trust-oriented Footer and Floating Chat Trigger */}
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
