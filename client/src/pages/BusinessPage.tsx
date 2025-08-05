import React, { useState } from 'react';
import { Store, Home, Utensils, Palette, MapPin, Star, ArrowRight, Phone, Clock, ExternalLink, Filter, Search } from 'lucide-react';
import SEO from '../components/SEO';
import { siteContent } from '../../../shared/content';

const BusinessPage: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'th'>('th');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const content = siteContent.business[language];

  const businessCategories = language === 'th' ? [
    { id: 'all', name: 'ทั้งหมด', icon: Store },
    { id: 'accommodations', name: 'ที่พัก', icon: Home },
    { id: 'restaurants', name: 'ร้านอาหาร', icon: Utensils },
    { id: 'artisans', name: 'งานฝีมือ', icon: Palette },
    { id: 'tours', name: 'บริการนำเที่ยว', icon: MapPin }
  ] : [
    { id: 'all', name: 'All', icon: Store },
    { id: 'accommodations', name: 'Accommodations', icon: Home },
    { id: 'restaurants', name: 'Restaurants', icon: Utensils },
    { id: 'artisans', name: 'Artisans', icon: Palette },
    { id: 'tours', name: 'Tour Services', icon: MapPin }
  ];

  const featuredBusinesses = language === 'th' ? [
    {
      id: 1,
      name: 'โฮมสเตย์บ้านไผ่',
      category: 'accommodations',
      description: 'ที่พักโฮมสเตย์แสนอบอุ่นท่ามกลางบรรยากาศชนบท พร้อมกิจกรรมเรียนรู้วัฒนธรรมท้องถิ่น',
      rating: 4.8,
      reviews: 124,
      price: '฿800-1,200/คืน',
      location: 'หมู่ 3 ตำบลวังสามหมอ',
      phone: '084-123-4567',
      hours: 'เช็คอิน 14:00 | เช็คเอาท์ 11:00',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Wi-Fi ฟรี', 'อาหารเช้า', 'จักรยานให้เช่า', 'กิจกรรมวัฒนธรรม'],
      verified: true,
      featured: true
    },
    {
      id: 2,
      name: 'ร้านอาหารบ้านนา',
      category: 'restaurants',
      description: 'ร้านอาหารพื้นบ้านผู้ไทยต้นตำรับ เสิร์ฟด้วยรสชาติดั้งเดิมที่สืบทอดมา 3 รุ่น',
      rating: 4.9,
      reviews: 256,
      price: '฿80-150/จาน',
      location: 'ถนนเจ้าฟ้า ตำบลวังสามหมอ',
      phone: '042-567-8901',
      hours: '10:00-21:00 (ปิดวันจันทร์)',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['อาหารส้มตำผู้ไทย', 'ข้าวเหนียวหมู', 'น้ำพริกแกง', 'ขนมจีนน้ำยา'],
      verified: true,
      featured: true
    },
    {
      id: 3,
      name: 'ศูนย์หัตถกรรมผู้ไทย',
      category: 'artisans',
      description: 'ผ้าทอมือและงานฝีมือดั้งเดิมคุณภาพสูง ผลิตโดยช่างฝีมือท้องถิ่น',
      rating: 4.7,
      reviews: 89,
      price: '฿300-2,500',
      location: 'หมู่ 5 ตำบลวังสามหมอ',
      phone: '089-234-5678',
      hours: '08:00-18:00 (ทุกวัน)',
      image: 'https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['ผ้าทอมือ', 'กระเป๋าใส่ข้าวเหนียว', 'เครื่องประดับ', 'ของที่ระลึก'],
      verified: true,
      featured: true
    }
  ] : [
    {
      id: 1,
      name: 'Baan Pai Homestay',
      category: 'accommodations',
      description: 'Cozy homestay accommodation in rural atmosphere with local cultural learning activities',
      rating: 4.8,
      reviews: 124,
      price: '฿800-1,200/night',
      location: 'Moo 3, Wang Sam Mo Subdistrict',
      phone: '084-123-4567',
      hours: 'Check-in 14:00 | Check-out 11:00',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Free Wi-Fi', 'Breakfast', 'Bicycle Rental', 'Cultural Activities'],
      verified: true,
      featured: true
    },
    {
      id: 2,
      name: 'Baan Na Restaurant',
      category: 'restaurants',
      description: 'Authentic Phu Thai local cuisine served with traditional flavors passed down 3 generations',
      rating: 4.9,
      reviews: 256,
      price: '฿80-150/dish',
      location: 'Chao Fa Road, Wang Sam Mo Subdistrict',
      phone: '042-567-8901',
      hours: '10:00-21:00 (Closed Mondays)',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Phu Thai Som Tam', 'Sticky Rice Pork', 'Chili Paste Curry', 'Kanom Jeen Nam Ya'],
      verified: true,
      featured: true
    },
    {
      id: 3,
      name: 'Phu Thai Handicraft Center',
      category: 'artisans',
      description: 'High-quality handwoven textiles and traditional crafts made by local artisans',
      rating: 4.7,
      reviews: 89,
      price: '฿300-2,500',
      location: 'Moo 5, Wang Sam Mo Subdistrict',
      phone: '089-234-5678',
      hours: '08:00-18:00 (Daily)',
      image: 'https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Handwoven Textiles', 'Sticky Rice Bags', 'Jewelry', 'Souvenirs'],
      verified: true,
      featured: true
    }
  ];

  const filteredBusinesses = featuredBusinesses.filter(business => {
    const matchesCategory = selectedCategory === 'all' || business.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      business.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO
        title={language === 'th' ? 'ไดเรกทอรีธุรกิจท้องถิ่นวังสามหมอ - ที่พัก ร้านอาหาร งานฝีมือ | ที่นี่ วังสามหมอ' : 'Wang Sam Mo Local Business Directory - Accommodations, Restaurants, Crafts | Tourderwang'}
        description={language === 'th' ? 'ค้นพบธุรกิจและบริการท้องถิ่นที่แท้จริงในวังสามหมอ รวมโฮมสเตย์ ร้านอาหารผู้ไทย งานฝีมือดั้งเดิม และบริการนำเที่ยว' : 'Discover authentic local businesses and services in Wang Sam Mo. Find homestays, Phu Thai restaurants, traditional crafts, and tour services.'}
        keywords={language === 'th' ? 'ธุรกิจวังสามหมอ, โฮมสเตย์, ร้านอาหารผู้ไทย, งานฝีมือดั้งเดิม, บริการนำเที่ยว, ไดเรกทอรีธุรกิจอุดรธานี' : 'Wang Sam Mo business, homestays, Phu Thai restaurants, traditional crafts, tour services, Udon Thani business directory'}
      />

      <main className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Language Toggle */}
              <div className="flex justify-center mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-lg">
                  <button
                    onClick={() => setLanguage('th')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      language === 'th' 
                        ? 'bg-green-600 text-white shadow-lg' 
                        : 'text-gray-600 hover:text-green-600'
                    }`}
                  >
                    ไทย
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      language === 'en' 
                        ? 'bg-green-600 text-white shadow-lg' 
                        : 'text-gray-600 hover:text-green-600'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 mobile-text-optimize">
                {content.title}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed mobile-text-optimize">
                {content.subtitle}
              </p>

              {/* Search and Filter */}
              <div className="max-w-4xl mx-auto mb-16">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
                  <div className="flex flex-col lg:flex-row gap-4">
                    {/* Search Input */}
                    <div className="flex-1 relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder={language === 'th' ? 'ค้นหาธุรกิจ...' : 'Search businesses...'}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mobile-text-optimize"
                      />
                    </div>
                    
                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-2 lg:gap-3">
                      {businessCategories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                          <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`flex items-center space-x-2 px-4 py-3 rounded-2xl font-medium transition-all duration-300 touch-target ${
                              selectedCategory === category.id
                                ? 'bg-green-600 text-white shadow-lg'
                                : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600'
                            }`}
                          >
                            <IconComponent className="h-4 w-4" />
                            <span className="mobile-text-optimize">{category.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Directory */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 mobile-text-optimize">
                  {language === 'th' ? 'ธุรกิจแนะนำ' : 'Featured Businesses'}
                </h2>
                <p className="text-gray-600 mobile-text-optimize">
                  {filteredBusinesses.length} {language === 'th' ? 'ธุรกิจที่พบ' : 'businesses found'}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredBusinesses.map((business) => (
                <div
                  key={business.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  {/* Business Image */}
                  <div className="relative h-48 sm:h-56">
                    <img
                      src={business.image}
                      alt={business.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {business.featured && (
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {language === 'th' ? 'แนะนำ' : 'Featured'}
                        </span>
                      )}
                      {business.verified && (
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                          <Star className="h-3 w-3 mr-1" />
                          {language === 'th' ? 'ตรวจสอบแล้ว' : 'Verified'}
                        </span>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                      {business.rating} ({business.reviews})
                    </div>
                  </div>

                  {/* Business Info */}
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 mobile-text-optimize">
                      {business.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed mobile-text-optimize">
                      {business.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {business.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                      {business.features.length > 3 && (
                        <span className="text-green-600 text-xs font-medium">
                          +{business.features.length - 3} {language === 'th' ? 'เพิ่มเติม' : 'more'}
                        </span>
                      )}
                    </div>

                    {/* Price and Location */}
                    <div className="space-y-2 mb-6 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-green-600" />
                        <span className="mobile-text-optimize">{business.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-green-600" />
                        <span className="mobile-text-optimize">{business.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-green-600" />
                        <span className="mobile-text-optimize">{business.hours}</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-lg font-semibold text-green-600 mb-6">
                      {business.price}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-2xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 touch-target">
                        {language === 'th' ? 'ดูรายละเอียด' : 'View Details'}
                      </button>
                      <button className="p-3 border-2 border-green-600 text-green-600 rounded-2xl hover:bg-green-600 hover:text-white transition-all duration-300 touch-target">
                        <ExternalLink className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredBusinesses.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 mobile-text-optimize">
                  {language === 'th' ? 'ไม่พบธุรกิจที่ตรงกับการค้นหา' : 'No businesses found'}
                </h3>
                <p className="text-gray-600 mobile-text-optimize">
                  {language === 'th' 
                    ? 'ลองเปลี่ยนเงื่อนไขการค้นหาหรือหมวดหมู่'
                    : 'Try changing your search terms or category filter'
                  }
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Register Business CTA */}
        <section className="py-16 sm:py-24 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 mobile-text-optimize">
              {language === 'th' ? 'ลงทะเบียนธุรกิจของคุณ' : 'Register Your Business'}
            </h2>
            <p className="text-xl text-white/90 mb-8 mobile-text-optimize">
              {language === 'th' 
                ? 'เข้าร่วมกับเราและเข้าถึงลูกค้าใหม่ในชุมชนผู้ไทย'
                : 'Join us and reach new customers in the Phu Thai community'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105 touch-target">
                {language === 'th' ? 'ลงทะเบียนฟรี' : 'Register for Free'}
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-2xl font-semibold hover:bg-white/30 transition-all duration-300 touch-target">
                {language === 'th' ? 'เรียนรู้เพิ่มเติม' : 'Learn More'}
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BusinessPage;