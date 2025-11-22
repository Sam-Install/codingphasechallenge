import React, { useState, useEffect } from "react";

const CountDownTimer = () => {
  // Set target date/time: November 28, 2025 at, say, 00:00 (you can ajust time)
  const targetDate = new Date("2025-11-28T00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return null;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (!newTimeLeft) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="text-center text-orange-800 font-semibold">
        The event has started!
      </div>
    );
  }

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="flex justify-center space-x-6  text-black mt-20">
      <div className="flex flex-col items-center">
        <span className="text-5xl font-bold">{days}</span>
        <span className="text-sm">Days</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-5xl font-bold">{hours}</span>
        <span className="text-sm">Hours</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-5xl font-bold">{minutes}</span>
        <span className="text-sm">Minutes</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-5xl font-bold">{seconds}</span>
        <span className="text-sm">Seconds</span>
      </div>
    </div>
  );
};

export default CountDownTimer;
