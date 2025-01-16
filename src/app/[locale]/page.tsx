// import FeatureProject from '@/components/HomePageComponents/FeatureProject';
import About from '@/components/HomePageComponents/About';
import GallerySection from '@/components/HomePageComponents/GallerySection';
import Hero from '@/components/HomePageComponents/Hero';
import Progress from '@/components/HomePageComponents/Progress';
import { Review } from '@/components/HomePageComponents/Review';
import Services from '@/components/HomePageComponents/Services';
import WhoWeAre from '@/components/HomePageComponents/WhoWeAre';
import WhyChooseUs from '@/components/HomePageComponents/WhyChooseUs';

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <WhoWeAre/>
      <WhyChooseUs/>
      <Progress/>
      <Services/>
      <Review/>
      <GallerySection/>
      {/* <FeatureProject/> */}
     
    </div>
  );
};

export default HomePage;