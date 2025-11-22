import React from "react";

const EventDetails = () => {
  return (
    <section
      id="event-details"
      className="bg-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-400 text-center">
          Event Details
        </h2>
        <p className="mt-4 text-gray-700 text-center">
          Join us for the “Gather & Give Thanks” community feast where families,
          friends, and neighbors come together to celebrate gratitude, share a
          Thanksgiving meal, and give back to the community.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Date & Time */}
          <div className="flex items-start space-x-4">
            <svg
              className="w-8 h-8 text-green-400 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 7V3M16 7V3M3 11h18M5 21h14a2 2 0 0 0 2-2V11H3v8a2 2 0 0 0 2 2z" />
            </svg>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Date & Time
              </h3>
              <p className="mt-1 text-gray-600">
                Thursday, November 28, 2025 <br />
                4:00 PM – 8:00 PM
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start space-x-4">
            <svg
              className="w-8 h-8 text-green-400 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zM12 11.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
            </svg>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Location</h3>
              <p className="mt-1 text-gray-600">
                Harvest Community Center <br />
                123 Autumn Lane, Townsville
              </p>
            </div>
          </div>

          {/* Purpose / Why Attend */}
          <div className="md:col-span-2 flex items-start space-x-4">
            <svg
              className="w-8 h-8 text-green-400 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Why Attend?
              </h3>
              <p className="mt-1 text-gray-600">
                This gathering is more than just a feast — it’s an opportunity
                to connect, reflect, and give back. Together, we celebrate
                gratitude, share warm food, and support families in our
                community who need it most.
              </p>
            </div>
          </div>
        </div>

        {/* Add to Calendar CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              window.open(
                "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Gather+%26+Give+Thanks+Event&dates=20251128T160000/20251128T200000&details=Join+our+community+feast+celebrating+gratitude+with+American+Harvest+Foods&location=Harvest+Community+Center",
                "_blank"
              );
            }}
            className="px-8 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition"
          >
            Register
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
