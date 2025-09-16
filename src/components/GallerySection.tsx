"use client";
import { useState, useEffect } from 'react';
import artworksData from '../artworks.json';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

type Artwork = {
  id: number;
  title: string;
  image: string;
  emotion: string;
  story: string;
  category: string;
};

export default function GallerySection() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  useEffect(() => {
    // Load the first 6 artworks for homepage preview
    setArtworks(artworksData.slice(0, 6) as Artwork[]);
  }, []);

  // Function to generate gradient backgrounds based on emotion
  const getGradientForEmotion = (emotion: string) => {
    const gradients: { [key: string]: string } = {
      'Elegant': 'from-purple-600 via-pink-600 to-rose-500',
      'Joyful': 'from-yellow-400 via-orange-500 to-red-500',
      'Confident': 'from-blue-600 via-purple-600 to-indigo-700',
      'Hopeful': 'from-green-400 via-blue-500 to-purple-600',
      'Vibrant': 'from-pink-500 via-red-500 to-yellow-500',
      'Intense': 'from-red-600 via-purple-600 to-pink-700',
      'Proud': 'from-amber-500 via-orange-600 to-red-600',
      'Mysterious': 'from-gray-600 via-purple-700 to-indigo-800',
      'Serene': 'from-blue-400 via-purple-500 to-pink-500'
    };
    
    return gradients[emotion] || 'from-purple-400 to-pink-400';
  };

  if (artworks.length === 0) {
    return (
      <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-foreground mb-4">Featured Gallery</h2>
          <p className="text-xl text-muted-foreground">Loading amazing artworks...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="sacred-title">Featured Gallery</h2>
          <p className="sacred-subtitle max-w-2xl mx-auto">
            Curated digital masterpieces that speak to the soul
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <div key={artwork.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-square mb-4 shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
                <img
                  src={artwork.image} 
                  alt={artwork.title}
                  className="w-full h-full object-cover"
                />
                
                <div className={`absolute inset-0 bg-gradient-to-br ${getGradientForEmotion(artwork.emotion)} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">{artwork.title}</h3>
                  <p className="text-sm opacity-90 mb-3 drop-shadow capitalize">{artwork.emotion}</p>
                  <div className="w-16 h-0.5 bg-white/60 mb-3"></div>
                  <p className="text-sm leading-relaxed drop-shadow">{artwork.story}</p>
                </div>

                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium">
                  {artwork.category}
                </div>

                <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium capitalize">
                  {artwork.emotion}
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  {artwork.title}
                </h3>
                <p className="text-muted-foreground capitalize text-sm">
                  {artwork.category} • {artwork.emotion}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {artwork.story}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="btn-sacred">
            <Link to="/gallery">
              <span className="relative z-10">View Full Gallery ({artworksData.length} Artworks)</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
