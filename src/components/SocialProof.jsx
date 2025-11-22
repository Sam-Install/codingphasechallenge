import React from "react";
import cla from "../assets/cola.png";
import am from "../assets/america.png";
import tys from "../assets/tyson.jpg";

const socialProofData = {
  testimonials: [
    { name: "Maria Johnson", quote: "This event brought our community together …", role: "Local Participant" },
    { name: "James Williams", quote: "I've never felt so grateful …", role: "Volunteer" },
    { name: "Sara Lee", quote: "The “Gather & Give Thanks” feast was heartwarming …", role: "Attendee" },
  ],
  partners: [
    { name: "Coca-Cola", logoImg: cla },
    { name: "Feeding America", logoImg: am },
    { name: "Tyson Foods", logoImg: tys }
  ],
};

const SocialProof = () => {
  return (
    <section id="social-proof" className="bg-white py-16 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-400 text-center">
          What People Are Saying
        </h2>

        {/* Testimonials */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialProofData.testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-orange-50 p-6 rounded-lg shadow-sm flex flex-col"
            >
              <p className="text-gray-700 italic">“{item.quote}”</p>
              <div className="mt-4 flex items-center">
                <div className="flex flex-col">
                  <span className="font-semibold text-green-400">{item.name}</span>
                  <span className="text-sm text-gray-600">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logos */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 text-center">
            Proudly Supported By
          </h3>
          <div className="mt-6 flex justify-evenly items-center flex-wrap">
            {socialProofData.partners.map((partner, idx) => (
              <div key={idx} className="h-16 flex items-center">
                <img
                  src={partner.logoImg}
                  alt={`${partner.name} logo`}
                  className="h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
