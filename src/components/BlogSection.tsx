"use client";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  return (
    <section id="blog" className="sacred-section bg-gradient-to-b from-background to-secondary/20">
      <div className="sacred-container">
        <div className="text-center space-y-6 mb-12">
          <h2 className="sacred-title">
            From the Artist's
            <span className="block text-primary font-garamond italic">Journal</span>
          </h2>
          <p className="sacred-text max-w-3xl mx-auto">
            A space for stories, reflections, and behind-the-scenes glimpses into the creative process. Explore the thoughts and inspirations that fuel the canvas.
          </p>
        </div>

        {/* Blog Post 1 */}
        <div className="grid lg:grid-cols-5 gap-8 items-center bg-card border border-border rounded-2xl p-8 mb-8 shadow-lg transition-transform hover:shadow-primary/20 hover:-translate-y-2">
          <div className="lg:col-span-2">
            {/* Placeholder for a video or image */}
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Video/Image Placeholder</p>
            </div>
          </div>
          <div className="lg:col-span-3 space-y-4">
            <p className="text-sm text-muted-foreground">October 26, 2023</p>
            <h3 className="text-2xl font-garamond font-semibold text-foreground">
              The Hyperrealistic Heart: A Journey into Detail
            </h3>
            <p className="sacred-text">
              People often ask me why I pour hundreds of hours into a single eye or the subtle curve of a lip. For me, hyperrealism isn't about replicating a photograph—it's about capturing a soul...
            </p>
            <Button asChild variant="link" className="p-0 text-primary hover:text-primary/80">
              <Link to="/blog">Read More &rarr;</Link>
            </Button>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="grid lg:grid-cols-5 gap-8 items-center bg-card border border-border rounded-2xl p-8 shadow-lg transition-transform hover:shadow-primary/20 hover:-translate-y-2">
          <div className="lg:col-span-2">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Video/Image Placeholder</p>
            </div>
          </div>
          <div className="lg:col-span-3 space-y-4">
            <p className="text-sm text-muted-foreground">October 19, 2023</p>
            <h3 className="text-2xl font-garamond font-semibold text-foreground">
              Sacred Spaces: The Story Behind the Abstract Backgrounds
            </h3>
            <p className="sacred-text">
              The face is the anchor, but the background is the ocean. It's the untamed, emotional landscape where the story truly unfolds. Each color, each swirl, is a prayer...
            </p>
            <Button asChild variant="link" className="p-0 text-primary hover:text-primary/80">
              <Link to="/blog">Read More &rarr;</Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;

    