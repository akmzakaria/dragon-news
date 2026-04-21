import React, { useState } from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaDollarSign, FaClock } from 'react-icons/fa';

const Career = () => {
  const [expandedJob, setExpandedJob] = useState(null);

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior News Reporter',
      department: 'Editorial',
      location: 'New York, USA',
      type: 'Full-time',
      salary: '$80,000 - $120,000',
      description: 'We are seeking an experienced news reporter with a strong track record of breaking stories and investigative journalism.',
      requirements: ['5+ years of journalism experience', 'Master\'s degree in Journalism or Communications', 'Proven ability to meet tight deadlines', 'Strong research and writing skills'],
    },
    {
      id: 2,
      title: 'Digital Content Editor',
      department: 'Digital Media',
      location: 'San Francisco, USA',
      type: 'Full-time',
      salary: '$70,000 - $100,000',
      description: 'Join our dynamic digital team to oversee content strategy and manage our online platforms.',
      requirements: ['3+ years in digital content editing', 'SEO and social media knowledge', 'Experience with content management systems', 'Excellent communication skills'],
    },
    {
      id: 3,
      title: 'Video Journalist',
      department: 'Multimedia',
      location: 'London, UK',
      type: 'Full-time',
      salary: '£55,000 - £75,000',
      description: 'Produce compelling video news stories for broadcast and digital platforms.',
      requirements: ['4+ years of video journalism experience', 'Proficiency in video editing software', 'Strong storytelling ability', 'Experience with live broadcasting'],
    },
    {
      id: 4,
      title: 'Data Journalist',
      department: 'Research',
      location: 'Toronto, Canada',
      type: 'Full-time',
      salary: '$75,000 - $105,000',
      description: 'Analyze complex datasets and create compelling data-driven news stories.',
      requirements: ['3+ years of data journalism experience', 'Proficiency in Python or R', 'Experience with data visualization tools', 'Strong analytical skills'],
    },
    {
      id: 5,
      title: 'Social Media Manager',
      department: 'Marketing',
      location: 'Dubai, UAE',
      type: 'Full-time',
      salary: 'AED 80,000 - 120,000',
      description: 'Manage and grow our social media presence across all platforms.',
      requirements: ['2+ years of social media management', 'Knowledge of all major platforms', 'Content creation skills', 'Analytics expertise'],
    },
    {
      id: 6,
      title: 'Fact-Check Specialist',
      department: 'Verification',
      location: 'Remote',
      type: 'Full-time',
      salary: '$60,000 - $85,000',
      description: 'Verify facts and investigate claims to combat misinformation.',
      requirements: ['3+ years in fact-checking or verification', 'Strong research skills', 'Attention to detail', 'Knowledge of media landscape'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200 py-4 md:py-8">
      <div className="max-w-full px-3 md:px-0">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-3 md:mb-4">
            Join Our Team
          </h1>
          <p className="text-base md:text-lg text-accent">
            Build your career in journalism with Dragon News
          </p>
        </div>

        {/* About Careers */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Why Work with Us?</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
            At Dragon News, we foster a collaborative environment where journalists can grow, innovate, and make a real 
            impact. We believe in empowering our team members to pursue meaningful stories and develop their careers in journalism.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-accent mb-2">Competitive Benefits</h3>
              <p className="text-sm text-gray-600">Health insurance, 401k matching, and flexible working arrangements</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-accent mb-2">Professional Growth</h3>
              <p className="text-sm text-gray-600">Training, mentorship, and career advancement opportunities</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-accent mb-2">Global Impact</h3>
              <p className="text-sm text-gray-600">Work on stories that reach millions worldwide</p>
            </div>
          </div>
        </div>

        {/* Job Openings */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">Current Openings</h2>
          <div className="space-y-4">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                  className="w-full text-left p-4 md:p-6 flex justify-between items-start md:items-center gap-3 hover:bg-base-100 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-accent mb-3 md:mb-2">{job.title}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 text-xs md:text-sm text-gray-600">
                      <div className="flex items-center gap-1 md:gap-2">
                        <FaBriefcase className="text-secondary flex-shrink-0" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2">
                        <FaMapMarkerAlt className="text-secondary flex-shrink-0" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2">
                        <FaClock className="text-secondary flex-shrink-0" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2">
                        <FaDollarSign className="text-secondary flex-shrink-0" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-2xl text-secondary flex-shrink-0">
                    {expandedJob === job.id ? '−' : '+'}
                  </div>
                </button>

                {/* Expanded Details */}
                {expandedJob === job.id && (
                  <div className="px-4 md:px-6 pb-4 md:pb-6 border-t">
                    <p className="text-gray-700 mb-4 text-sm md:text-base">{job.description}</p>
                    <h4 className="font-semibold text-accent mb-2 text-sm md:text-base">Requirements:</h4>
                    <ul className="space-y-2 mb-6">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600 text-xs md:text-sm">
                          <span className="text-secondary font-bold mt-1">✓</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="btn btn-primary btn-sm w-full md:w-auto">
                      Apply Now
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Application Info */}
        <div className="bg-gradient-to-r from-secondary to-red-600 rounded-lg shadow-md p-4 md:p-6 mt-8 md:mt-12 text-white">
          <h3 className="text-xl md:text-2xl font-bold mb-3">Ready to Make an Impact?</h3>
          <p className="text-sm md:text-base mb-4">
            If you don't see a position that matches your skills, feel free to send us your resume at 
            <a href="mailto:careers@dragonnews.com" className="font-semibold ml-1 hover:underline">
              careers@dragonnews.com
            </a>
          </p>
          <p className="text-xs md:text-sm opacity-90">
            Dragon News is an equal opportunity employer committed to building a diverse and inclusive team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Career;
