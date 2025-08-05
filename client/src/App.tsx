import React, { useState } from 'react';
import { Route, Switch } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import SEO from './components/SEO';
import CulturePage from './pages/CulturePage';
import CommunityPage from './pages/CommunityPage';
import BusinessPage from './pages/BusinessPage';
import ExplorePage from './pages/ExplorePage';

const queryClient = new QueryClient();

function HomePage() {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'th'>('en');
  const [userType, setUserType] = useState<'tourist' | 'local' | 'researcher' | 'business'>('tourist');

  const handleLanguageChange = (language: 'en' | 'th') => {
    setCurrentLanguage(language);
    document.documentElement.lang = language === 'th' ? 'th' : 'en';
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <Navigation 
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
      />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/culture" component={CulturePage} />
            <Route path="/community" component={CommunityPage} />
            <Route path="/business" component={BusinessPage} />
            <Route path="/explore" component={ExplorePage} />
            <Route>
              <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-red-50">
                <div className="text-center max-w-md mx-auto px-4">
                  <div className="bg-white rounded-3xl p-8 shadow-2xl">
                    <div className="text-6xl mb-4">🏗️</div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mobile-text-optimize">
                      หน้านี้กำลังสร้าง
                    </h1>
                    <p className="text-gray-600 mb-6 mobile-text-optimize">
                      เรากำลังพัฒนาหน้านี้ให้สมบูรณ์ โปรดกลับมาใหม่อีกครั้ง
                    </p>
                    <p className="text-sm text-gray-500 mb-6">
                      This page is under construction. Please come back later.
                    </p>
                    <button 
                      onClick={() => window.location.href = '/'}
                      className="bg-gradient-to-r from-amber-600 to-red-600 text-white px-6 py-3 rounded-2xl font-semibold hover:from-amber-700 hover:to-red-700 transition-all duration-300 touch-target"
                    >
                      กลับหน้าแรก / Go Home
                    </button>
                  </div>
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;