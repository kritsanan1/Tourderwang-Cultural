export interface NavigationItem {
  id: string;
  label: string;
  labelTh: string;
  href: string;
  description: string;
  icon?: string;
  children?: NavigationItem[];
  userTypes?: ('tourist' | 'local' | 'researcher' | 'business')[];
}

export interface SiteStructure {
  primaryNavigation: NavigationItem[];
  secondaryNavigation: NavigationItem[];
  footerNavigation: NavigationItem[];
  mobileNavigation: NavigationItem[];
}

export const siteStructure: SiteStructure = {
  primaryNavigation: [
    {
      id: 'culture',
      label: 'Cultural Heritage',
      labelTh: 'มรดกทางวัฒนธรรม',
      href: '/culture',
      description: 'Explore authentic Phu Thai traditions, history, and cultural practices preserved through generations.',
      icon: 'BookOpen',
      userTypes: ['tourist', 'local', 'researcher'],
      children: [
        {
          id: 'phu-thai-history',
          label: 'Phu Thai History',
          labelTh: 'ประวัติศาสตร์ผู้ไทย',
          href: '/culture/history',
          description: 'Discover the rich historical narrative of the Phu Thai people and their migration to Wang Sam Mo.',
          userTypes: ['tourist', 'researcher']
        },
        {
          id: 'traditional-festivals',
          label: 'Traditional Festivals',
          labelTh: 'เทศกาลดั้งเดิม',
          href: '/culture/festivals',
          description: 'Experience vibrant Phu Thai festivals, ceremonies, and seasonal celebrations.',
          userTypes: ['tourist', 'local']
        },
        {
          id: 'local-cuisine',
          label: 'Local Cuisine',
          labelTh: 'อาหารท้องถิ่น',
          href: '/culture/cuisine',
          description: 'Savor authentic Phu Thai recipes, cooking techniques, and culinary traditions.',
          userTypes: ['tourist', 'local']
        },
        {
          id: 'arts-crafts',
          label: 'Arts & Crafts',
          labelTh: 'ศิลปะและหัตถกรรม',
          href: '/culture/arts',
          description: 'Learn about traditional Phu Thai textiles, pottery, woodcarving, and artistic expressions.',
          userTypes: ['tourist', 'researcher', 'business']
        },
        {
          id: 'cultural-sites',
          label: 'Cultural Sites',
          labelTh: 'แหล่งวัฒนธรรม',
          href: '/culture/sites',
          description: 'Visit temples, museums, and heritage locations significant to Phu Thai culture.',
          userTypes: ['tourist', 'researcher']
        },
        {
          id: 'virtual-tours',
          label: 'Virtual Tours',
          labelTh: 'ทัวร์เสมือนจริง',
          href: '/culture/virtual-tours',
          description: 'Take immersive 360° virtual tours of cultural landmarks and sacred spaces.',
          userTypes: ['tourist', 'researcher']
        },
        {
          id: 'language-dialect',
          label: 'Language & Dialect',
          labelTh: 'ภาษาและสำเนียง',
          href: '/culture/language',
          description: 'Learn Phu Thai language basics, pronunciation guides, and linguistic heritage.',
          userTypes: ['tourist', 'researcher']
        }
      ]
    },
    {
      id: 'community',
      label: 'Community Hub',
      labelTh: 'ศูนย์กลางชุมชน',
      href: '/community',
      description: 'Connect with locals, participate in community activities, and access local services.',
      icon: 'Users',
      userTypes: ['local', 'tourist', 'business'],
      children: [
        {
          id: 'job-portal',
          label: 'Job Opportunities',
          labelTh: 'โอกาสการทำงาน',
          href: '/community/jobs',
          description: 'Find employment opportunities in Wang Sam Mo district and surrounding areas.',
          userTypes: ['local']
        },
        {
          id: 'local-events',
          label: 'Local Events',
          labelTh: 'กิจกรรมท้องถิ่น',
          href: '/community/events',
          description: 'Stay updated with community gatherings, workshops, and cultural events.',
          userTypes: ['local', 'tourist']
        },
        {
          id: 'community-forum',
          label: 'Community Forum',
          labelTh: 'เวทีชุมชน',
          href: '/community/forum',
          description: 'Engage in discussions, share experiences, and connect with community members.',
          userTypes: ['local', 'tourist']
        },
        {
          id: 'volunteer-opportunities',
          label: 'Volunteer Programs',
          labelTh: 'โครงการอาสาสมัคร',
          href: '/community/volunteer',
          description: 'Join cultural preservation projects and community development initiatives.',
          userTypes: ['local', 'tourist', 'researcher']
        },
        {
          id: 'local-news',
          label: 'Community News',
          labelTh: 'ข่าวชุมชน',
          href: '/community/news',
          description: 'Read latest updates about Wang Sam Mo district and community developments.',
          userTypes: ['local', 'business']
        }
      ]
    },
    {
      id: 'business',
      label: 'Local Business',
      labelTh: 'ธุรกิจท้องถิ่น',
      href: '/business',
      description: 'Discover authentic local businesses, services, and support the community economy.',
      icon: 'Store',
      userTypes: ['tourist', 'local', 'business'],
      children: [
        {
          id: 'business-directory',
          label: 'Business Directory',
          labelTh: 'ไดเรกทอรีธุรกิจ',
          href: '/business/directory',
          description: 'Browse verified local businesses including restaurants, shops, and services.',
          userTypes: ['tourist', 'local']
        },
        {
          id: 'accommodations',
          label: 'Accommodations',
          labelTh: 'ที่พัก',
          href: '/business/accommodations',
          description: 'Find authentic homestays, guesthouses, and hotels in Wang Sam Mo.',
          userTypes: ['tourist']
        },
        {
          id: 'restaurants-food',
          label: 'Restaurants & Food',
          labelTh: 'ร้านอาหาร',
          href: '/business/restaurants',
          description: 'Discover local eateries serving traditional Phu Thai cuisine and regional specialties.',
          userTypes: ['tourist', 'local']
        },
        {
          id: 'artisan-shops',
          label: 'Artisan Shops',
          labelTh: 'ร้านงานฝีมือ',
          href: '/business/artisans',
          description: 'Shop for authentic handmade crafts, textiles, and traditional Phu Thai products.',
          userTypes: ['tourist', 'business']
        },
        {
          id: 'tour-services',
          label: 'Tour Services',
          labelTh: 'บริการท่องเที่ยว',
          href: '/business/tours',
          description: 'Book guided cultural tours, transportation, and local experience packages.',
          userTypes: ['tourist']
        },
        {
          id: 'business-registration',
          label: 'List Your Business',
          labelTh: 'ลงทะเบียนธุรกิจ',
          href: '/business/register',
          description: 'Register your local business to reach more customers and tourists.',
          userTypes: ['business']
        }
      ]
    },
    {
      id: 'explore',
      label: 'Explore & Visit',
      labelTh: 'สำรวจและเยี่ยมชม',
      href: '/explore',
      description: 'Plan your visit with interactive maps, travel guides, and local recommendations.',
      icon: 'Map',
      userTypes: ['tourist', 'researcher'],
      children: [
        {
          id: 'interactive-map',
          label: 'Interactive Map',
          labelTh: 'แผนที่โต้ตอบ',
          href: '/explore/map',
          description: 'Navigate Wang Sam Mo with detailed maps showing cultural sites and points of interest.',
          userTypes: ['tourist']
        },
        {
          id: 'travel-guide',
          label: 'Travel Guide',
          labelTh: 'คู่มือท่องเที่ยว',
          href: '/explore/guide',
          description: 'Comprehensive travel information including transportation, weather, and local customs.',
          userTypes: ['tourist']
        },
        {
          id: 'suggested-itineraries',
          label: 'Suggested Itineraries',
          labelTh: 'เส้นทางแนะนำ',
          href: '/explore/itineraries',
          description: 'Pre-planned cultural tours and routes for different interests and time frames.',
          userTypes: ['tourist']
        },
        {
          id: 'photo-gallery',
          label: 'Photo Gallery',
          labelTh: 'แกลเลอรีภาพ',
          href: '/explore/gallery',
          description: 'Browse stunning photography showcasing Wang Sam Mo\'s natural beauty and culture.',
          userTypes: ['tourist', 'researcher']
        },
        {
          id: 'visitor-reviews',
          label: 'Visitor Reviews',
          labelTh: 'รีวิวผู้เยี่ยมชม',
          href: '/explore/reviews',
          description: 'Read authentic reviews and experiences from previous visitors.',
          userTypes: ['tourist']
        },
        {
          id: 'seasonal-highlights',
          label: 'Seasonal Highlights',
          labelTh: 'ไฮไลท์ตามฤดูกาล',
          href: '/explore/seasons',
          description: 'Discover the best times to visit for festivals, weather, and cultural activities.',
          userTypes: ['tourist']
        }
      ]
    }
  ],
  secondaryNavigation: [
    {
      id: 'research-resources',
      label: 'Research Resources',
      labelTh: 'แหล่งข้อมูลวิจัย',
      href: '/research',
      description: 'Academic resources, historical documents, and research materials about Phu Thai culture.',
      userTypes: ['researcher']
    },
    {
      id: 'media-center',
      label: 'Media Center',
      labelTh: 'ศูนย์สื่อ',
      href: '/media',
      description: 'Press releases, media kits, and resources for journalists and content creators.',
      userTypes: ['researcher', 'business']
    },
    {
      id: 'partnerships',
      label: 'Partnerships',
      labelTh: 'ความร่วมมือ',
      href: '/partnerships',
      description: 'Collaboration opportunities with educational institutions, NGOs, and cultural organizations.',
      userTypes: ['researcher', 'business']
    }
  ],
  footerNavigation: [
    {
      id: 'about',
      label: 'About Tourderwang',
      labelTh: 'เกี่ยวกับทัวร์เดอร์วัง',
      href: '/about',
      description: 'Learn about our mission to preserve and promote Phu Thai cultural heritage.'
    },
    {
      id: 'contact',
      label: 'Contact Us',
      labelTh: 'ติดต่อเรา',
      href: '/contact',
      description: 'Get in touch with our team for inquiries, support, or collaboration opportunities.'
    },
    {
      id: 'help-center',
      label: 'Help Center',
      labelTh: 'ศูนย์ช่วยเหลือ',
      href: '/help',
      description: 'Find answers to frequently asked questions and user guides.'
    },
    {
      id: 'privacy-policy',
      label: 'Privacy Policy',
      labelTh: 'นโยบายความเป็นส่วนตัว',
      href: '/privacy',
      description: 'Information about how we collect, use, and protect your personal data.'
    },
    {
      id: 'terms-of-service',
      label: 'Terms of Service',
      labelTh: 'ข้อกำหนดการใช้งาน',
      href: '/terms',
      description: 'Legal terms and conditions for using the Tourderwang platform.'
    },
    {
      id: 'accessibility',
      label: 'Accessibility',
      labelTh: 'การเข้าถึง',
      href: '/accessibility',
      description: 'Our commitment to making the website accessible to all users.'
    }
  ],
  mobileNavigation: [
    {
      id: 'home',
      label: 'Home',
      labelTh: 'หน้าแรก',
      href: '/',
      description: 'Return to the main page',
      icon: 'Home'
    },
    {
      id: 'culture-mobile',
      label: 'Culture',
      labelTh: 'วัฒนธรรม',
      href: '/culture',
      description: 'Explore Phu Thai heritage',
      icon: 'BookOpen'
    },
    {
      id: 'community-mobile',
      label: 'Community',
      labelTh: 'ชุมชน',
      href: '/community',
      description: 'Connect with locals',
      icon: 'Users'
    },
    {
      id: 'business-mobile',
      label: 'Business',
      labelTh: 'ธุรกิจ',
      href: '/business',
      description: 'Local businesses',
      icon: 'Store'
    },
    {
      id: 'map-mobile',
      label: 'Map',
      labelTh: 'แผนที่',
      href: '/explore/map',
      description: 'Interactive map',
      icon: 'Map'
    }
  ]
};

