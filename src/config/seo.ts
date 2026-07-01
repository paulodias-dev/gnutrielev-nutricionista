export const seoConfig = {
  baseUrl: 'https://gnutrielev.com.br',
  siteName: 'GNutriElev',
  title: 'Nutricionista em Aracaju e Online | GNutriElev',
  description:
    'Atendimento nutricional clínico e esportivo em Aracaju-SE e online, com plano alimentar individualizado, acompanhamento e orientação responsável.',
  keywords: [
    'nutricionista em Aracaju',
    'nutricionista online',
    'nutricionista clínica em Aracaju',
    'nutricionista esportiva em Aracaju',
    'nutricionista em Aracaju e online',
    'emagrecimento saudável em Aracaju',
    'reeducação alimentar',
    'plano alimentar individualizado',
    'plano alimentar personalizado',
    'saúde intestinal',
    'nutrição feminina',
    'hipertrofia',
    'acompanhamento nutricional',
  ],
  openGraph: {
    title: 'GNutriElev | Nutricionista em Aracaju e Online',
    description:
      'Nutrição clínica e esportiva com plano alimentar individualizado, acompanhamento e atendimento presencial em Aracaju-SE ou online.',
    url: 'https://gnutrielev.com.br',
    siteName: 'GNutriElev',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: 'https://gnutrielev.com.br/og-image.svg',
        secureUrl: 'https://gnutrielev.com.br/og-image.svg',
        type: 'image/svg+xml',
        width: 1200,
        height: 630,
        alt: 'GNutriElev - Nutricionista em Aracaju e atendimento online',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@g_nutrielev',
    creator: '@g_nutrielev',
  },
} as const;
