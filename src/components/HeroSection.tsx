"use client";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="home" className="sacred-section relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/56c0cb77-547b-48c5-a487-d0c7844b0caf.png" 
          alt="Sacred Portrait" 
          className="object-cover opacity-90 animate-ken-burns w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>
      
      <div className="sacred-container relative z-10">
        <div className="space-y-8 animate-fade-in-stagger">
          <div className="space-y-6" style={{ '--delay': 1 } as React.CSSProperties}>
            <h1 className="sacred-title leading-tight">
              Where Souls
              <span className="block text-primary font-garamond italic">
                Speak in Color
              </span>
            </h1>
            
            <p className="sacred-subtitle max-w-lg">
              Step into a sanctuary of vibrant African art where every brushstroke carries the depth of human emotion and connects you with your higher self. This is not just a gallery—it is a prayer. Not just paintings, but a living sanctuary of expressionist art, sacred art paintings, and art for the soul.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4" style={{ '--delay': 2 } as React.CSSProperties}>
            <Button asChild variant="default" size="lg" className="btn-sacred relative z-10">
              <Link to="/gallery">
                <span className="relative z-10">Explore African Art Collection</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="btn-voice">
              <a href="#events">
                Join Art-On-Fabric Classes
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
