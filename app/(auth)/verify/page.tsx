"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';

interface FormData {
  verificationCode: string;
}

const VerifyEmailPage = () => {
  const [formData, setFormData] = useState<FormData>({
    verificationCode: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Only allow numbers and limit to 6 digits
    if (value.length <= 6 && /^\d*$/.test(value)) {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Verification logic would go here
    console.log('Verification code submitted:', formData);
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
              <h1 className="text-4xl font-bold mb-4 text-black">Verify your email</h1>
              <p className="text-gray-600 text-lg">
                We've sent a 6-digit verification code to your email address. Please enter it below to verify your account.
              </p>
            </div>
            {renderForm(formData, handleInputChange, handleSubmit)}
          </div>
        </div>
        {/* Right Section - Image */}
        <div className="w-1/2 bg-gray-100">
          <img 
            src="/images/multiFamily2.png" 
            alt="Verify email hero" 
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
          <h1 className="text-3xl font-bold mb-4 text-black">Verify your email</h1>
          <p className="text-gray-600">
            We've sent a 6-digit verification code to your email address. Please enter it below to verify your account.
          </p>
        </div>
        {renderForm(formData, handleInputChange, handleSubmit)}
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
      <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-700 mb-2">
        Verification Code
      </label>
      <input
        type="text"
        id="verificationCode"
        name="verificationCode"
        value={formData.verificationCode}
        onChange={handleInputChange}
        className="w-full px-4 py-3 outline-none text-black rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFBA00] focus:border-transparent tracking-widest text-center text-lg"
        placeholder="Enter 6-digit code"
        required
        maxLength={6}
      />
    </div>

    <div className="flex justify-center items-center">
      <p className="text-sm text-gray-600">
        Didn't receive the code?{' '}
        <button 
          type="button" 
          className="text-black font-medium hover:underline"
          onClick={() => console.log('Resend code')}
        >
          Resend
        </button>
      </p>
    </div>

    <button
      type="submit"
      className="w-full bg-red-600 text-white py-4 px-6 rounded-full font-medium hover:bg-red-700 transition-colors duration-200"
    >
      Verify Email
    </button>

    
  </form>
);

export default VerifyEmailPage;