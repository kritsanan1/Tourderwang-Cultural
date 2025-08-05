import React, { useState } from 'react';
import { Map, BookOpen, Route, Camera, Star, Calendar, ArrowRight, MapPin, Clock, Eye, Heart, Filter } from 'lucide-react';
import SEO from '../components/SEO';
import { siteContent } from '../../../shared/content';

const ExplorePage: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'th'>('th');
  const [selectedSeason, setSelectedSeason] = useState<string>('all');
  const content = siteContent.explore[language];

  const exploreCategories = [
    {
      id: 'map',
      icon: Map,
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'guide',
      icon: BookOpen,
      color: 'from-green-500 to-emerald-500',
      image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'itineraries',
      icon: Route,
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'gallery',
      icon: Camera,
      color: 'from-orange-500 to-red-500',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'reviews',
      icon: Star,
      color: 'from-yellow-500 to-orange-500',
      image: 'https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'seasons',
      icon: Calendar,
      color: 'from-indigo-500 to-purple-500',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const featuredItineraries = language === 'th' ? [
    {
      id: 1,
      title: 'เส้นทางวัฒนธรรมผู้ไทย 1 วัน',
      description: 'สำรวจวัดโบราณ พิพิธภัณฑ์ท้องถิ่น และศูนย์หัตถกรรมในหนึ่งวัน',
      duration: '8 ชั่วโมง',
      stops: 6,
      difficulty: 'ง่าย',
      price: '฿500',
      rating: 4.8,
      reviews: 142,
      highlights: ['วัดป่าดงพญาเย็น', 'พิพิธภัณฑ์ผู้ไทย', 'ศูนย์หัตถกรรม', 'ตลาดวัฒนธรรม'],
      image: 'https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg?auto=compress&cs=tinysrgb&w=600',
      bestSeason: 'ตลอดปี'
    },
    {
      id: 2,
      title: 'ผจญภัยอาหารพื้นบ้าน',
      description: 'ชิมรสชาติอาหารผู้ไทยแท้จากร้านเด็ดและครัวชุมชน',
      duration: '5 ชั่วโมง',
      stops: 8,
      difficulty: 'ง่าย',
      price: '฿350',
      rating: 4.9,
      reviews: 218,
      highlights: ['ส้มตำผู้ไทย', 'ข้าวเหนียวหมู', 'ขนมจีนน้ำยา', 'น้ำพริกแกง'],
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      bestSeason: 'ตลอดปี'
    },
    {
      id: 3,
      title: 'เทศกาลบุญบั้งไฟ 3 วัน 2 คืน',
      description: 'เข้าร่วมเทศกาลบุญบั้งไฟประจำปี พร้อมกิจกรรมวัฒนธรรม',
      duration: '3 วัน',
      stops: 12,
      difficulty: 'ปานกลาง',
      price: '฿1,200',
      rating: 4.7,
      reviews: 89,
      highlights: ['พิธีบุญบั้งไฟ', 'การแข่งขันบั้งไฟ', 'โชว์วัฒนธรรม', 'งานฝีมือ'],
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600',
      bestSeason: 'มีนาคม-เมษายน'
    }
  ] : [
    {
      id: 1,
      title: 'Phu Thai Culture Trail - 1 Day',
      description: 'Explore ancient temples, local museums, and handicraft centers in one day',
      duration: '8 hours',
      stops: 6,
      difficulty: 'Easy',
      price: '฿500',
      rating: 4.8,
      reviews: 142,
      highlights: ['Wat Pa Dong Phaya Yen', 'Phu Thai Museum', 'Handicraft Center', 'Cultural Market'],
      image: 'https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg?auto=compress&cs=tinysrgb&w=600',
      bestSeason: 'Year-round'
    },
    {
      id: 2,
      title: 'Local Food Adventure',
      description: 'Taste authentic Phu Thai cuisine from local restaurants and community kitchens',
      duration: '5 hours',
      stops: 8,
      difficulty: 'Easy',
      price: '฿350',
      rating: 4.9,
      reviews: 218,
      highlights: ['Phu Thai Som Tam', 'Sticky Rice Pork', 'Kanom Jeen Nam Ya', 'Chili Paste Curry'],
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      bestSeason: 'Year-round'
    },
    {
      id: 3,
      title: 'Rocket Festival 3 Days 2 Nights',
      description: 'Join the annual Rocket Festival with cultural activities and celebrations',
      duration: '3 days',
      stops: 12,
      difficulty: 'Moderate',
      price: '฿1,200',
      rating: 4.7,
      reviews: 89,
      highlights: ['Rocket Ceremony', 'Rocket Competition', 'Cultural Shows', 'Handicrafts'],
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600',
      bestSeason: 'March-April'
    }
  ];

  const seasonalHighlights = language === 'th' ? [
    {
      season: 'มีนาคม-เมษายน',
      title: 'ฤดูเทศกาลบุญบั้งไฟ',
      description: 'ช่วงเวลาที่ดีที่สุดสำหรับการเข้าร่วมเทศกาลประเพณีและงานวัฒนธรรม',
      events: ['เทศกาลบุญบั้งไฟ', 'งานสงกรานต์', 'งานผ้าทอมือ'],
      weather: 'อากาศร้อน แห้ง',
      tips: 'ควรเตรียมหมวกและครีมกันแดด'
    },
    {
      season: 'พฤษภาคม-ตุลาคม',
      title: 'ฤดูฝนและการเพาะปลูก',
      description: 'ชมวิถีชีวิตการเกษตรและธรรมชาติที่เขียวขจี',
      events: ['งานเทศกาลข้าว', 'พิธีแห่เทียนพรรษา', 'ตลาดนัดข้าวใหม่'],
      weather: 'อากาศชื้น มีฝนตก',
      tips: 'ควรเตรียมเสื้อกันฝนและรองเท้ากันลื่น'
    },
    {
      season: 'พฤศจิกายน-กุมภาพันธ์',
      title: 'ฤดูหนาวและการเก็บเกี่ยว',
      description: 'อากาศเย็นสบาย เหมาะสำหรับการท่องเที่ยวและถ่ายภาพ',
      events: ['งานเก็บเกี่ยวข้าว', 'งานกาชาด', 'ตลาดน้ำวัฒนธรรม'],
      weather: 'อากาศเย็น แห้ง',
      tips: 'ควรเตรียมเสื้อแจ็คเก็ตบางๆ สำหรับเช้าและเย็น'
    }
  ] : [
    {
      season: 'March-April',
      title: 'Rocket Festival Season',
      description: 'Best time to join traditional festivals and cultural events',
      events: ['Rocket Festival', 'Songkran Festival', 'Handweaving Fair'],
      weather: 'Hot, dry',
      tips: 'Prepare hats and sunscreen'
    },
    {
      season: 'May-October',
      title: 'Rainy Season & Farming',
      description: 'Experience agricultural life and lush green nature',
      events: ['Rice Festival', 'Candle Parade', 'New Rice Market'],
      weather: 'Humid with rainfall',
      tips: 'Prepare raincoats and non-slip shoes'
    },
    {
      season: 'November-February',
      title: 'Cool Season & Harvest',
      description: 'Cool comfortable weather perfect for touring and photography',
      events: ['Rice Harvest Festival', 'Red Cross Fair', 'Cultural Floating Market'],
      weather: 'Cool, dry',
      tips: 'Prepare light jackets for morning and evening'
    }
  ];

  const visitorReviews = language === 'th' ? [
    {
      id: 1,
      name: 'สมชาย อภิชาติ',
      location: 'กรุงเทพฯ',
      rating: 5,
      date: '15 ม.ค. 2025',
      review: 'ประสบการณ์ที่ยอดเยี่ยม! ได้เรียนรู้วัฒนธรรมผู้ไทยแท้จริง คนท้องถิ่นน่ารักและอาหารอร่อยมาก',
      likes: 24,
      photos: 8,
      itinerary: 'เส้นทางวัฒนธรรมผู้ไทย 1 วัน'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      location: 'Australia',
      rating: 5,
      date: '10 ม.ค. 2025',
      review: 'Amazing authentic cultural experience! The local guides were knowledgeable and the traditional food was incredible. Highly recommend the weaving workshop.',
      likes: 18,
      photos: 12,
      itinerary: '3 Days Cultural Immersion'
    },
    {
      id: 3,
      name: 'มนัส ใจดี',
      location: 'เชียงใหม่',
      rating: 4,
      date: '5 ม.ค. 2025',
      review: 'เทศกาลบุญบั้งไฟสุดประทับใจ การแข่งขันสนุกมาก และได้เห็นภูมิปัญญาท้องถิ่นที่หาดูได้ยาก',
      likes: 31,
      photos: 15,
      itinerary: 'เทศกาลบุญบั้งไฟ 3 วัน 2 คืน'
    }
  ] : [
    {
      id: 1,
      name: 'Somchai Apichat',
      location: 'Bangkok',
      rating: 5,
      date: 'Jan 15, 2025',
      review: 'Excellent experience! Learned authentic Phu Thai culture. Local people are lovely and food is delicious',
      likes: 24,
      photos: 8,
      itinerary: 'Phu Thai Culture Trail - 1 Day'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      location: 'Australia',
      rating: 5,
      date: 'Jan 10, 2025',
      review: 'Amazing authentic cultural experience! The local guides were knowledgeable and the traditional food was incredible. Highly recommend the weaving workshop.',
      likes: 18,
      photos: 12,
      itinerary: '3 Days Cultural Immersion'
    },
    {
      id: 3,
      name: 'Manas Jaidee',
      location: 'Chiang Mai',
      rating: 4,
      date: 'Jan 5, 2025',
      review: 'Impressed by the Rocket Festival. The competition was fun and got to see rare local wisdom',
      likes: 31,
      photos: 15,
      itinerary: 'Rocket Festival 3 Days 2 Nights'
    }
  ];

  return (
    <>
      <SEO
        title={language === 'th' ? 'สำรวจวังสามหมอ - แผนที่ คู่มือ และประสบการณ์วัฒนธรรมผู้ไทย | ที่นี่ วังสามหมอ' : 'Explore Wang Sam Mo - Maps, Guides & Phu Thai Cultural Experiences | Tourderwang'}
        description={language === 'th' ? 'วางแผนการเดินทางทางวัฒนธรรมของคุณผ่านประสบการณ์ผู้ไทยที่แท้จริง ด้วยแผนที่แบบโต้ตอบ คู่มือการเดินทาง และรีวิวจากผู้เยี่ยมชม' : 'Plan your cultural journey through authentic Phu Thai experiences with interactive maps, travel guides, and visitor reviews in Wang Sam Mo district.'}
        keywords={language === 'th' ? 'สำรวจวังสามหมอ, คู่มือการเดินทาง, แผนที่วัฒนธรรม, กำหนดการเดินทาง, รีวิวการท่องเที่ยว, ประสบการณ์ผู้ไทย' : 'explore Wang Sam Mo, travel guide, cultural map, itineraries, travel reviews, Phu Thai experiences'}
      />

      <main className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Language Toggle */}
              <div className="flex justify-center mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-lg">
                  <button
                    onClick={() => setLanguage('th')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      language === 'th' 
                        ? 'bg-purple-600 text-white shadow-lg' 
                        : 'text-gray-600 hover:text-purple-600'
                    }`}
                  >
                    ไทย
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      language === 'en' 
                        ? 'bg-purple-600 text-white shadow-lg' 
                        : 'text-gray-600 hover:text-purple-600'
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

              {/* Quick Navigation */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 max-w-6xl mx-auto mb-16">
                {exploreCategories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <div
                      key={category.id}
                      className="group cursor-pointer"
                    >
                      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                        <div className={`inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 rounded-2xl bg-gradient-to-r ${category.color} mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
                        </div>
                        <h3 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-purple-700 transition-colors duration-300 mobile-text-optimize">
                          {content.sections[category.id as keyof typeof content.sections].title}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Itineraries */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 mobile-text-optimize">
                {language === 'th' ? 'กำหนดการเดินทางแนะนำ' : 'Featured Itineraries'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mobile-text-optimize">
                {language === 'th' 
                  ? 'เส้นทางการเดินทางที่คัดสรรโดยผู้เชี่ยวชาญและได้รับการยืนยันจากนักท่องเที่ยว'
                  : 'Carefully curated travel routes by experts and verified by travelers'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {featuredItineraries.map((itinerary) => (
                <div
                  key={itinerary.id}
                  className="bg-gradient-to-br from-white to-purple-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100"
                >
                  {/* Itinerary Image */}
                  <div className="relative h-48 sm:h-56">
                    <img
                      src={itinerary.image}
                      alt={itinerary.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Duration Badge */}
                    <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {itinerary.duration}
                    </div>

                    {/* Rating */}
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                      {itinerary.rating} ({itinerary.reviews})
                    </div>
                  </div>

                  {/* Itinerary Info */}
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 mobile-text-optimize">
                      {itinerary.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed mobile-text-optimize">
                      {itinerary.description}
                    </p>

                    {/* Quick Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {itinerary.stops} {language === 'th' ? 'จุดหมาย' : 'stops'}
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {itinerary.difficulty}
                      </div>
                      <div className="text-purple-600 font-semibold">
                        {itinerary.price}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {itinerary.highlights.slice(0, 3).map((highlight, index) => (
                        <span
                          key={index}
                          className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                      {itinerary.highlights.length > 3 && (
                        <span className="text-purple-600 text-xs font-medium">
                          +{itinerary.highlights.length - 3} {language === 'th' ? 'เพิ่มเติม' : 'more'}
                        </span>
                      )}
                    </div>

                    {/* Action Button */}
                    <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-6 rounded-2xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 touch-target flex items-center justify-center space-x-2">
                      <span>{language === 'th' ? 'ดูรายละเอียด' : 'View Details'}</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seasonal Highlights */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 mobile-text-optimize">
                {language === 'th' ? 'ไฮไลท์ตามฤดูกาล' : 'Seasonal Highlights'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mobile-text-optimize">
                {language === 'th' 
                  ? 'ค้นพบช่วงเวลาที่ดีที่สุดในการเยือนสำหรับกิจกรรมและเทศกาลที่แตกต่างกัน'
                  : 'Discover the best times to visit for different activities and festivals'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {seasonalHighlights.map((season, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">
                      {index === 0 ? '🌸' : index === 1 ? '🌾' : '❄️'}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 mobile-text-optimize">
                      {season.title}
                    </h3>
                    <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
                      {season.season}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed mobile-text-optimize">
                    {season.description}
                  </p>

                  {/* Events */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 mobile-text-optimize">
                      {language === 'th' ? 'กิจกรรมเด่น:' : 'Featured Events:'}
                    </h4>
                    <ul className="space-y-2">
                      {season.events.map((event, eventIndex) => (
                        <li key={eventIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                          <span className="mobile-text-optimize">{event}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Weather & Tips */}
                  <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>{language === 'th' ? 'สภาพอากาศ:' : 'Weather:'}</strong> {season.weather}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>{language === 'th' ? 'คำแนะนำ:' : 'Tips:'}</strong> {season.tips}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-2xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 touch-target">
                    {language === 'th' ? 'วางแผนเดินทาง' : 'Plan Trip'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visitor Reviews */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 mobile-text-optimize">
                {language === 'th' ? 'รีวิวจากผู้เยี่ยมชม' : 'Visitor Reviews'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mobile-text-optimize">
                {language === 'th' 
                  ? 'ประสบการณ์จริงและคำแนะนำจากนักเดินทางที่ได้สำรวจชุมชนของเรา'
                  : 'Real experiences and recommendations from travelers who explored our community'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visitorReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  {/* Reviewer Info */}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center text-white text-lg font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-semibold text-gray-900 mobile-text-optimize">{review.name}</h4>
                      <p className="text-sm text-gray-500 mobile-text-optimize">{review.location}</p>
                    </div>
                    <div className="text-sm text-gray-500">
                      {review.date}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < review.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 mb-4 leading-relaxed mobile-text-optimize">
                    {review.review}
                  </p>

                  {/* Itinerary */}
                  <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
                    {review.itinerary}
                  </div>

                  {/* Engagement */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 mr-1" />
                        {review.likes}
                      </div>
                      <div className="flex items-center">
                        <Camera className="h-4 w-4 mr-1" />
                        {review.photos}
                      </div>
                    </div>
                    <button className="text-purple-600 hover:text-purple-700 font-medium">
                      {language === 'th' ? 'อ่านเพิ่ม' : 'Read More'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-purple-700 transition-all duration-300 touch-target">
                {language === 'th' ? 'ดูรีวิวทั้งหมด' : 'View All Reviews'}
              </button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 sm:py-24 bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 mobile-text-optimize">
              {language === 'th' ? 'เริ่มต้นการผจญภัยของคุณ' : 'Start Your Adventure'}
            </h2>
            <p className="text-xl text-white/90 mb-8 mobile-text-optimize">
              {language === 'th' 
                ? 'วางแผนการเดินทางที่สมบูรณ์แบบด้วยเครื่องมือและคำแนะนำจากเรา'
                : 'Plan your perfect trip with our tools and recommendations'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105 touch-target">
                {language === 'th' ? 'สร้างแผนการเดินทาง' : 'Create Itinerary'}
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-2xl font-semibold hover:bg-white/30 transition-all duration-300 touch-target">
                {language === 'th' ? 'ดาวน์โหลดแผนที่' : 'Download Map'}
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ExplorePage;