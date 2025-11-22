import React from "react";
import { NavLink } from "react-router-dom";
import hrz from "../assets/hrz.mp4";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden mt-2">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-auto min-w-full min-h-full max-w-none object-cover"
        src={hrz}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Lighter Overlay */}
      <div className="absolute inset-0  bg-opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          Gather & Give Thanks
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-100">
          Join our Thanksgiving community feast and celebrate gratitude together
        </p>
        <NavLink to="/register">
          <button className="mt-8 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition">
            Register Now
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
