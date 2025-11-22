import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    guests: 1,
    dietary: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Email address is invalid";
    }
    if (formData.guests < 1) {
      newErrors.guests = "You must register at least 1 guest";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // If valid, do something: send to backend or API
    console.log("Form data:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4 mt-20">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold text-orange-800 mb-4">Thank You!</h2>
          <p className="text-gray-700">
            Your registration has been received. We look forward to seeing you at the
            event!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-wite flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-orange-800 text-center">
          Register for “Gather & Give Thanks”
        </h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-gray-700">
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-gray-700">
              Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Number of Guests */}
          <div>
            <label htmlFor="guests" className="block text-gray-700">
              Number of Guests *
            </label>
            <input
              type="number"
              name="guests"
              id="guests"
              min="1"
              value={formData.guests}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.guests && (
              <p className="mt-1 text-sm text-red-500">{errors.guests}</p>
            )}
          </div>

          {/* Dietary Preferences */}
          <div>
            <label htmlFor="dietary" className="block text-gray-700">
              Dietary Preferences (optional)
            </label>
            <input
              type="text"
              name="dietary"
              id="dietary"
              placeholder="e.g., Vegetarian, Gluten-free"
              value={formData.dietary}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition"
            >
              Register Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