// User type configurations
export const userTypeConfigs = {
  tourist: {
    primarySections: ['culture', 'explore', 'business'],
    featuredContent: ['virtual-tours', 'interactive-map', 'accommodations', 'restaurants-food'],
    callToActions: ['Plan Your Visit', 'Book Tours', 'Find Accommodations']
  },
  local: {
    primarySections: ['community', 'business', 'culture'],
    featuredContent: ['job-portal', 'local-events', 'community-forum', 'business-directory'],
    callToActions: ['Find Jobs', 'Join Community', 'List Business']
  },
  researcher: {
    primarySections: ['culture', 'research-resources', 'media-center'],
    featuredContent: ['phu-thai-history', 'cultural-sites', 'research-resources', 'partnerships'],
    callToActions: ['Access Research', 'Download Resources', 'Collaborate']
  },
  business: {
    primarySections: ['business', 'community', 'partnerships'],
    featuredContent: ['business-registration', 'business-directory', 'local-events', 'media-center'],
    callToActions: ['List Business', 'Join Network', 'Partner With Us']
  }
};

// Language toggle placement recommendations
export const languageTogglePlacements = {
  primary: 'header-top-right', // Most prominent placement
  secondary: 'mobile-menu-top', // For mobile navigation
  tertiary: 'footer-bottom', // Additional accessibility option
  contextual: 'content-specific' // On pages with heavy text content
};

// Additional recommended content categories
export const additionalRecommendations = [
  {
    category: 'Educational Programs',
    description: 'Online courses, workshops, and certification programs about Phu Thai culture',
    targetUsers: ['researcher', 'tourist', 'local'],
    priority: 'high'
  },
  {
    category: 'Digital Archive',
    description: 'Searchable database of historical photos, documents, and oral histories',
    targetUsers: ['researcher', 'local'],
    priority: 'high'
  },
  {
    category: 'Mobile App',
    description: 'Companion mobile application for offline access and location-based features',
    targetUsers: ['tourist', 'local'],
    priority: 'medium'
  },
  {
    category: 'Donation/Support',
    description: 'Ways for visitors to contribute to cultural preservation efforts',
    targetUsers: ['tourist', 'researcher'],
    priority: 'medium'
  },
  {
    category: 'Newsletter/Blog',
    description: 'Regular updates about cultural events, research findings, and community news',
    targetUsers: ['all'],
    priority: 'medium'
  }
];