export const seoConfig = {
  siteName: 'GNutriElev',
  title: 'Dra. Gislene Gomes | Nutricionista Clínica e Esportiva',
  description:
    'Nutrição clínica e esportiva com plano alimentar personalizado para emagrecer, ganhar saúde e performance sem terrorismo nutricional.',
  keywords: [
    'nutricionista online',
    'nutricionista clínica',
    'nutricionista esportiva',
    'emagrecimento',
    'reeducação alimentar',
    'plano alimentar personalizado',
    'saúde intestinal',
    'nutrição feminina',
    'hipertrofia',
    'acompanhamento nutricional',
  ],
  openGraph: {
    title: 'Dra. Gislene Gomes | Nutricionista Clínica e Esportiva',
    description:
      'Nutrição clínica e esportiva com plano alimentar personalizado para emagrecer, ganhar saúde e performance sem terrorismo nutricional.',
    url: 'https://gnutrielev.com.br',
    siteName: 'GNutriElev',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: 'https://gnutrielev.com.br/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dra. Gislene Gomes - Nutricionista Clínica e Esportiva',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@g_nutrielev',
    creator: '@g_nutrielev',
  },
} as const;
