import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoConfig } from '../../config/seo';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalPath?: string;
  noIndex?: boolean;
}

const buildCanonicalUrl = (path = '/') => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${seoConfig.baseUrl}${normalizedPath === '/' ? '' : normalizedPath}`;
};

export const SEO: React.FC<SEOProps> = ({ title, description, keywords, canonicalPath = '/', noIndex = false }) => {
  const pageTitle = title?.trim()
    ? `${title.trim()} | ${seoConfig.siteName}`
    : seoConfig.title;
  const pageDescription = description?.trim() || seoConfig.description;
  const pageKeywords = keywords?.length ? keywords : seoConfig.keywords;
  const canonicalUrl = buildCanonicalUrl(canonicalPath);
  const ogImage = seoConfig.openGraph.images[0];

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords.join(', ')} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={seoConfig.openGraph.title || pageTitle} />
      <meta property="og:description" content={seoConfig.openGraph.description || pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={seoConfig.openGraph.siteName} />
      <meta property="og:type" content={seoConfig.openGraph.type} />
      <meta property="og:locale" content={seoConfig.openGraph.locale} />
      <meta property="og:image" content={ogImage.url} />
      <meta property="og:image:secure_url" content={ogImage.secureUrl} />
      <meta property="og:image:type" content={ogImage.type} />
      <meta property="og:image:width" content={`${ogImage.width}`} />
      <meta property="og:image:height" content={`${ogImage.height}`} />
      <meta property="og:image:alt" content={ogImage.alt} />

      <meta name="twitter:card" content={seoConfig.twitter.card} />
      <meta name="twitter:site" content={seoConfig.twitter.site} />
      <meta name="twitter:creator" content={seoConfig.twitter.creator} />
      <meta name="twitter:title" content={seoConfig.openGraph.title || pageTitle} />
      <meta name="twitter:description" content={seoConfig.openGraph.description || pageDescription} />
      <meta name="twitter:image" content={ogImage.url} />
      <meta name="twitter:image:alt" content={ogImage.alt} />
    </Helmet>
  );
};
