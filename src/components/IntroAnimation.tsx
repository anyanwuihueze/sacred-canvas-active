"use client";
import { useState, useEffect } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300); // Wait for fade out transition
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ pointerEvents: 'none' }}
    >
      <div className="animate-fade-in">
        <img 
          src="/lovable-uploads/3caa06e4-be46-41b2-93c9-03c7db376261.png"
          alt="Cletus Zadoc - Art That Illuminates"
          className="max-w-md w-full h-auto animate-pulse"
        />
      </div>
    </div>
  );
};

export default IntroAnimation;
