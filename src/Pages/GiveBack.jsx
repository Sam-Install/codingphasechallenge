import React, { useState } from "react";

const GiveBack = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [volunteer, setVolunteer] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleDonate = (e) => {
    e.preventDefault();
    // TODO: send donationAmount to backend or payment API
    console.log("Donating:", donationAmount);
    setSubmitted(true);
  };

  const handleVolunteer = (e) => {
    e.preventDefault();
    // TODO: send volunteer intent to backend
    console.log("Volunteer signup");
    setVolunteer(true);
  };

  if (submitted || volunteer) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4 py-16">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-lg text-center">
          {submitted && (
            <>
              <h2 className="text-2xl font-bold text-orange-800 mb-4">Thank You for Giving!</h2>
              <p className="text-gray-700">Your donation is going to make a real difference in our community this Thanksgiving.</p>
            </>
          )}
          {volunteer && (
            <>
              <h2 className="text-2xl font-bold text-orange-800 mb-4">Thank You for Volunteering!</h2>
              <p className="text-gray-700">We appreciate your willingness to help us bring our “Gather & Give Thanks” event to life.</p>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-orange-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Intro / Impact */}
        <section>
          <h2 className="text-3xl font-bold text-green-400 text-center">Give Back This Thanksgiving</h2>
          <p className="mt-4 text-gray-700 text-center">
            This Thanksgiving, your support helps us share a meal, warm conversation, and hope. By donating or volunteering,
            you become part of our mission to make gratitude more than just a feeling – but an action that uplifts our whole community.
          </p>
        </section>

        {/* Donation / Volunteer Options */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Donation */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-orange-800">Donate</h3>
            <p className="mt-2 text-gray-700">
              Your contribution helps us provide meals to families in need, cover event costs, and support local community partners.
            </p>
            <form onSubmit={handleDonate} className="mt-4 space-y-4">
              <label className="block text-gray-700">
                Amount (USD)
                <input
                  type="number"
                  min="1"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </label>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition"
              >
                Donate Now
              </button>
            </form>
          </div>

          {/* Volunteer */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-orange-800">Volunteer</h3>
            <p className="mt-2 text-gray-700">
              Join us at the “Gather & Give Thanks” event to help serve meals, set up the venue, or assist in community activities.
            </p>
            <form onSubmit={handleVolunteer} className="mt-4 space-y-4">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition"
              >
                Sign Up to Volunteer
              </button>
            </form>
          </div>
        </section>

        {/* How Your Help Makes Impact */}
        <section>
          <h3 className="text-2xl font-semibold text-orange-800 text-center">How Your Support Helps</h3>
          <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
            <li>🍂 Serve warm, nourishing meals to community members</li>
            <li>🏠 Provide support to local families in need</li>
            <li>🤝 Build connections and strengthen our local network</li>
            <li>🌾 Help us partner with food banks and charities</li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <p className="text-gray-700">Whether you give your time or resources, every contribution matters.</p>
          <div className="mt-4">
            <a
              href="/"
              className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-medium"
            >
              Back to Home
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GiveBack;
