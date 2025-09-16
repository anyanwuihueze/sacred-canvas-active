"use client";
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';
import artworksData from '@/artworks.json';

const GalleryPage = () => {
  const [artworks] = useState(artworksData);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(artworks.map(art => art.category)))];

  const filteredArtworks = selectedCategory === 'All'
    ? artworks
    : artworks.filter(artwork => artwork.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="sacred-section bg-gradient-to-b from-background to-secondary/10 flex-grow">
        <div className="sacred-container">
          <div className="text-center space-y-6 mb-16">
            <h1 className="sacred-title">
              African Art
              <span className="block text-primary font-garamond italic">Collection</span>
            </h1>
            <p className="sacred-subtitle max-w-3xl mx-auto">
              Original African paintings for sale, wearable art clothing, and spiritual pieces that inspire healing and transformation.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="btn-sacred"
              >
                <span className="relative z-10">{category}</span>
              </Button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtworks.map((artwork) => (
              <Card key={artwork.id} className="artwork-card group">
                <div className="relative">
                  <img 
                    src={artwork.image} 
                    alt={artwork.title}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <Button variant="default" size="sm" className="w-full btn-sacred">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      <span className="relative z-10">Purchase Inquiry</span>
                    </Button>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-garamond text-2xl font-semibold text-foreground mb-2">
                      {artwork.title}
                    </h3>
                    <p className="text-primary italic font-medium">
                      {artwork.category}
                    </p>
                  </div>
                  
                  <p className="sacred-text text-sm leading-relaxed line-clamp-3">
                    "{artwork.story}"
                  </p>

                  <div className="pt-2">
                    <p className="text-2xl font-bold font-dm-sans text-primary">
                      ₦{new Intl.NumberFormat().format(artwork.price)}
                    </p>
                    <p className="text-sm text-muted-foreground">Nigerian Naira</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
