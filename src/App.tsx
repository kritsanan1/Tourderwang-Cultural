import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import SEO from './components/SEO';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <SEO />
        <Header />
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