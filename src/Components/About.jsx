import React from 'react';
import { FaShieldAlt, FaGlobeAmericas, FaUsers, FaTrophy } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200 py-4 md:py-8">
      <div className="max-w-full px-3 md:px-0">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-3 md:mb-4">
            About Dragon News
          </h1>
          <p className="text-base md:text-lg text-accent">
            Journalism Without Fear or Favour
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Dragon News is committed to delivering accurate, unbiased, and timely news coverage to our readers worldwide. 
            We believe in the power of journalism to inform, educate, and inspire positive change in society. Our team of 
            dedicated journalists works tirelessly to uncover the truth and bring you stories that matter.
          </p>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Value 1 */}
            <div className="flex gap-3 md:gap-4">
              <div className="flex-shrink-0">
                <FaShieldAlt className="text-3xl text-secondary" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-accent mb-2">Integrity</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  We maintain the highest standards of journalistic ethics and integrity in all our reporting.
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="flex gap-3 md:gap-4">
              <div className="flex-shrink-0">
                <FaGlobeAmericas className="text-3xl text-secondary" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-accent mb-2">Global Reach</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  We cover stories from around the world, bringing diverse perspectives to our audience.
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="flex gap-3 md:gap-4">
              <div className="flex-shrink-0">
                <FaUsers className="text-3xl text-secondary" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-accent mb-2">Community</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  We value our readers and engage with our community through multiple platforms and channels.
                </p>
              </div>
            </div>

            {/* Value 4 */}
            <div className="flex gap-3 md:gap-4">
              <div className="flex-shrink-0">
                <FaTrophy className="text-3xl text-secondary" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-accent mb-2">Excellence</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  We strive for excellence in every story we publish, from research to presentation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Why Choose Dragon News?</h2>
          <ul className="space-y-3 text-gray-700 text-sm md:text-base">
            <li className="flex items-start gap-3">
              <span className="text-secondary font-bold mt-1">✓</span>
              <span>Breaking news coverage with real-time updates</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary font-bold mt-1">✓</span>
              <span>In-depth analysis and investigative reporting</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary font-bold mt-1">✓</span>
              <span>Expert columnists and thought leaders</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary font-bold mt-1">✓</span>
              <span>Multiple news categories for diverse interests</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary font-bold mt-1">✓</span>
              <span>Accessible and user-friendly platform</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary font-bold mt-1">✓</span>
              <span>Fact-checked and verified information</span>
            </li>
          </ul>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <div className="bg-gradient-to-br from-secondary to-red-600 rounded-lg p-4 text-white text-center shadow-md">
            <div className="text-2xl md:text-3xl font-bold">2.5M+</div>
            <div className="text-xs md:text-sm">Active Readers</div>
          </div>
          <div className="bg-gradient-to-br from-secondary to-red-600 rounded-lg p-4 text-white text-center shadow-md">
            <div className="text-2xl md:text-3xl font-bold">5000+</div>
            <div className="text-xs md:text-sm">Stories/Month</div>
          </div>
          <div className="bg-gradient-to-br from-secondary to-red-600 rounded-lg p-4 text-white text-center shadow-md">
            <div className="text-2xl md:text-3xl font-bold">50+</div>
            <div className="text-xs md:text-sm">Countries</div>
          </div>
          <div className="bg-gradient-to-br from-secondary to-red-600 rounded-lg p-4 text-white text-center shadow-md">
            <div className="text-2xl md:text-3xl font-bold">100+</div>
            <div className="text-xs md:text-sm">Journalists</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
