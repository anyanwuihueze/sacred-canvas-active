import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const targetDate = new Date('2025-07-19T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="text-center py-12 px-6 bg-gradient-to-b from-background to-muted rounded-2xl shadow-lg animate-fade-in">
      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
        ✨ Sacred Revelation Countdown
      </h3>
      <p className="text-muted-foreground mb-6">
        The illumination arrives on July 19, 2025
      </p>
      <div className="flex flex-wrap justify-center gap-6 text-center">
        <div className="bg-card p-4 rounded-lg shadow-md min-w-24">
          <div className="text-3xl font-bold text-foreground">{timeLeft.days}</div>
          <div className="text-sm text-muted-foreground">Days</div>
        </div>
        <div className="bg-card p-4 rounded-lg shadow-md min-w-24">
          <div className="text-3xl font-bold text-foreground">{timeLeft.hours}</div>
          <div className="text-sm text-muted-foreground">Hours</div>
        </div>
        <div className="bg-card p-4 rounded-lg shadow-md min-w-24">
          <div className="text-3xl font-bold text-foreground">{timeLeft.minutes}</div>
          <div className="text-sm text-muted-foreground">Minutes</div>
        </div>
        <div className="bg-card p-4 rounded-lg shadow-md min-w-24">
          <div className="text-3xl font-bold text-foreground">{timeLeft.seconds}</div>
          <div className="text-sm text-muted-foreground">Seconds</div>
        </div>
      </div>
    </div>
  );
}