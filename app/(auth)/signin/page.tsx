"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

interface FormData {
  email: string;
  password: string;
}

const SignInPage = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (signInError) {
        throw signInError;
      }

      router.push('/');
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Rest of your existing component code...
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
                    href="/signup"
                    className={`px-6 py-2.5 rounded-full text-sm lg:text-base font-medium transition-all duration-300 
                      bg-[#FFBA00] text-black hover:bg-black hover:text-white
                      transform hover:scale-105 hover:-translate-y-0.5`}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-4 text-black">Sign in</h1>
              <p className="text-gray-600 text-lg">
                Welcome back! Please enter your details.
              </p>
            </div>
            {renderForm(formData, handleInputChange, handleSubmit, error, loading)}
          </div>
        </div>
        {/* Right Section - Image */}
        <div className="w-1/2 bg-gray-100">
          <img 
            src="/images/frame.png" 
            alt="Sign in hero" 
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
                href="/signup"
                className={`px-6 py-2.5 rounded-full text-sm lg:text-base font-medium transition-all duration-300 
                  bg-[#FFBA00] text-black hover:bg-black hover:text-white
                  transform hover:scale-105 hover:-translate-y-0.5`}
              >
                Sign Up
              </Link>
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-black">Sign in</h1>
          <p className="text-gray-600">
            Welcome back! Please enter your details.
          </p>
        </div>
        {renderForm(formData, handleInputChange, handleSubmit, error, loading)}
      </div>
    </div>
  );
};

const renderForm = (
  formData: FormData,
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void,
  error: string | null,
  loading: boolean
) => (
  <form onSubmit={handleSubmit} className="space-y-6">
    {error && (
      <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm">
        {error}
      </div>
    )}

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
        className="w-full px-4 py-3 text-black outline-none rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFBA00] focus:border-transparent"
        placeholder="Email address"
        required
        disabled={loading}
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
        className="w-full px-4 py-3 text-black outline-none rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFBA00] focus:border-transparent"
        placeholder="Enter your password"
        required
        disabled={loading}
      />
    </div>

    <div className="flex justify-between items-center">
      <p className="text-sm text-gray-600">
        Forgot Password?
      </p>
      <Link href="/forgot-password" className="text-sm text-[#EF0000] hover:text-black hover:underline">
        Reset Password
      </Link>
    </div>

    <button
      type="submit"
      disabled={loading}
      className={`w-full bg-red-600 text-white py-4 px-6 rounded-full font-medium 
        ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-red-700'} 
        transition-colors duration-200`}
    >
      {loading ? 'Signing in...' : 'Sign In'}
    </button>

    <p className="text-center text-sm text-gray-600 mt-6">
      Don't have an account?{' '}
      <Link href="/signup" className="text-black font-medium hover:underline">
        Sign up
      </Link>
    </p>
  </form>
);

export default SignInPage;