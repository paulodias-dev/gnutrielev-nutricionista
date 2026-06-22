import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoConfig } from '../../config/seo';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
}

export const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  const pageTitle = title?.trim()
    ? `${title.trim()} | ${seoConfig.siteName}`
    : seoConfig.title;
  const pageDescription = description?.trim() || seoConfig.description;
  const pageKeywords = keywords?.length ? keywords : seoConfig.keywords;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords.join(', ')} />
      <link rel="canonical" href={seoConfig.openGraph.url} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={seoConfig.openGraph.url} />
      <meta property="og:site_name" content={seoConfig.openGraph.siteName} />
      <meta property="og:type" content={seoConfig.openGraph.type} />
      <meta property="og:locale" content={seoConfig.openGraph.locale} />
      <meta property="og:image" content={seoConfig.openGraph.images[0].url} />
      <meta property="og:image:width" content={`${seoConfig.openGraph.images[0].width}`} />
      <meta property="og:image:height" content={`${seoConfig.openGraph.images[0].height}`} />
      <meta property="og:image:alt" content={seoConfig.openGraph.images[0].alt} />

      <meta name="twitter:card" content={seoConfig.twitter.card} />
      <meta name="twitter:site" content={seoConfig.twitter.site} />
      <meta name="twitter:creator" content={seoConfig.twitter.creator} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={seoConfig.openGraph.images[0].url} />
    </Helmet>
  );
};
