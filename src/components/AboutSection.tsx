"use client";
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Mail, Phone, MessageSquare, X } from 'lucide-react';

const AboutSection = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [modalType, setModalType] = useState<'connect' | 'commission'>('connect');

  const handleConnectClick = () => {
    setModalType('connect');
    setShowContactModal(true);
  };

  const handleCommissionClick = () => {
    setModalType('commission');
    setShowContactModal(true);
  };

  const copyToClipboard = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      alert('Contact info copied to clipboard!');
    }
  };

  const createMailtoLink = (isCommission: boolean) => {
    const subject = isCommission 
      ? 'Sacred Portrait Commission Inquiry'
      : 'Connect with the Artist - General Inquiry';
    const body = isCommission
      ? 'Hello Cletus,\n\nI would like to inquire about commissioning a sacred portrait. Please let me know your availability and process.\n\nThank you!'
      : 'Hello Cletus,\n\nI would love to connect with you about your art and Sacred Canvas journey.\n\nThank you!';
    
    return `mailto:studio@sacredcanvas.art?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const ContactModal = () => (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl max-w-md w-full p-6 space-y-4 relative">
        <button 
          onClick={() => setShowContactModal(false)}
          className="absolute top-4 right-4 p-2 hover:bg-accent/10 rounded-lg transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 className="text-xl font-garamond font-semibold pr-8">
          {modalType === 'connect' ? 'Connect with Cletus' : 'Commission a Sacred Portrait'}
        </h3>
        <p className="text-sm text-muted-foreground">
          {modalType === 'connect' 
            ? 'Choose your preferred way to connect with the artist'
            : 'Get in touch about commissioning your own sacred portrait'
          }
        </p>
        
        <div className="space-y-3">
          {/* Email Option */}
          <Button 
            variant="outline" 
            className="w-full justify-start gap-3 h-auto py-3"
            onClick={() => {
              const mailtoLink = createMailtoLink(modalType === 'commission');
              window.open(mailtoLink);
            }}
          >
            <Mail className="w-4 h-4" />
            <div className="text-left">
              <div>Email</div>
              <div className="text-xs text-muted-foreground">studio@sacredcanvas.art</div>
            </div>
          </Button>

          {/* WhatsApp Option */}
          <Button 
            variant="outline" 
            className="w-full justify-start gap-3 h-auto py-3"
            onClick={() => {
              const message = modalType === 'commission'
                ? 'Hello Cletus, I would like to inquire about commissioning a sacred portrait.'
                : 'Hello Cletus, I would love to connect with you about your art.';
              window.open(`https://wa.me/2347036127047?text=${encodeURIComponent(message)}`, '_blank');
            }}
          >
            <MessageSquare className="w-4 h-4" />
            <div className="text-left">
              <div>WhatsApp</div>
              <div className="text-xs text-muted-foreground">Quick message</div>
            </div>
          </Button>

          {/* Phone Option */}
          <Button 
            variant="outline" 
            className="w-full justify-start gap-3 h-auto py-3"
            onClick={() => window.open('tel:+2347036127047', '_blank')}
          >
            <Phone className="w-4 h-4" />
            <div className="text-left">
              <div>Call</div>
              <div className="text-xs text-muted-foreground">+234 703 612 7047</div>
            </div>
          </Button>

          {/* Facebook Option */}
          <Button 
            variant="outline" 
            className="w-full justify-start gap-3 h-auto py-3"
            onClick={() => window.open('https://facebook.com/cletus.zadoc', '_blank')}
          >
            <MessageSquare className="w-4 h-4" />
            <div className="text-left">
              <div>Facebook</div>
              <div className="text-xs text-muted-foreground">Cletus Zadoc</div>
            </div>
          </Button>

          {/* Copy Email Button */}
          <Button 
            variant="secondary" 
            className="w-full"
            onClick={() => copyToClipboard('studio@sacredcanvas.art')}
          >
            Copy Email Address
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="about" className="sacred-section bg-gradient-to-b from-background to-secondary/20">
      <div className="sacred-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="sacred-title text-left">
                The Artist:
                <span className="block text-primary font-garamond italic">Cletus Zadoc</span>
              </h2>
              
              <div className="space-y-6 sacred-text">
                <p>
                  Cletus Zadoc is an internationally recognized Nigerian expressionist artist whose acrylic on canvas works and wearable art clothing explore spirituality, identity, and our shared human story. His style blends contemporary African art with sacred symbolism—Adinkra, Nsibidi, and ancient hieroglyphics—woven into bold, emotive compositions.
                </p>
                
                <p>
                  After returning to art in Lagos in 2022, Zadoc began by creating exclusive hand-painted fashion pieces for Nigerian celebrities and has since expanded into African art collections for galleries, collectors, and private commissions in Lagos, London, and New York.
                </p>
                
                <p className="italic text-primary">
                  “I don’t paint for WOW—I paint for the soul. Each brushstroke is a prayer. Each color a memory. Each painting a truth we often bury.”
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg" 
                className="btn-sacred min-h-[44px]"
                onClick={handleConnectClick}
              >
                <span className="relative z-10">Connect with the Artist</span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-voice min-h-[44px]"
                onClick={handleCommissionClick}
              >
                Commission a Sacred Portrait
              </Button>
            </div>
          </div>
          
          {/* Right Section */}
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-br from-primary/10 via-accent/10 to-destructive/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-card border border-border rounded-2xl p-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="relative group">
                  {/* Hover glow wrapper */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  
                  {/* Fixed Circular framed image */}
                  <div className="relative w-40 h-40 overflow-hidden rounded-full border-4 border-primary/30 shadow-2xl group-hover:shadow-[0_0_30px_rgba(255,215,0,0.7)] transition-all duration-500 mx-auto">
                    <img 
                      src="/lovable-uploads/zadoc-pic.jpg"
                      alt="Cletus Zadoc - Artist"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/20 mix-blend-overlay rounded-full"></div>
                  </div>
                </div>
                <h3 className="font-garamond text-2xl font-semibold text-foreground">
                  Cletus Zadoc
                </h3>
                <p className="sacred-text text-primary italic">
                  Visual Artist & Expressionist Painter | Nigerian Contemporary African Artist
                </p>
              </div>
              
              <div className="space-y-4 pt-4 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Portraits Created</span>
                  <span className="font-semibold text-primary">127</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Sacred Nights Hosted</span>
                  <span className="font-semibold text-primary">24</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Souls Connected</span>
                  <span className="font-semibold text-primary">432</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && <ContactModal />}
    </section>
  );
};

export default AboutSection;

    