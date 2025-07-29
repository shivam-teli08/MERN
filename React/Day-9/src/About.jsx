import React from 'react';

export default function About() {
  return (
    <div className="bg-white min-h-screen px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 mb-6">
          Welcome to our platform! We are dedicated to providing the best services and experiences
          to our users. Our goal is to make your life easier and more connected through technology.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Mission</h2>
        <p className="text-md text-gray-600 mb-6">
          Our mission is to empower communities by delivering innovative solutions, seamless communication,
          and secure systems that improve everyday interactions.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Team</h2>
        <p className="text-md text-gray-600 mb-6">
          We are a passionate team of developers, designers, and problem-solvers focused on making technology
          more accessible and meaningful.
        </p>

        <div className="mt-10">
          <p className="text-sm text-gray-400">© 2025 Smart Guest. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
