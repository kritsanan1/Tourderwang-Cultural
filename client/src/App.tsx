import React, { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import SEO from './components/SEO';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'th'>('en');
  const [userType, setUserType] = useState<'tourist' | 'local' | 'researcher' | 'business'>('tourist');

  const handleLanguageChange = (language: 'en' | 'th') => {
    setCurrentLanguage(language);
    // In a real app, you'd also update the document language and potentially reload content
    document.documentElement.lang = language === 'th' ? 'th' : 'en';
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <SEO />
        <Header 
          currentLanguage={currentLanguage}
          onLanguageChange={handleLanguageChange}
          userType={userType}
        />
        <main>
          <Hero />
          <Features />
          <Testimonials />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;