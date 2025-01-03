import FeatureProject from '@/components/HomePageComponents/FeatureProject';
import GallerySection from '@/components/HomePageComponents/GallerySection';
import Hero from '@/components/HomePageComponents/Hero';
import Progress from '@/components/HomePageComponents/Progress';
import { Review } from '@/components/HomePageComponents/Review';
import Services from '@/components/HomePageComponents/Services';
import WhoWeAre from '@/components/HomePageComponents/WhoWeAre';
import WhyChooseUs from '@/components/HomePageComponents/WhyChooseUs';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <WhyChooseUs/>
      <WhoWeAre/>
      <Progress/>
      <Services/>
      <GallerySection/>
      <FeatureProject/>
      <Review/>
     
    </div>
  );
};

export default HomePage;