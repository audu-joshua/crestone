"use client";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';

const active = {
  fontWeight: 700,
  paddingBottom: '7px',
  borderBottom: '1px solid black',
};

export const Navigation = () => {
  const [hamburger, setHamburger] = useState(false);
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Add type annotation for the index parameter
  const handleMouseEnter = (index: number): void => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = (): void => {
    setHoveredIndex(null);
  };

  // Add interface for menu items
  interface MenuItem {
    href: string;
    text: string;
    className?: string;
  }

  const menuItems = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/apartments", text: "Listing" },
    { href: "/contact", text: "Help Center" },
    { href: "/career", text: "Become a Member", className: "text-red-600 hover:bg-[#ffba00] hover:text-black" }
  ];

  // Conditionally change styles for specific pages
  const isContactPage = pathname === "/contact";
  const isOtherSpecificPage = pathname === "/";
  
  const logoSrc = isContactPage || isOtherSpecificPage ? "/images/logowhite.svg" : "/images/logoblack.svg";
  const menuBgColor = isContactPage || isOtherSpecificPage ? "bg-white" : "bg-black";
  const menuTextColor = isContactPage || isOtherSpecificPage ? "text-black" : "text-white";
  const menuBgColor2 = isContactPage || isOtherSpecificPage ? "bg-black" : "bg-white";
  const signupHelp = isContactPage || isOtherSpecificPage ? "text-white" : "text-black";
  const signupHelpdivider = isContactPage || isOtherSpecificPage ? "border-r-white border-l-white" : "border-r-black border-l-black";
  const navbg = isContactPage || isOtherSpecificPage ? "bg-black" : "bg-white";

  return (
    <>
      <header
        className={`${navbg} fixed w-full flex items-center justify-between top-0 px-[20px] md:px-[25px] py-2 md:py-0 xl:px-[97px] z-50`}
      >
        <Link href={"/"}>
          <img
            src={logoSrc}
            alt="logo"
            className='md:hidden'
          />
        </Link>

        <div className='hidden md:flex justify-between w-full py-3 items-center'>
          {/* Navigation Button Container */}
          <div
            className={`
              relative w-fit overflow-hidden transition-all duration-300 ease-in-out
              ${hamburger ? 'w-64' : 'w-28'}
            `}
            onClick={() => setHamburger((prevVal) => !prevVal)}
          >
            <div className={`
              flex cursor-pointer ${menuBgColor} py-2 px-4 gap-2 rounded-2xl items-center ${menuTextColor} 
              transition-all duration-300 ease-in-out
              ${hamburger ? 'justify-between w-full' : 'justify-between'}
            `}>
              {/* Hamburger icon with enhanced animations */}
              <div className={`
                grid gap-1 transition-all duration-300 ease-in-out
                ${hamburger ? '-translate-x-2' : 'translate-x-0'}
              `}>
                <div className={`
                  w-6 h-0.5 ${menuBgColor2} transition-all duration-300
                  ${hamburger ? 'transform rotate-45 translate-y-1.5' : ''}
                `}/>
                <div className={`
                  w-6 h-0.5 ${menuBgColor2} transition-all duration-300
                  ${hamburger ? 'opacity-0' : ''}
                `}/>
                <div className={`
                  w-6 h-0.5 ${menuBgColor2} transition-all duration-300
                  ${hamburger ? 'transform -rotate-45 -translate-y-1.5' : ''}
                `}/>
              </div>
              {/* Menu text with enhanced animations */}
              <p className={`
                font-bold transition-all duration-300 ease-in-out
                ${hamburger ? 'translate-x-2' : 'translate-x-0'}
              `}>Menu</p>
            </div>
          </div>

          <div>
            <Link href={"/"}>
              <img src={logoSrc} alt="logo" />
            </Link>
          </div>

          <nav className="text-white">
            <ul className={`${signupHelp} grid grid-flow-col line-clamp-4 text-base items-center gap-x-[30px] justify-between`}>
              <li>
                <Link
                  href={"/services"}
                  style={pathname.includes("/services") ? active : {}}
                  className='font-bold'
                >
                  Help Center
                </Link>
              </li>

              <span className={`h-4 ${signupHelpdivider} w-1 border-2`}></span>
              <li>
                <Link
                  href={"/career"}
                  style={pathname.includes("/career") ? active : {}}
                  className='font-bold'
                >
                  Signup
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile menu button with enhanced animations */}
        <div
          className={`
            md:hidden cursor-pointer relative overflow-hidden
            transition-all duration-300 ease-in-out
            ${hamburger ? 'w-64' : 'w-28'}
          `}
          onClick={() => setHamburger((prevVal) => !prevVal)}
        >
          <div className={`
            flex ${menuBgColor} py-2 px-4 rounded-2xl items-center cursor-pointer ${menuTextColor}
            transition-all duration-300 ease-in-out
            ${hamburger ? 'justify-between w-full' : 'justify-between'}
          `}>
            <div className={`
              grid gap-1 transition-all duration-300 ease-in-out
              ${hamburger ? '-translate-x-2' : 'translate-x-0'}
            `}>
              <div className={`
                w-6 h-0.5 ${menuBgColor2} transition-all duration-300
                ${hamburger ? 'transform rotate-45 translate-y-1.5' : ''}
              `}/>
              <div className={`
                w-6 h-0.5 ${menuBgColor2} transition-all duration-300
                ${hamburger ? 'opacity-0' : ''}
              `}/>
              <div className={`
                w-6 h-0.5 ${menuBgColor2} transition-all duration-300
                ${hamburger ? 'transform -rotate-45 -translate-y-1.5' : ''}
              `}/>
            </div>
            <p className={`
              font-bold transition-all duration-300 ease-in-out
              ${hamburger ? 'translate-x-2' : 'translate-x-0'}
            `}>Menu</p>
          </div>
        </div>
      </header>

      {/* Menu dropdown with enhanced animations */}
      <div
        className={`
          fixed w-full md:w-[40%] lg:w-[30%] md:rounded-xl z-50 
          transition-all duration-300 ease-in-out
          ${hamburger ? 'top-[70px] opacity-100' : 'top-[-100%] opacity-0'}
          text-center text-black bg-white left-0
        `}
      >
        <div className="flex flex-col gap-2 p-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              className={`
                flex justify-between items-center transition-all duration-300 ease-in-out
                hover:bg-black hover:text-white rounded-2xl px-8 py-4 bg-[#F4F4F4]
                ${item.className ?? ''}
              `}
              onClick={() => setHamburger(false)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              href={item.href}
            >
              {item.text}
              <FaLongArrowAltRight 
                className={`
                  text-2xl font-light transform transition-all duration-300
                  ${hoveredIndex === index ? '-rotate-45' : 'rotate-0'}
                `} 
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;