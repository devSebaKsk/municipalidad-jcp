import React from 'react';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import Footer from './Footer';

function HomeView() {
  return (
    <div id="home-view">
      <HeroSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}

export default HomeView;
