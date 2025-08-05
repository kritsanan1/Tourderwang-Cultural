import React from 'react';
import { MapPin, Mail, Phone, Facebook, Instagram, Youtube, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-amber-600 to-red-600 p-2 rounded-xl">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">ที่นี่ วังสามหมอ</h3>
                <p className="text-sm text-gray-400">Tourderwang</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Connecting you with the rich Phu Thai culture and vibrant community of Wang Sam Mo district, Udon Thani province.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-amber-600 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-amber-600 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-amber-600 transition-colors duration-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Cultural Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-400">Cultural Heritage</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Phu Thai History</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Traditional Festivals</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Local Cuisine</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Arts & Crafts</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Cultural Sites</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Virtual Tours</a></li>
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-400">Community</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Job Portal</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Business Directory</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Local Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Community Forum</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Travel Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Reviews</a></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-400">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Wang Sam Mo District, Udon Thani, Thailand</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@tourderwang.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+66 42 XXX XXXX</span>
              </div>
            </div>

            <div className="mt-8">
              <h5 className="font-semibold mb-3 text-amber-400">Support</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Tourderwang. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for Wang Sam Mo community</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Promoting Phu Thai Culture</span>
              <span>•</span>
              <span>Supporting Local Community</span>
              <span>•</span>
              <span>Building Cultural Bridges</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;