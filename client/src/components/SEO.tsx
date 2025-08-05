import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'ที่นี่ วังสามหมอ - Discover Authentic Phu Thai Culture in Wang Sam Mo | Tourderwang',
  description = 'Explore authentic Phu Thai heritage, cultural tourism, local jobs, and businesses in Wang Sam Mo district, Udon Thani. Connect with Thailand\'s vibrant Phu Thai community through interactive cultural experiences, traditional festivals, and local opportunities.',
  keywords = 'Phu Thai culture, Wang Sam Mo, Udon Thani, Thai cultural heritage, traditional festivals, cultural tourism, Thailand travel, local jobs, community, authentic experiences, cultural preservation, ที่นี่ วังสามหมอ, พื้นที่วัฒนธรรม, ท่องเที่ยวเชิงวัฒนธรรม',
  image = 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop',
  url = 'https://tourderwang.com',
  type = 'website',
  publishedTime,
  modifiedTime,
  section,
  canonical
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ที่นี่ วังสามหมอ - Tourderwang",
    "description": description,
    "url": url,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Tourderwang",
      "logo": {
        "@type": "ImageObject",
        "url": `${url}/logo.png`
      }
    },
    "mainEntity": {
      "@type": "TouristDestination",
      "name": "Wang Sam Mo District",
      "description": "Cultural heritage destination showcasing authentic Phu Thai traditions and community experiences in Udon Thani province.",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "17.3667",
        "longitude": "102.8167"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Wang Sam Mo",
        "addressRegion": "Udon Thani",
        "addressCountry": "Thailand"
      }
    }
  };

  return (
    <Helmet>
      {/* Enhanced Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Tourderwang Team" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="en" />
      <meta name="theme-color" content="#d97706" />
      <meta name="generator" content="Tourderwang Cultural Platform" />
      <meta name="referrer" content="origin-when-cross-origin" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical || url} />
      
      {/* Mobile Optimization */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Tourderwang" />

      {/* Enhanced Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="Phu Thai cultural heritage site in Wang Sam Mo district, Udon Thani" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Tourderwang - ที่นี่ วังสามหมอ" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="th_TH" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      <meta property="og:locale:alternate" content="th_TH" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@tourderwang" />
      <meta name="twitter:creator" content="@tourderwang" />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Favicon and Icons */}
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="th" href={`${url}/th`} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://images.pexels.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default SEO;