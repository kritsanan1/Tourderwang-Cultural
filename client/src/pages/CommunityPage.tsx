import React, { useState } from 'react';
import { Users, Briefcase, Calendar, MessageSquare, Heart, Newspaper, ArrowRight, Clock, MapPin, Star, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO';
import { siteContent } from '../../../shared/content';

const CommunityPage: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'th'>('th');
  const content = siteContent.community[language];

  const communityStats = {
    th: {
      members: '5,000+ สมาชิก',
      jobs: '200+ ตำแหน่งงาน',
      events: '50+ กิจกรรมต่อปี',
      volunteers: '300+ อาสาสมัคร'
    },
    en: {
      members: '5,000+ Members',
      jobs: '200+ Job Positions',
      events: '50+ Events per Year',
      volunteers: '300+ Volunteers'
    }
  };

  const recentJobs = language === 'th' ? [
    {
      title: 'ไกด์นำเที่ยวท้องถิ่น',
      company: 'บริษัท วังสามหมอ ทัวร์',
      location: 'อำเภอวังสามหมอ',
      salary: '15,000-25,000 บาท',
      type: 'งานประจำ',
      posted: '2 วัน',
      featured: true
    },
    {
      title: 'ช่างทอผ้าดั้งเดิม',
      company: 'ศูนย์หัตถกรรมผู้ไทย',
      location: 'ตำบลวังสามหมอ',
      salary: '12,000-20,000 บาท',
      type: 'งานประจำ',
      posted: '5 วัน',
      featured: false
    },
    {
      title: 'พนักงานต้อนรับโฮมสเตย์',
      company: 'โฮมสเตย์บ้านไผ่',
      location: 'หมู่ 3 วังสามหมอ',
      salary: '10,000-15,000 บาท',
      type: 'งานประจำ',
      posted: '1 สัปดาห์',
      featured: false
    }
  ] : [
    {
      title: 'Local Tour Guide',
      company: 'Wang Sam Mo Tours Co.',
      location: 'Wang Sam Mo District',
      salary: '15,000-25,000 THB',
      type: 'Full-time',
      posted: '2 days',
      featured: true
    },
    {
      title: 'Traditional Weaving Artisan',
      company: 'Phu Thai Handicraft Center',
      location: 'Wang Sam Mo Subdistrict',
      salary: '12,000-20,000 THB',
      type: 'Full-time',
      posted: '5 days',
      featured: false
    },
    {
      title: 'Homestay Reception Staff',
      company: 'Baan Pai Homestay',
      location: 'Moo 3, Wang Sam Mo',
      salary: '10,000-15,000 THB',
      type: 'Full-time',
      posted: '1 week',
      featured: false
    }
  ];

  const upcomingEvents = language === 'th' ? [
    {
      title: 'เทศกาลบุญบั้งไฟวังสามหมอ',
      date: '15-17 มีนาคม 2025',
      time: '09:00-22:00 น.',
      location: 'สนามกีฬาอำเภอวังสามหมอ',
      category: 'เทศกาล',
      attendees: 2500,
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'การประชุมเชิงปฏิบัติการการทอผ้า',
      date: '25 มีนาคม 2025',
      time: '13:00-17:00 น.',
      location: 'ศูนย์วัฒนธรรมผู้ไทย',
      category: 'การฝึกอบรม',
      attendees: 50,
      image: 'https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'ตลาดนัดวัฒนธรรมท้องถิ่น',
      date: 'ทุกวันเสาร์',
      time: '16:00-21:00 น.',
      location: 'ลานวัดป่าดงพญาเย็น',
      category: 'ตลาด',
      attendees: 800,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ] : [
    {
      title: 'Wang Sam Mo Rocket Festival',
      date: 'March 15-17, 2025',
      time: '09:00-22:00',
      location: 'Wang Sam Mo District Stadium',
      category: 'Festival',
      attendees: 2500,
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Traditional Weaving Workshop',
      date: 'March 25, 2025',
      time: '13:00-17:00',
      location: 'Phu Thai Cultural Center',
      category: 'Training',
      attendees: 50,
      image: 'https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Local Cultural Market',
      date: 'Every Saturday',
      time: '16:00-21:00',
      location: 'Wat Pa Dong Phaya Yen Courtyard',
      category: 'Market',
      attendees: 800,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const forumTopics = language === 'th' ? [
    {
      title: 'แนะนำสถานที่ท่องเที่ยวซ่อนเร้นในวังสามหมอ',
      author: 'นายสมชาย ใจดี',
      replies: 23,
      views: 156,
      category: 'ท่องเที่ยว',
      lastActive: '2 ชม.',
      isHot: true
    },
    {
      title: 'หาคนร่วมงานโครงการอนุรักษ์ภาษาผู้ไทย',
      author: 'ครูสุดา วงศ์ทอง',
      replies: 12,
      views: 89,
      category: 'โครงการ',
      lastActive: '4 ชม.',
      isHot: false
    },
    {
      title: 'ขายผ้าทอมือแท้ 100% จากหมู่บ้าน',
      author: 'ยายมาลี จันทร์เพ็ญ',
      replies: 8,
      views: 67,
      category: 'ซื้อขาย',
      lastActive: '1 วัน',
      isHot: false
    }
  ] : [
    {
      title: 'Hidden Tourist Spots in Wang Sam Mo Recommendations',
      author: 'Mr. Somchai Jaidee',
      replies: 23,
      views: 156,
      category: 'Tourism',
      lastActive: '2 hrs',
      isHot: true
    },
    {
      title: 'Looking for Partners in Phu Thai Language Preservation Project',
      author: 'Teacher Suda Wongthong',
      replies: 12,
      views: 89,
      category: 'Projects',
      lastActive: '4 hrs',
      isHot: false
    },
    {
      title: 'Selling 100% Authentic Handwoven Textiles from Village',
      author: 'Grandmother Mali Chanpen',
      replies: 8,
      views: 67,
      category: 'Marketplace',
      lastActive: '1 day',
      isHot: false
    }
  ];

  return (
    <>
      <SEO
        title={language === 'th' ? 'ศูนย์กลางชุมชนวังสามหมอ - งาน กิจกรรม และชุมชนผู้ไทย | ที่นี่ วังสามหมอ' : 'Wang Sam Mo Community Hub - Jobs, Events & Phu Thai Community | Tourderwang'}
        description={language === 'th' ? 'เชื่อมต่อกับชุมชนผู้ไทยในวังสามหมอ ค้นหางานท้องถิ่น เข้าร่วมกิจกรรม และมีส่วนร่วมในการอนุรักษ์วัฒนธรรม' : 'Connect with the Phu Thai community in Wang Sam Mo. Find local jobs, join events, and participate in cultural preservation activities.'}
        keywords={language === 'th' ? 'ชุมชนวังสามหมอ, งานท้องถิ่น, กิจกรรมชุมชน, ผู้ไทย, อาสาสมัคร, การอนุรักษ์วัฒนธรรม' : 'Wang Sam Mo community, local jobs, community events, Phu Thai, volunteers, cultural preservation'}
      />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Language Toggle */}
              <div className="flex justify-center mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-lg">
                  <button
                    onClick={() => setLanguage('th')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      language === 'th' 
                        ? 'bg-blue-600 text-white shadow-lg' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    ไทย
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      language === 'en' 
                        ? 'bg-blue-600 text-white shadow-lg' 
                        : 'text-gray-600 hover:text-blue-600'
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

              {/* Community Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-16">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">{communityStats[language].members.split(' ')[0]}</div>
                  <div className="text-sm text-gray-600 mobile-text-optimize">{communityStats[language].members.split(' ').slice(1).join(' ')}</div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg">
                  <Briefcase className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">{communityStats[language].jobs.split(' ')[0]}</div>
                  <div className="text-sm text-gray-600 mobile-text-optimize">{communityStats[language].jobs.split(' ').slice(1).join(' ')}</div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg">
                  <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">{communityStats[language].events.split(' ')[0]}</div>
                  <div className="text-sm text-gray-600 mobile-text-optimize">{communityStats[language].events.split(' ').slice(1).join(' ')}</div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg">
                  <Heart className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">{communityStats[language].volunteers.split(' ')[0]}</div>
                  <div className="text-sm text-gray-600 mobile-text-optimize">{communityStats[language].volunteers.split(' ').slice(1).join(' ')}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Jobs Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 mobile-text-optimize">
                  {language === 'th' ? 'งานล่าสุด' : 'Recent Jobs'}
                </h2>
                <p className="text-lg text-gray-600 mobile-text-optimize">
                  {language === 'th' ? 'โอกาสการทำงานใหม่ในชุมชน' : 'New job opportunities in the community'}
                </p>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition-all duration-300 touch-target hidden sm:flex items-center space-x-2">
                <span>{language === 'th' ? 'ดูทั้งหมด' : 'View All'}</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="grid gap-6">
              {recentJobs.map((job, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r ${job.featured ? 'from-blue-50 to-indigo-50 border-2 border-blue-200' : 'from-gray-50 to-white border border-gray-200'} rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        {job.featured && (
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium mr-3">
                            {language === 'th' ? 'แนะนำ' : 'Featured'}
                          </span>
                        )}
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                          {job.type}
                        </span>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 mobile-text-optimize">
                        {job.title}
                      </h3>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 space-y-1 sm:space-y-0 sm:space-x-6 mb-4">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          <span className="mobile-text-optimize">{job.company}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span className="mobile-text-optimize">{job.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          <span className="mobile-text-optimize">{job.posted} {language === 'th' ? 'ที่แล้ว' : 'ago'}</span>
                        </div>
                      </div>
                      
                      <div className="text-lg font-semibold text-green-600">
                        {job.salary}
                      </div>
                    </div>
                    
                    <div className="mt-4 sm:mt-0 sm:ml-6">
                      <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition-all duration-300 touch-target">
                        {language === 'th' ? 'สมัครงาน' : 'Apply Now'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 sm:hidden">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition-all duration-300 touch-target flex items-center space-x-2 mx-auto">
                <span>{language === 'th' ? 'ดูงานทั้งหมด' : 'View All Jobs'}</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 mobile-text-optimize">
                {language === 'th' ? 'กิจกรรมที่จะมาถึง' : 'Upcoming Events'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mobile-text-optimize">
                {language === 'th' 
                  ? 'เข้าร่วมงานเทศกาล การฝึกอบรม และกิจกรรมชุมชนที่น่าสนใจ'
                  : 'Join festivals, workshops, and exciting community activities'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="relative h-48">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-purple-700">
                      {event.category}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {event.attendees}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 mobile-text-optimize">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 text-gray-600 mb-6">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-3 text-purple-600" />
                        <span className="mobile-text-optimize">{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-3 text-purple-600" />
                        <span className="mobile-text-optimize">{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-3 text-purple-600" />
                        <span className="mobile-text-optimize">{event.location}</span>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 touch-target">
                      {language === 'th' ? 'ลงทะเบียน' : 'Register'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Forum Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 mobile-text-optimize">
                {language === 'th' ? 'กระดานสนทนาชุมชน' : 'Community Forum'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mobile-text-optimize">
                {language === 'th' 
                  ? 'แบ่งปันประสบการณ์ ถามคำถาม และเชื่อมต่อกับสมาชิกในชุมชน'
                  : 'Share experiences, ask questions, and connect with community members'
                }
              </p>
            </div>

            <div className="space-y-6">
              {forumTopics.map((topic, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        {topic.isHot && (
                          <div className="flex items-center bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium mr-3">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            {language === 'th' ? 'ฮอต' : 'Hot'}
                          </div>
                        )}
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                          {topic.category}
                        </span>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer mobile-text-optimize">
                        {topic.title}
                      </h3>
                      
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <span>{language === 'th' ? 'โดย' : 'by'} {topic.author}</span>
                        <span>{topic.replies} {language === 'th' ? 'ตอบกลับ' : 'replies'}</span>
                        <span>{topic.views} {language === 'th' ? 'ดู' : 'views'}</span>
                        <span>{language === 'th' ? 'ครั้งล่าสุด' : 'last active'} {topic.lastActive}</span>
                      </div>
                    </div>
                    
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1 ml-4">
                      <span>{language === 'th' ? 'อ่าน' : 'Read'}</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-all duration-300 touch-target">
                {language === 'th' ? 'เข้าสู่กระดานสนทนา' : 'Enter Forum'}
              </button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 mobile-text-optimize">
              {language === 'th' ? 'เข้าร่วมชุมชนของเรา' : 'Join Our Community'}
            </h2>
            <p className="text-xl text-white/90 mb-8 mobile-text-optimize">
              {language === 'th' 
                ? 'เป็นส่วนหนึ่งของชุมชนผู้ไทยที่มีชีวิตชีวาและช่วยกันสร้างอนาคตที่ดีกว่า'
                : 'Be part of the vibrant Phu Thai community and help build a better future together'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105 touch-target">
                {language === 'th' ? 'สมัครสมาชิก' : 'Sign Up'}
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

export default CommunityPage;