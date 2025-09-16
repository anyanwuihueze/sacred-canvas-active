import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import GallerySection from '@/components/GallerySection';
import CreativeHubSection from '@/components/EventsSection';
import AboutSection from '@/components/AboutSection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <HeroSection />
        <GallerySection />
        <CreativeHubSection />
        <AboutSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
