"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';

interface FormData {
  email: string;
}

const ForgotPasswordPage = () => {
  const [formData, setFormData] = useState<FormData>({
    email: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Password reset email logic would go here
    console.log('Reset password requested for:', formData.email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* Desktop Layout */}
      <div className="hidden bg-white md:flex h-screen">
        {/* Left Section - Form */}
        <div className="w-1/2 p-8 overflow-y-auto">
          <div className="max-w-md mx-auto">
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
              <h1 className="text-4xl font-bold mb-4 text-black">Forgot password?</h1>
              <p className="text-gray-600 text-lg">
                {!isSubmitted 
                  ? "No worries! Enter your email and we'll send you reset instructions."
                  : "Check your email for a link to reset your password. If it doesn't appear within a few minutes, check your spam folder."
                }
              </p>
            </div>
            {!isSubmitted ? (
              renderForm(formData, handleInputChange, handleSubmit)
            ) : (
              renderSuccessMessage()
            )}
          </div>
        </div>
        {/* Right Section - Image */}
        <div className="w-1/2 bg-gray-100">
          <img 
            src="/images/multiFamily2.png" 
            alt="Forgot password hero" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden min-h-screen bg-white p-6">
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
                Sign In
              </Link>
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-black">Forgot password?</h1>
          <p className="text-gray-600">
            {!isSubmitted 
              ? "No worries! Enter your email and we'll send you reset instructions."
              : "Check your email for a link to reset your password. If it doesn't appear within a few minutes, check your spam folder."
            }
          </p>
        </div>
        {!isSubmitted ? (
          renderForm(formData, handleInputChange, handleSubmit)
        ) : (
          renderSuccessMessage()
        )}
      </div>
    </div>
  );
};

const renderForm = (
  formData: FormData,
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
) => (
  <form onSubmit={handleSubmit} className="space-y-6">
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
        Email address
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFBA00] focus:border-transparent"
        placeholder="Enter your email"
        required
      />
    </div>

    <button
      type="submit"
      className="w-full bg-red-600 text-white py-4 px-6 rounded-full font-medium hover:bg-red-700 transition-colors duration-200"
    >
      Send Reset Instructions
    </button>

   
  </form>
);

const renderSuccessMessage = () => (
  <div className="space-y-6">
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p className="text-center text-gray-600">
        A password reset link has been sent to your email address.
      </p>
    </div>

    <div className="space-y-4">
      <Link 
        href="/signin"
        className="block w-full text-center bg-red-600 text-white py-4 px-6 rounded-full font-medium hover:bg-red-700 transition-colors duration-200"
      >
        Return to Sign In
      </Link>
      
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="block w-full text-center bg-gray-100 text-gray-700 py-4 px-6 rounded-full font-medium hover:bg-gray-200 transition-colors duration-200"
      >
        Try Another Email
      </button>
    </div>
  </div>
);

export default ForgotPasswordPage;