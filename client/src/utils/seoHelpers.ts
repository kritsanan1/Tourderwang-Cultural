// SEO optimization utilities
export const seoHelpers = {
  // Generate structured data for different page types
  generateStructuredData: (type: 'website' | 'article' | 'organization' | 'place', data: any) => {
    const baseStructure = {
      "@context": "https://schema.org",
      "@type": type,
    };

    switch (type) {
      case 'website':
        return {
          ...baseStructure,
          "name": data.name || "ที่นี่ วังสามหมอ - Tourderwang",
          "alternateName": data.alternateName || "Tourderwang",
          "description": data.description,
          "url": data.url,
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${data.url}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        };

      case 'article':
        return {
          ...baseStructure,
          "headline": data.headline,
          "description": data.description,
          "author": {
            "@type": "Organization",
            "name": "Tourderwang Team"
          },
          "publisher": {
            "@type": "Organization", 
            "name": "Tourderwang",
            "logo": {
              "@type": "ImageObject",
              "url": `${data.baseUrl}/logo.png`
            }
          },
          "datePublished": data.datePublished,
          "dateModified": data.dateModified,
          "mainEntityOfPage": data.url
        };

      case 'place':
        return {
          ...baseStructure,
          "name": data.name,
          "description": data.description,
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": data.latitude,
            "longitude": data.longitude
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": data.locality,
            "addressRegion": data.region,
            "addressCountry": data.country
          }
        };

      default:
        return baseStructure;
    }
  },

  // Generate Open Graph meta tags
  generateOpenGraph: (data: {
    title: string;
    description: string;
    url: string;
    image?: string;
    type?: string;
    locale?: string;
  }) => {
    return {
      'og:title': data.title,
      'og:description': data.description,
      'og:url': data.url,
      'og:type': data.type || 'website',
      'og:site_name': 'Tourderwang - ที่นี่ วังสามหมอ',
      'og:locale': data.locale || 'en_US',
      'og:locale:alternate': 'th_TH',
      ...(data.image && {
        'og:image': data.image,
        'og:image:alt': 'Phu Thai cultural heritage in Wang Sam Mo district',
        'og:image:width': '1200',
        'og:image:height': '630'
      })
    };
  },

  // Generate Twitter Card meta tags
  generateTwitterCard: (data: {
    title: string;
    description: string;
    image?: string;
  }) => {
    return {
      'twitter:card': 'summary_large_image',
      'twitter:title': data.title,
      'twitter:description': data.description,
      ...(data.image && {
        'twitter:image': data.image,
        'twitter:image:alt': 'Phu Thai cultural heritage in Wang Sam Mo district'
      })
    };
  },

  // URL slug generator
  generateSlug: (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .trim();
  },

  // Meta description optimizer
  optimizeMetaDescription: (text: string, maxLength: number = 160): string => {
    if (text.length <= maxLength) return text;
    
    // Try to cut at a sentence boundary
    const sentences = text.split('. ');
    let result = '';
    
    for (const sentence of sentences) {
      if ((result + sentence + '. ').length <= maxLength) {
        result += sentence + '. ';
      } else {
        break;
      }
    }
    
    if (result.trim()) {
      return result.trim();
    }
    
    // If no good sentence boundary, cut at word boundary
    const words = text.split(' ');
    result = '';
    
    for (const word of words) {
      if ((result + word + ' ').length <= maxLength - 3) {
        result += word + ' ';
      } else {
        break;
      }
    }
    
    return (result.trim() + '...').substring(0, maxLength);
  },

  // Heading hierarchy validator
  validateHeadingHierarchy: (headings: Array<{ level: number; text: string }>): Array<{ level: number; text: string; issue?: string }> => {
    const result: Array<{ level: number; text: string; issue?: string }> = [];
    let currentLevel = 0;

    headings.forEach((heading) => {
      const validatedHeading = { ...heading };

      // Check for H1 uniqueness
      if (heading.level === 1 && result.some(h => h.level === 1)) {
        validatedHeading.issue = 'Multiple H1 tags detected - should only have one per page';
      }

      // Check for proper hierarchy
      if (heading.level > currentLevel + 1) {
        validatedHeading.issue = `Heading level skipped - H${heading.level} follows H${currentLevel}`;
      }

      // Check heading length
      if (heading.text.length > 60) {
        validatedHeading.issue = 'Heading too long - consider shortening for better SEO';
      }

      result.push(validatedHeading);
      currentLevel = Math.max(currentLevel, heading.level);
    });

    return result;
  },

  // Keywords density checker
  checkKeywordDensity: (content: string, keyword: string): { density: number; count: number; recommendation: string } => {
    const words = content.toLowerCase().split(/\s+/).length;
    const keywordCount = (content.toLowerCase().match(new RegExp(keyword.toLowerCase(), 'g')) || []).length;
    const density = (keywordCount / words) * 100;

    let recommendation = '';
    if (density < 0.5) {
      recommendation = 'Consider adding the keyword more naturally to improve relevance';
    } else if (density > 3) {
      recommendation = 'Keyword density too high - reduce usage to avoid keyword stuffing';
    } else {
      recommendation = 'Keyword density is optimal';
    }

    return {
      density: Math.round(density * 100) / 100,
      count: keywordCount,
      recommendation
    };
  },

  // Generate breadcrumb JSON-LD
  generateBreadcrumbStructuredData: (breadcrumbs: Array<{ name: string; url: string }>) => {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    };
  },

  // Image alt text generator
  generateImageAlt: (context: string, subject: string): string => {
    return `${subject} in ${context} - Phu Thai cultural heritage, Wang Sam Mo district, Udon Thani`;
  },

  // Canonical URL validator
  validateCanonicalUrl: (url: string): { isValid: boolean; issues: string[] } => {
    const issues: string[] = [];
    
    if (!url.startsWith('https://')) {
      issues.push('URL should use HTTPS');
    }
    
    if (url.includes('#')) {
      issues.push('Canonical URL should not contain fragments');
    }
    
    if (url.includes('?')) {
      issues.push('Consider removing unnecessary query parameters');
    }
    
    if (url.length > 2000) {
      issues.push('URL too long - consider shortening');
    }

    return {
      isValid: issues.length === 0,
      issues
    };
  }
};