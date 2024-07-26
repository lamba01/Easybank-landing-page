import Navbar from '../components/Navbar';
import HeroSection from '../components/Hero';
import Features from '../components/Features';
import Articles from '@/components/Articles';
// import Testimonials from '../components/Testimonials';
// import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <main >
        <HeroSection />
        <Features />
        <Articles />
        <Footer />
        {/* <HeroSection />
        <Features />
        <Testimonials />
        <CallToAction /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
