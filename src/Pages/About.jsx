import React from "react";

const About = () => {
  return (
    <div className="bg-orange-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Our Story */}
        <section>
          <h2 className="text-3xl font-bold text-green-400">Our Story</h2>
          <p className="mt-4 text-gray-700">
            American Harvest Foods was founded with a simple belief: food brings people
            together. Over the years, we’ve grown into a national brand, but our heart remains in community.
            This Thanksgiving, we’re proud to host our first annual “Gather & Give Thanks” event — a community feast
            that brings families, neighbors, and friends together to celebrate gratitude, share a meal, and give back.
          </p>
        </section>

        {/* Mission & Values */}
        <section>
          <h2 className="text-3xl font-bold text-orange-400">Our Mission & Values</h2>
          <p className="mt-4 text-gray-700">
            Our mission is to nourish more than just appetites — we aim to nourish community, kindness,
            and gratitude. Through “Gather & Give Thanks”, we’re creating a space where everyone is welcome,
            where generosity meets connection, and where every guest helps build a stronger, more compassionate community.
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
            <li><strong>Gratitude:</strong> We believe in acknowledging our blessings and sharing them.</li>
            <li><strong>Community:</strong> We value coming together, across generations and backgrounds.</li>
            <li><strong>Generosity:</strong> We give back — not just through food, but through support.</li>
            <li><strong>Respect:</strong> We honor tradition, diversity, and hospitality.</li>
          </ul>
        </section>

        {/* Impact / What We Do */}
        <section>
          <h2 className="text-3xl font-bold text-green-400">What We Do</h2>
          <p className="mt-4 text-gray-700">
            At the heart of “Gather & Give Thanks” is more than a meal — it’s an opportunity for real impact.
            Every plate served is shared not just for celebration, but to uplift those in need.
            We partner with local food banks, community centers, and volunteers to make sure gratitude
            translates into meaningful giving.
          </p>
        </section>

        {/* Team */}
        <section>
          <h2 className="text-3xl font-bold text-orange-400">Our Team</h2>
          <p className="mt-4 text-gray-700">
            Our leadership team is made up of dedicated individuals who care deeply about community and food.
            From longtime Harvest family members to local organizers, we all share a common vision:
            bring people together and give back.
          </p>
          {/* Optionally, you could map over a list of team members here */}
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Want to be part of it?</h2>
          <div className="mt-4 space-x-4">
            <a
              href="/register"
              className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-medium"
            >
              Register
            </a>
            <a
              href="/give-back"
              className="px-6 py-2 bg-transparent border-2 border-orange-500 hover:border-orange-600 text-orange-800 rounded-md font-medium"
            >
              Give Back
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
