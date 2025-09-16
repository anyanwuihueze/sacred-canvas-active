"use client";
import { Mail, Phone, MapPin, Instagram, Facebook, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/10 border-t border-border py-16">
      <div className="sacred-container">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="font-playfair text-2xl font-bold text-primary">
              Sacred Canvas
            </div>
            <p className="sacred-text max-w-sm">
              Where souls speak in color, where art becomes prayer, 
              and where every portrait holds the sacred essence of humanity.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-space font-semibold text-foreground">Sacred Spaces</h3>
            <div className="space-y-3 text-muted-foreground">
              <div>Gallery Viewing</div>
              <div>Sacred Nights Events</div>
              <div>Commission Portraits</div>
              <div>Artist Conversations</div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-space font-semibold text-foreground">Connect</h3>
            <div className="space-y-4">
              {/* Email with Button */}
              <div className="flex items-center gap-3 group">
                <button 
                  onClick={() => window.open('mailto:contactcletuszadoc@gmail.com', '_blank')}
                  className="p-2 rounded-lg hover:bg-primary/10 transition-colors flex-shrink-0"
                  aria-label="Send email"
                >
                  <Mail className="w-4 h-4 text-primary" />
                </button>
                <span className="text-muted-foreground text-sm">contactcletuszadoc@gmail.com</span>
              </div>

              {/* Phone with Button */}
              <div className="flex items-center gap-3 group">
                <button 
                  onClick={() => window.open('tel:+2347036127047', '_blank')}
                  className="p-2 rounded-lg hover:bg-primary/10 transition-colors flex-shrink-0"
                  aria-label="Call phone"
                >
                  <Phone className="w-4 h-4 text-primary" />
                </button>
                <span className="text-muted-foreground text-sm">+234 703 612 7047</span>
              </div>

              {/* WhatsApp with Button */}
              <div className="flex items-center gap-3 group">
                <button 
                  onClick={() => window.open('https://wa.me/2347036127047', '_blank')}
                  className="p-2 rounded-lg hover:bg-primary/10 transition-colors flex-shrink-0"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4 text-primary" />
                </button>
                <span className="text-muted-foreground text-sm">WhatsApp Business</span>
              </div>

              {/* Instagram with Button */}
              <div className="flex items-center gap-3 group">
                <button 
                  onClick={() => window.open('https://instagram.com/cletuszadoc_', '_blank')}
                  className="p-2 rounded-lg hover:bg-primary/10 transition-colors flex-shrink-0"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-primary" />
                </button>
                <span className="text-muted-foreground text-sm">@Cletuszadoc_</span>
              </div>

              {/* Facebook with Button */}
              <div className="flex items-center gap-3 group">
                <button 
                  onClick={() => window.open('https://facebook.com/cletus.zadoc', '_blank')}
                  className="p-2 rounded-lg hover:bg-primary/10 transition-colors flex-shrink-0"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-primary" />
                </button>
                <span className="text-muted-foreground text-sm">Cletus Zadoc</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg flex-shrink-0">
                  <MapPin className="w-4 h-4 text-muted-foreground/50" />
                </div>
                <span className="text-muted-foreground text-sm">Lekki, Lagos Nigeria</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="sacred-text italic">
            "This sanctuary of art is dedicated to all souls seeking connection through color and form."
          </p>
          
          {/* Social Media Row */}
          <div className="flex justify-center space-x-4 mt-6">
            <button 
              onClick={() => window.open('mailto:contactcletuszadoc@gmail.com', '_blank')}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            </button>
            
            <button 
              onClick={() => window.open('https://wa.me/2347036127047', '_blank')}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            </button>
            
            <button 
              onClick={() => window.open('https://instagram.com/cletuszadoc_', '_blank')}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            </button>
            
            <button 
              onClick={() => window.open('https://facebook.com/cletus.zadoc', '_blank')}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            </button>
            
            <button 
              onClick={() => window.open('tel:+2347036127047', '_blank')}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            </button>
          </div>

          <p className="text-muted-foreground text-sm mt-6">
            © 2024 Sacred Canvas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
