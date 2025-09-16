"use client";
import { useState, useEffect } from 'react';

// Function to calculate the next occurrence of a weekly event
const getNextEventDate = (dayOfWeek: number, hour: number, minute: number): Date => {
  const now = new Date();
  const nextEvent = new Date();

  // Set the time for the event
  nextEvent.setUTCHours(hour, minute, 0, 0);

  // Find the next specified day of the week
  const currentDay = now.getUTCDay();
  let daysUntilNext = dayOfWeek - currentDay;
  if (daysUntilNext < 0 || (daysUntilNext === 0 && now.getTime() > nextEvent.getTime())) {
    daysUntilNext += 7; // If today is the day but the time has passed, or the day is in the past, move to next week
  }
  
  nextEvent.setUTCDate(now.getUTCDate() + daysUntilNext);

  return nextEvent;
};

export default function CountdownTimer() {
  // Event is every Sunday at 3:00 PM GMT+1, which is 14:00 UTC.
  // Sunday is day 0 in getUTCDay().
  const [targetDate] = useState(getNextEventDate(0, 14, 0));
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

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
        ✨ Countdown to the Next Creative Hub
      </h3>
      <p className="text-muted-foreground mb-6">
        A new "Sing, Sip, and Paint" experience is just around the corner!
      </p>
      <div className="flex flex-wrap justify-center gap-4 text-center">
        <div className="bg-card p-4 rounded-lg shadow-md min-w-20">
          <div className="text-3xl font-bold text-foreground">{timeLeft.days}</div>
          <div className="text-sm text-muted-foreground">Days</div>
        </div>
        <div className="bg-card p-4 rounded-lg shadow-md min-w-20">
          <div className="text-3xl font-bold text-foreground">{timeLeft.hours}</div>
          <div className="text-sm text-muted-foreground">Hours</div>
        </div>
        <div className="bg-card p-4 rounded-lg shadow-md min-w-20">
          <div className="text-3xl font-bold text-foreground">{timeLeft.minutes}</div>
          <div className="text-sm text-muted-foreground">Minutes</div>
        </div>
        <div className="bg-card p-4 rounded-lg shadow-md min-w-20">
          <div className="text-3xl font-bold text-foreground">{timeLeft.seconds}</div>
          <div className="text-sm text-muted-foreground">Seconds</div>
        </div>
      </div>
    </div>
  );
}
