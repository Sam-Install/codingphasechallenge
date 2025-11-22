import React from "react";
import a from '../assets/1.mp4';
import b from '../assets/2.mp4';
import c from '../assets/3.mp4';
import d from '../assets/4.mp4';
import e from '../assets/5.mp4';

const videos = [
  { title: "Grilling Video A", src: a },
  { title: "Grilling Video B", src: b },
  { title: "Grilling Video C", src: c },
  { title: "Grilling Video D", src: d },
  { title: "Grilling Video E", src: e },
];

const VideoGallery = () => {
  return (
    <section id="video-gallery" className="bg-orange-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-400">Grilling Inspiration</h2>
        <p className="mt-2 text-gray-700">Watch these quick tutorial videos to get inspired for your Thanksgiving feast.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, idx) => (
            <div key={idx} className="w-full bg-black rounded-lg overflow-hidden shadow-md">
              <video
                className="w-full h-auto object-cover"
                src={video.src}
                controls
                poster=""  /* optionally add a poster image here */
              >
                Your browser does not support the video tag.
              </video>
              <p className="mt-2 text-white text-center">{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
