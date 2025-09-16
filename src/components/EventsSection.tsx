"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

const CreativeHubSection = () => {
  const handleBookingClick = (url: string) => {
    // Trim URL and open safely
    window.open(url.trim(), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="events" className="sacred-section bg-gradient-to-b from-background to-secondary/10">
      <div className="sacred-container text-center">
        <h2 className="sacred-title mb-12">
          Creative
          <span className="block text-primary font-playfair italic">Hub</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Sing, Sip, and Paint Experience */}
          <Card className="bg-card/60 border-border/80 shadow-lg p-8 text-left flex flex-col">
            <div className="flex-grow space-y-4">
              <h3 className="text-2xl font-playfair font-semibold text-foreground">
                Sing, Sip, and Paint Experience (Ajah, Lagos)
              </h3>
              <p className="sacred-text text-sm">
                Relax. Paint. Sing. Sip. Connect. This isn’t just another sip and paint event—it’s a full sing, sip-and-paint Lagos experience. Create your own masterpiece while enjoying Arabian tea, juicy suya, and music. Perfect for couples, friends, or solo creatives looking to unwind with art.
              </p>
              <div className="space-y-3 text-sm text-muted-foreground pt-2">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-3 text-primary" />
                  Every Sunday
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-3 text-primary" />
                  3:00 PM (GMT+1)
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3 text-primary" />
                  Ajah, Lagos (Registered Participants Only)
                </div>
              </div>
            </div>
            <div className="pt-6 mt-auto">
              <Button
                size="lg"
                className="btn-sacred w-full"
                onClick={() => handleBookingClick("https://forms.gle/9yv7eUQ5aDj8SJmp7")}
              >
                <span className="relative z-10">Book Your Sip-and-Paint Lagos Experience</span>
              </Button>
            </div>
          </Card>

          {/* One-On-One Coaching — UPDATED WITH LIVE CLASS INFO */}
          <Card className="bg-card/60 border-border/80 shadow-lg p-8 text-left flex flex-col">
            <div className="flex-grow space-y-4">
              <h3 className="text-2xl font-playfair font-semibold text-foreground">
                One-On-One Drawing & Painting Coaching
              </h3>
              <p className="sacred-text text-sm">
                Discover your inner artist in 12 weeks with personalized drawing lessons and painting coaching for adults and children. Whether online or in-person, this bespoke program nurtures creativity and helps you find your unique artistic voice.
              </p>
               <div className="pt-6 mt-auto">
                <Button
                  size="lg"
                  className="btn-sacred w-full"
                  onClick={() => handleBookingClick("https://forms.gle/9yv7eUQ5aDj8SJmp7")}
                >
                  <span className="relative z-10">Learn More About Art Coaching</span>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Quote and Image Section */}
        <div className="grid lg:grid-cols-3 gap-8 items-center max-w-4xl mx-auto">
          <div className="relative w-32 h-32 overflow-hidden rounded-full border-4 border-primary/30 shadow-2xl mx-auto lg:mx-0">
            <img 
              src="/lovable-uploads/92d5dabf-d20c-4acd-b410-677a490a6211.png"
              alt="Serene Confidence Artwork"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-2">
            <p className="sacred-text italic text-lg md:text-xl">
              “These are not just events—they are soulful gatherings where art becomes a shared language of the heart.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeHubSection;
