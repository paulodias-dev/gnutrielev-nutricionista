import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FAQ_ITEMS, NUTRI_PROFILE } from '../../utils/data';
import { seoConfig } from '../../config/seo';

const nutritionistStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  '@id': `${seoConfig.baseUrl}/#business`,
  name: NUTRI_PROFILE.businessName,
  url: seoConfig.baseUrl,
  image: seoConfig.openGraph.images[0].url,
  description: seoConfig.description,
  email: NUTRI_PROFILE.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: NUTRI_PROFILE.addressStreet,
    addressLocality: NUTRI_PROFILE.city,
    addressRegion: NUTRI_PROFILE.state,
    addressCountry: NUTRI_PROFILE.country,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Aracaju',
    },
    {
      '@type': 'Country',
      name: 'Brasil',
    },
  ],
  sameAs: [`https://instagram.com/${NUTRI_PROFILE.instagram.replace('@', '')}`],
};

const professionalStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${seoConfig.baseUrl}/#professional`,
  name: NUTRI_PROFILE.fullName,
  jobTitle: NUTRI_PROFILE.displayTitle,
  worksFor: {
    '@id': `${seoConfig.baseUrl}/#business`,
  },
};

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export const StructuredData: React.FC = () => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify(nutritionistStructuredData)}
    </script>
    <script type="application/ld+json">
      {JSON.stringify(professionalStructuredData)}
    </script>
    <script type="application/ld+json">
      {JSON.stringify(faqStructuredData)}
    </script>
  </Helmet>
);
