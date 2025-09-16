"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function IntroAnimation() {
  const [showAnimation, setShowAnimation] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      try {
        const hasSeenAnimation = sessionStorage.getItem('hasSeenIntro');
        if (!hasSeenAnimation) {
          setShowAnimation(true);
          sessionStorage.setItem('hasSeenIntro', 'true');

          const exitTimer = setTimeout(() => {
            setIsExiting(true);
          }, 2500); // Start fade out before disappearing

          const hideTimer = setTimeout(() => {
            setShowAnimation(false);
          }, 3500); // Total animation duration

          return () => {
            clearTimeout(exitTimer);
            clearTimeout(hideTimer);
          };
        }
      } catch (error) {
        // sessionStorage is not available (e.g., in SSR or security-restricted environments)
        console.log("Session storage is not available.");
      }
    }
  }, [isClient]);

  if (!isClient || !showAnimation) {
    return null;
  }

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-1000',
        isExiting ? 'opacity-0' : 'opacity-100'
      )}
    >
      <h1 className="text-4xl md:text-6xl font-headline text-primary animate-fade-in-scale-up">
        Sacred Canvas
      </h1>
    </div>
  );
}
