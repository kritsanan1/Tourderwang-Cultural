import React, { useState } from 'react';
import { BookOpen, Calendar, Utensils, Palette, Languages, MapPin, ArrowRight, Clock, Users, Star } from 'lucide-react';
import SEO from '../components/SEO';
import { siteContent } from '../../../shared/content';

const CulturePage: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'th'>('th');
  const content = siteContent.culture[language];

  const culturalSections = [
    {
      id: 'history',
      icon: BookOpen,
      color: 'from-amber-500 to-orange-500',
      image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: language === 'th' ? ['การอพยพของชาวผู้ไทย', 'วิวัฒนาการทางสังคม', 'มิรดกทางประวัติศาสตร์'] : ['Phu Thai Migration', 'Social Evolution', 'Historical Heritage']
    },
    {
      id: 'festivals',
      icon: Calendar,
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: language === 'th' ? ['เทศกาลบุญบั้งไฟ', 'พิธีกรรมทางศาสนา', 'การเฉลิมฉลองชุมชน'] : ['Rocket Festival', 'Religious Ceremonies', 'Community Celebrations']
    },
    {
      id: 'cuisine',
      icon: Utensils,
      color: 'from-green-500 to-emerald-500',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: language === 'th' ? ['ส้มตำผู้ไทย', 'ข้าวเหนียวหมู', 'อาหารพื้นบ้าน'] : ['Phu Thai Som Tam', 'Sticky Rice Pork', 'Traditional Foods']
    },
    {
      id: 'arts',
      icon: Palette,
      color: 'from-blue-500 to-indigo-500',
      image: 'https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: language === 'th' ? ['ผ้าทอมือ', 'ดนตรีพื้นบ้าน', 'งานฝีมือดั้งเดิม'] : ['Handwoven Textiles', 'Folk Music', 'Traditional Crafts']
    },
    {
      id: 'language',
      icon: Languages,
      color: 'from-red-500 to-rose-500',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: language === 'th' ? ['สำเนียงผู้ไทย', 'การอนุรักษ์ภาษา', 'วรรณกรรมพื้นบ้าน'] : ['Phu Thai Dialect', 'Language Preservation', 'Folk Literature']
    },
    {
      id: 'sites',
      icon: MapPin,
      color: 'from-teal-500 to-cyan-500',
      image: 'https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: language === 'th' ? ['วัดโบราณ', 'สถานที่ศักดิ์สิทธิ์', 'พิพิธภัณฑ์ท้องถิ่น'] : ['Ancient Temples', 'Sacred Sites', 'Local Museums']
    }
  ];

  const featuredStories = language === 'th' ? [
    {
      title: 'เรื่องเล่าจากผู้สูงอายุ: ชีวิตในอดีตของชาวผู้ไทย',
      excerpt: 'ฟังเรื่องราวจากปู่ย่าตายายเกี่ยวกับชีวิตความเป็นอยู่และประเพณีที่สืบทอดมา',
      author: 'นายสมชาย ใจดี',
      readTime: '8 นาที',
      category: 'เรื่องเล่า'
    },
    {
      title: 'การทอผ้าแพรวา: ศิลปะที่กำลังจะสูญหาย',
      excerpt: 'ค้นพบเทคนิคการทอผ้าดั้งเดิมที่มีเพียงไม่กี่คนที่ยังรู้วิธีการทำ',
      author: 'ยายมาลี จันทร์เพ็ญ',
      readTime: '12 นาที',
      category: 'งานฝีมือ'
    },
    {
      title: 'อาหารพื้นบ้านผู้ไทยที่หาทานยาก',
      excerpt: 'รวมสูตรอาหารโบราณที่กำลังจะสูญหายและเคล็ดลับการทำที่ถ่ายทอดจากรุ่นสู่รุ่น',
      author: 'แม่นิด สายใจ',
      readTime: '15 นาที',
      category: 'อาหาร'
    }
  ] : [
    {
      title: 'Elder Stories: Life in Old Times of Phu Thai People',
      excerpt: 'Listen to stories from grandparents about traditional life and customs passed down through generations',
      author: 'Mr. Somchai Jaidee',
      readTime: '8 min read',
      category: 'Stories'
    },
    {
      title: 'Silk Weaving: A Disappearing Art',
      excerpt: 'Discover traditional weaving techniques known by only a few remaining artisans',
      author: 'Grandmother Mali Chanpen',
      readTime: '12 min read',
      category: 'Crafts'
    },
    {
      title: 'Rare Phu Thai Traditional Foods',
      excerpt: 'Collection of ancient recipes and cooking secrets passed down through generations',
      author: 'Mae Nid Saijai',
      readTime: '15 min read',
      category: 'Food'
    }
  ];

  return (
    <>
      <SEO
        title={language === 'th' ? 'มิรดกวัฒนธรรมผู้ไทย - ประเพณี ศิลปะ และภูมิปัญญาท้องถิ่น | ที่นี่ วังสามหมอ' : 'Phu Thai Cultural Heritage - Traditional Arts, History & Festivals | Wang Sam Mo'}
        description={language === 'th' ? 'ค้นพบมิรดกวัฒนธรรมผู้ไทยแท้ในวังสามหมอ สำรวจศิลปะดั้งเดิม สถานที่ทางประวัติศาสตร์ เทศกาล อาหาร และความพยายามในการอนุรักษ์ภาษาในจังหวัดอุดรธานี' : 'Discover authentic Phu Thai cultural heritage in Wang Sam Mo. Explore traditional arts, historical sites, festivals, cuisine, and language preservation efforts in Udon Thani province.'}
        keywords={language === 'th' ? 'วัฒนธรรมผู้ไทย, ศิลปะดั้งเดิม, มิรดกไทย, ประวัติศาสตร์วังสามหมอ, เทศกาลวัฒนธรรม, อาหารดั้งเดิม, วัฒนธรรมอุดรธานี' : 'Phu Thai culture, traditional arts, Thai heritage, Wang Sam Mo history, cultural festivals, traditional cuisine, Udon Thani culture'}
      />
      
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-red-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Language Toggle */}
              <div className="flex justify-center mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-lg">
                  <button
                    onClick={() => setLanguage('th')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      language === 'th' 
                        ? 'bg-amber-600 text-white shadow-lg' 
                        : 'text-gray-600 hover:text-amber-600'
                    }`}
                  >
                    ไทย
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      language === 'en' 
                        ? 'bg-amber-600 text-white shadow-lg' 
                        : 'text-gray-600 hover:text-amber-600'
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

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-16">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-2">500+</div>
                  <div className="text-sm sm:text-base text-gray-600 mobile-text-optimize">
                    {language === 'th' ? 'ปีของประวัติศาสตร์' : 'Years of History'}
                  </div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">50+</div>
                  <div className="text-sm sm:text-base text-gray-600 mobile-text-optimize">
                    {language === 'th' ? 'สถานที่ทางวัฒนธรรม' : 'Cultural Sites'}
                  </div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-red-600 mb-2">20+</div>
                  <div className="text-sm sm:text-base text-gray-600 mobile-text-optimize">
                    {language === 'th' ? 'เทศกาลประจำปี' : 'Annual Festivals'}
                  </div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">100+</div>
                  <div className="text-sm sm:text-base text-gray-600 mobile-text-optimize">
                    {language === 'th' ? 'ประเพณีท้องถิ่น' : 'Local Traditions'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cultural Sections Grid */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {culturalSections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <div
                    key={section.id}
                    className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  >
                    {/* Background Image */}
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <img
                        src={section.image}
                        alt={content.sections[section.id as keyof typeof content.sections].title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      
                      {/* Icon */}
                      <div className={`absolute top-4 left-4 p-3 rounded-2xl bg-gradient-to-r ${section.color} shadow-lg`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors duration-300 mobile-text-optimize">
                        {content.sections[section.id as keyof typeof content.sections].title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed mobile-text-optimize">
                        {content.sections[section.id as keyof typeof content.sections].description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 mb-6">
                        {section.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-500">
                            <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                            {highlight}
                          </div>
                        ))}
                      </div>

                      {/* Action Button */}
                      <button className="w-full bg-gradient-to-r from-amber-600 to-red-600 text-white py-3 px-6 rounded-2xl font-semibold hover:from-amber-700 hover:to-red-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 touch-target">
                        <span>{language === 'th' ? 'เรียนรู้เพิ่มเติม' : 'Learn More'}</span>
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Stories Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 mobile-text-optimize">
                {language === 'th' ? 'เรื่องเล่าจากชุมชน' : 'Stories from the Community'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mobile-text-optimize">
                {language === 'th' 
                  ? 'ฟังเรื่องราวจริงจากผู้คนในชุมชนที่เล่าถึงวัฒนธรรม ประเพณี และภูมิปัญญาท้องถิ่น'
                  : 'Listen to real stories from community members about culture, traditions, and local wisdom'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredStories.map((story, index) => (
                <article
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                      {story.category}
                    </div>
                    <div className="ml-auto flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {story.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 mobile-text-optimize">
                    {story.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3 mobile-text-optimize">
                    {story.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {story.author.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">{story.author}</div>
                      </div>
                    </div>
                    
                    <button className="text-amber-600 hover:text-amber-700 font-semibold text-sm flex items-center space-x-1 group">
                      <span>{language === 'th' ? 'อ่านต่อ' : 'Read More'}</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 sm:py-24 bg-gradient-to-r from-amber-600 to-red-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 mobile-text-optimize">
              {language === 'th' ? 'เข้าร่วมการอนุรักษ์วัฒนธรรม' : 'Join Cultural Preservation'}
            </h2>
            <p className="text-xl text-white/90 mb-8 mobile-text-optimize">
              {language === 'th' 
                ? 'ช่วยเราอนุรักษ์และสืบทอดวัฒนธรรมผู้ไทยให้คงอยู่สำหรับลูกหลาน'
                : 'Help us preserve and pass on Phu Thai culture for future generations'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105 touch-target">
                {language === 'th' ? 'เป็นอาสาสมัคร' : 'Become a Volunteer'}
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-2xl font-semibold hover:bg-white/30 transition-all duration-300 touch-target">
                {language === 'th' ? 'บริจาคเรื่องราว' : 'Share Your Story'}
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CulturePage;