"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
//import { ArrowLeft } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  agreedToTerms: boolean;
}

const SignUpPage = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agreedToTerms: false
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Supabase integration would go here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      {/* Desktop Layout */}
      <div className="hidden bg-white md:flex h-screen">
        {/* Left Section - Form */}
        <div className="w-1/2 p-8 overflow-y-auto">
          <div className="max-w-md mx-auto">
            {/* 
            <nav className="mb-8">
              <Link href="/" className="inline-flex items-center text-gray-600 hover:text-black">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
            </nav>
            */}
            <div className="mb-8">
              <div className='flex justify-between w-full mb-12'>
              <img src="/images/logoblack.svg" alt="Logo" className="h-8 w-auto" />
              <div className="flex items-center space-x-4">
                <Link
                  href="/signin"
                  className={`px-6 py-2.5 rounded-full text-sm lg:text-base font-medium transition-all duration-300 
                    bg-[#FFBA00] text-black hover:bg-black hover:text-white
                    transform hover:scale-105 hover:-translate-y-0.5`}
                >
                  Sign In
                </Link>
              </div>
              </div>
              <h1 className="text-4xl font-bold mb-4 text-black">Create an account</h1>
              <p className="text-gray-600 text-lg">
                Sign up to get access to your purchased courses and a whole lot more!
              </p>
            </div>
            {/* Form Component */}
            {renderForm(formData, handleInputChange, handleSubmit)}
          </div>
        </div>
        {/* Right Section - Image */}
        <div className="w-1/2 bg-gray-100">
          <img 
            src="/images/frame.png" 
            alt="Sign up hero" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden min-h-screen bg-white p-6">
        {/* 
        <nav className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-600">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </Link>
        </nav>
        */}
        <div className="mb-8">
          <div className='flex justify-between w-full mb-8'>
          <img src="/images/logoblack.svg" alt="Logo" className="h-8 w-auto" />
          <div className="flex items-center space-x-4">
                <Link
                  href="/signin"
                  className={`px-6 py-2.5 rounded-full text-sm lg:text-base font-medium transition-all duration-300 
                    bg-[#FFBA00] text-black hover:bg-black hover:text-white
                    transform hover:scale-105 hover:-translate-y-0.5`}
                >
                  Log In
                </Link>
              </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-black">Create an account</h1>
          <p className="text-gray-600">
            Sign up to get access to your purchased courses and a whole lot more!
          </p>
        </div>
        {/* Form Component */}
        {renderForm(formData, handleInputChange, handleSubmit)}
      </div>
    </div>
  );
};

// Helper function to render the form with proper TypeScript types
const renderForm = (
  formData: FormData,
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
) => (
  <form onSubmit={handleSubmit} className="space-y-6">
    <div>
      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
        First Name
      </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        className="w-full px-4 py-3 text-black outline-none rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFBA00] focus:border-transparent"
        placeholder="First name"
        required
      />
    </div>

    <div>
      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
        Last Name
      </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
        className="w-full px-4 py-3 rounded-lg text-black outline-none border border-gray-300 focus:ring-2 focus:ring-[#FFBA00] focus:border-transparent"
        placeholder="Last name"
        required
      />
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        className="w-full px-4 py-3 rounded-lg text-black outline-none border border-gray-300 focus:ring-2 focus:ring-[#FFBA00] focus:border-transparent"
        placeholder="Email address"
        required
      />
    </div>

    <div>
      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        className="w-full px-4 py-3 rounded-lg text-black outline-none border border-gray-300 focus:ring-2 focus:ring-[#FFBA00] focus:border-transparent"
        placeholder="Minimum 8 characters"
        minLength={8}
        required
      />
    </div>

    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          type="checkbox"
          id="agreedToTerms"
          name="agreedToTerms"
          checked={formData.agreedToTerms}
          onChange={handleInputChange}
          className="h-4 w-4 rounded border-gray-300 text-[#FFBA00] focus:ring-[#FFBA00]"
          required
        />
      </div>
      <div className="ml-3">
        <label htmlFor="agreedToTerms" className="text-sm text-gray-600">
          I agree to Crestone Holdings and Investment's{' '}
          <Link href="/terms" className="text-black font-medium underline">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="text-black font-medium underline">
            Privacy Policy
          </Link>
          .
        </label>
      </div>
    </div>

    <button
      type="submit"
      className="w-full bg-red-600 text-white py-4 px-6 rounded-full font-medium hover:bg-red-700 transition-colors duration-200"
    >
      Continue
    </button>

    <p className="text-center text-sm text-gray-600 mt-6">
      Already have an account?{' '}
      <Link href="/signin" className="text-black font-medium hover:underline">
        Log in
      </Link>
    </p>
  </form>
);

export default SignUpPage;