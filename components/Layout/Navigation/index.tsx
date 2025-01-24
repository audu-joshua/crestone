"use client";
import React, { useState, useEffect } from "react";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

const menuItems = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/apartments", text: "Listing" },
  { href: "/contact", text: "Help Center" },
  { href: "/career", text: "Become a Member" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const isContactOrHomePage = pathname === "/contact" || pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [user, setUser] = useState<any>(null)
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user ?? null)
    }

    getUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [supabase.auth])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }


  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : isContactOrHomePage ? "bg-transparent" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <img
                src={scrolled || !isContactOrHomePage ? "/images/logoblack.svg" : "/images/logowhite.svg"}
                alt="logo"
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm lg:text-base font-medium transition-all duration-200 relative group ${
                    scrolled || !isContactOrHomePage ? "text-gray-900" : "text-white"
                  }`}
                  onMouseEnter={() => setActiveItem(item.href)}
                  onMouseLeave={() => setActiveItem(null)}
                >
                  {item.text}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 transform origin-left transition-transform duration-200 ${
                      scrolled || !isContactOrHomePage ? "bg-black" : "bg-white"
                    } ${
                      activeItem === item.href ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              ))}
              
              <div className="flex items-center space-x-4">
        {user ? (
          <>
            <span className="text-gray-600">
              {user.email}
            </span>
            <button
              onClick={handleSignOut}
              className={`px-6 py-2.5 rounded-full text-sm lg:text-base font-medium transition-all duration-300 
                bg-[#FFBA00] text-black hover:bg-black hover:text-white
                transform hover:scale-105 hover:-translate-y-0.5`}
            >
              Sign Out
            </button>
          </>
        ) : (
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
        )}
      </div>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 ${
                scrolled || !isContactOrHomePage ? "text-black" : "text-white"
              }`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } fixed top-16 left-0 w-full h-screen bg-white z-40`}
        >
          <div className="px-4 pt-2 pb-3">
            {menuItems.map((item, index) => (
              <div key={item.href} className="relative">
                <Link
                  href={item.href}
                  className="flex items-center justify-between px-4 py-4 text-base font-medium text-gray-900 group transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="group-hover:text-[#FFBA00]">{item.text}</span>
                  <ArrowRight className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#FFBA00]" />
                </Link>
                {index !== menuItems.length - 1 && (
                  <div className="mx-4 h-[1px] bg-gray-100" />
                )}
              </div>
            ))}
            <div className="flex w-full justify-between">
            <div className="pt-10 px-4 w-full">
              <Link
                href="/signup"
                className="block w-full text-center px-4 py-4 rounded-full bg-[#FFBA00] text-black font-medium 
                  hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>

            <div className="pt-10 px-4 w-full">
              <Link
                href="/signup"
                className="block w-full text-center px-4 py-4 rounded-full border-2 border-solid border-[#FFBA00] text-black font-medium 
                  hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                Log In
              </Link>
            </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;