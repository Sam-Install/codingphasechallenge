import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-orange-800 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand / Mission */}
        <div>
          <h2 className="text-lg font-bold mb-2">American Harvest Foods</h2>
          <p className="text-sm">
            “Gather & Give Thanks” — Committed to nourishing community and
            celebrating gratitude this Thanksgiving.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-md font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/" className="hover:text-yellow-300">
                Home
              </a>
            </li>
            <li>
              <a href="/register" className="hover:text-yellow-300">
                Register
              </a>
            </li>
            <li>
              <a href="/give-back" className="hover:text-yellow-300">
                Give Back
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-300">
                About
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-yellow-300">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-md font-semibold mb-2">Connect With Us</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="mailto:info@americanharvestfoods.com" className="hover:text-yellow-300">
                info@americanharvestfoods.com
              </a>
            </li>
            <li>
              <a href="tel:+1234567890" className="hover:text-yellow-300">
                +1 (234) 567-890
              </a>
            </li>
          </ul>
          <div className="mt-4 flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              {/* Example Facebook icon — replace with SVG or icon component */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5.01 3.676 9.158 8.438 9.88v-6.99H7.898v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.466h-1.26c-1.242 0-1.63.773-1.63 1.562v1.88h2.773l-.443 2.89h-2.33v6.99C18.324 21.158 22 17.01 22 12z" />
              </svg>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              {/* Example Instagram icon */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Legal */}
      <div className="mt-8 border-t border-orange-700 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© {new Date().getFullYear()} American Harvest Foods. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="/privacy" className="hover:text-yellow-300">Privacy Policy</a>
            <a href="/terms" className="hover:text-yellow-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
