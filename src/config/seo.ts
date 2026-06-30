export const seoConfig = {
  baseUrl: 'https://gnutrielev.com.br',
  siteName: 'GNutriElev',
  title: 'Nutricionista em Aracaju e Online | GNutriElev',
  description:
    'Atendimento nutricional clínico e esportivo em Aracaju-SE e online, com plano alimentar individualizado conforme avaliação, rotina, exames e objetivos.',
  keywords: [
    'nutricionista em Aracaju',
    'nutricionista online',
    'nutricionista clínica em Aracaju',
    'nutricionista esportiva em Aracaju',
    'emagrecimento saudável',
    'reeducação alimentar',
    'plano alimentar personalizado',
    'saúde intestinal',
    'nutrição feminina',
    'hipertrofia',
    'acompanhamento nutricional',
  ],
  openGraph: {
    title: 'Nutricionista em Aracaju e Online | GNutriElev',
    description:
      'Atendimento nutricional clínico e esportivo em Aracaju-SE e online, com plano alimentar individualizado conforme avaliação individual.',
    url: 'https://gnutrielev.com.br',
    siteName: 'GNutriElev',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: 'https://gnutrielev.com.br/og-image.jpg',
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
