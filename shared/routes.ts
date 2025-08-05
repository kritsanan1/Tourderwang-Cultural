// SEO-optimized URL structure for the application
export const routes = {
  // Homepage
  home: '/',
  
  // Cultural Heritage Routes
  culture: {
    base: '/culture',
    history: '/culture/phu-thai-history',
    festivals: '/culture/traditional-festivals',
    cuisine: '/culture/local-cuisine', 
    arts: '/culture/arts-crafts',
    sites: '/culture/cultural-sites',
    virtualTours: '/culture/virtual-tours',
    language: '/culture/language-dialect'
  },
  
  // Community Hub Routes
  community: {
    base: '/community',
    jobs: '/community/jobs',
    events: '/community/local-events',
    forum: '/community/forum',
    volunteer: '/community/volunteer-programs',
    news: '/community/news'
  },
  
  // Local Business Routes
  business: {
    base: '/business',
    directory: '/business/directory',
    accommodations: '/business/accommodations',
    restaurants: '/business/restaurants-food',
    artisans: '/business/artisan-shops',
    tours: '/business/tour-services',
    register: '/business/list-your-business'
  },
  
  // Explore & Visit Routes
  explore: {
    base: '/explore',
    map: '/explore/interactive-map',
    guide: '/explore/travel-guide',
    itineraries: '/explore/suggested-itineraries',
    gallery: '/explore/photo-gallery',
    reviews: '/explore/visitor-reviews',
    seasons: '/explore/seasonal-highlights'
  },
  
  // Secondary Routes
  research: '/research-resources',
  media: '/media-center',
  partnerships: '/partnerships',
  
  // Footer Routes
  about: '/about-tourderwang',
  contact: '/contact-us',
  help: '/help-center',
  privacy: '/privacy-policy',
  terms: '/terms-of-service',
  accessibility: '/accessibility',
  
  // Search and Categories
  search: '/search',
  categories: {
    culture: '/category/cultural-heritage',
    jobs: '/category/career-opportunities', 
    business: '/category/local-business',
    tourism: '/category/tourism-travel'
  }
} as const;

// SEO metadata for each route
export const routeMetadata = {
  '/': {
    title: 'ที่นี่ วังสามหมอ - Discover Authentic Phu Thai Culture in Wang Sam Mo | Tourderwang',
    description: 'Explore authentic Phu Thai heritage, cultural tourism, local jobs, and businesses in Wang Sam Mo district, Udon Thani. Connect with Thailand\'s vibrant Phu Thai community through interactive cultural experiences.',
    keywords: 'Phu Thai culture, Wang Sam Mo, Udon Thani, Thai cultural heritage, traditional festivals, cultural tourism, Thailand travel, local jobs, community',
    h1: 'ที่นี่ วังสามหมอ'
  },
  '/culture': {
    title: 'Phu Thai Cultural Heritage - Traditional Arts, History & Festivals | Wang Sam Mo',
    description: 'Discover authentic Phu Thai cultural heritage in Wang Sam Mo. Explore traditional arts, historical sites, festivals, cuisine, and language preservation efforts in Udon Thani province.',
    keywords: 'Phu Thai culture, traditional arts, Thai heritage, Wang Sam Mo history, cultural festivals, traditional cuisine, Udon Thani culture',
    h1: 'Phu Thai Cultural Heritage'
  },
  '/culture/phu-thai-history': {
    title: 'Phu Thai History - Origins, Migration & Heritage in Wang Sam Mo | Tourderwang',
    description: 'Learn about Phu Thai people\'s rich history, migration patterns, and cultural evolution in Wang Sam Mo district. Discover historical narratives and heritage preservation efforts.',
    keywords: 'Phu Thai history, Thai ethnic groups, Wang Sam Mo history, cultural heritage, migration history, Udon Thani heritage',
    h1: 'Phu Thai People: History & Heritage'
  },
  '/culture/traditional-festivals': {
    title: 'Traditional Phu Thai Festivals - Celebrations & Ceremonies in Wang Sam Mo',
    description: 'Experience vibrant Phu Thai festivals and traditional ceremonies in Wang Sam Mo. Join seasonal celebrations, religious festivals, and community gatherings.',
    keywords: 'Phu Thai festivals, traditional ceremonies, Wang Sam Mo events, Thai cultural festivals, seasonal celebrations, religious festivals',
    h1: 'Traditional Phu Thai Festivals'
  },
  '/community/jobs': {
    title: 'Local Jobs in Wang Sam Mo - Employment Opportunities | Phu Thai Community',
    description: 'Find local employment opportunities in Wang Sam Mo district. Browse jobs in cultural tourism, traditional crafts, hospitality, and community development.',
    keywords: 'Wang Sam Mo jobs, local employment, Udon Thani jobs, cultural tourism jobs, traditional craft jobs, community employment',
    h1: 'Local Job Opportunities'
  },
  '/business/directory': {
    title: 'Local Business Directory - Wang Sam Mo Shops, Services & Restaurants',
    description: 'Browse verified local businesses in Wang Sam Mo. Find authentic restaurants, traditional craft shops, accommodations, and professional services.',
    keywords: 'Wang Sam Mo business, local shops, traditional crafts, local restaurants, Udon Thani business directory',
    h1: 'Local Business Directory'
  },
  '/explore/interactive-map': {
    title: 'Interactive Cultural Map - Wang Sam Mo Points of Interest | Tourderwang',
    description: 'Navigate Wang Sam Mo with our interactive cultural map. Discover temples, cultural sites, local businesses, and hidden gems with detailed information.',
    keywords: 'Wang Sam Mo map, cultural sites map, Udon Thani attractions, interactive map, tourism map, cultural landmarks',
    h1: 'Interactive Cultural Map'
  }
} as const;

// Breadcrumb generation helper
export const generateBreadcrumbs = (pathname: string) => {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: Array<{ label: string; href: string; }> = [
    { label: 'Home', href: '/' }
  ];
  
  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    // Convert URL segments to readable labels
    const label = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    breadcrumbs.push({
      label,
      href: currentPath
    });
  });
  
  return breadcrumbs;
};

// Canonical URL helper
export const getCanonicalUrl = (pathname: string, baseUrl = 'https://tourderwang.com') => {
  return `${baseUrl}${pathname}`;
};