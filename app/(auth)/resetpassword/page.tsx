"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';

interface FormData {
  password: string;
  confirmPassword: string;
}

const ResetPasswordPage = () => {
  const [formData, setFormData] = useState<FormData>({
    password: '',
    confirmPassword: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(''); // Clear error when user types
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Validate password strength (minimum 8 characters)
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    // Password reset logic would go here
    console.log('Password reset submitted:', formData);
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
              <h1 className="text-4xl font-bold mb-4 text-black">Reset password</h1>
              <p className="text-gray-600 text-lg">
                {!isSubmitted 
                  ? "Please enter your new password below."
                  : "Your password has been successfully reset!"
                }
              </p>
            </div>
            {!isSubmitted ? (
              renderForm(formData, handleInputChange, handleSubmit, error)
            ) : (
              renderSuccessMessage()
            )}
          </div>
        </div>
        {/* Right Section - Image */}
        <div className="w-1/2 bg-gray-100">
          <img 
            src="/images/multiFamily2.png" 
            alt="Reset password hero" 
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
          <h1 className="text-3xl font-bold mb-4 text-black">Reset password</h1>
          <p className="text-gray-600">
            {!isSubmitted 
              ? "Please enter your new password below."
              : "Your password has been successfully reset!"
            }
          </p>
        </div>
        {!isSubmitted ? (
          renderForm(formData, handleInputChange, handleSubmit, error)
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
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void,
  error: string
) => (
  <form onSubmit={handleSubmit} className="space-y-6">
    {error && (
      <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm">
        {error}
      </div>
    )}
    
    <div>
      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
        New Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFBA00] focus:border-transparent"
        placeholder="Minimum 8 characters"
        required
        minLength={8}
      />
    </div>

    <div>
      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
        Confirm New Password
      </label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleInputChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFBA00] focus:border-transparent"
        placeholder="Confirm your password"
        required
      />
    </div>

    <div className="pt-2">
      <button
        type="submit"
        className="w-full bg-red-600 text-white py-4 px-6 rounded-full font-medium hover:bg-red-700 transition-colors duration-200"
      >
        Reset Password
      </button>
    </div>

    
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
        Your password has been successfully reset. You can now sign in with your new password.
      </p>
    </div>

    <Link 
      href="/signin"
      className="block w-full text-center bg-red-600 text-white py-4 px-6 rounded-full font-medium hover:bg-red-700 transition-colors duration-200"
    >
      Sign In
    </Link>
  </div>
);

export default ResetPasswordPage;