"use client";
import { useState, useEffect, useRef } from 'react';
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

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const menuItems = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/listing", text: "Listing" },
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
          <div
            className="relative w-fit p-[4px] overflow-hidden"
            onClick={() => {
              setHamburger((prevVal) => !prevVal);
            }}
          >
            <div className={`flex cursor-pointer ${menuBgColor} py-2 px-4 w-28 justify-between rounded-2xl items-center ${menuTextColor} relative`}>
              {/* Hamburger icon with sliding animation */}
              <div className={`grid gap-1 transition-transform duration-500 ${hamburger ? '-translate-x-2' : 'translate-x-0'}`}>
                <div
                  className={`w-6 h-0.5 ${menuBgColor2} transition-all duration-300 ${hamburger ? 'transform rotate-45 translate-y-1.5' : ''}`}
                />
                <div
                  className={`w-6 h-0.5 ${menuBgColor2} transition-all duration-300 ${hamburger ? 'opacity-0' : ''}`}
                />
                <div
                  className={`w-6 h-0.5 ${menuBgColor2} transition-all duration-300 ${hamburger ? 'transform -rotate-45 -translate-y-1.5' : ''}`}
                />
              </div>
              {/* Menu text with sliding animation */}
              <p className={`font-bold transition-transform duration-500 ${hamburger ? 'translate-x-2' : 'translate-x-0'}`}>Menu</p>
            </div>
          </div>

          <div>
            <Link href={"/"}>
              <img
                src={logoSrc}
                alt="logo"
              />
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

        {/* Mobile menu button with sliding animation */}
        <div
          className="md:hidden cursor-pointer relative w-fit h-full overflow-hidden"
          onClick={() => {
            setHamburger((prevVal) => !prevVal);
          }}
        >
          <div className={`flex ${menuBgColor} py-2 px-4 w-28 justify-between rounded-2xl items-center cursor-pointer ${menuTextColor}`}>
            <div className={`grid gap-1 transition-transform duration-500 ${hamburger ? '-translate-x-2' : 'translate-x-0'}`}>
              <div
                className={`w-6 h-0.5 ${menuBgColor2} transition-all duration-300 ${hamburger ? 'transform rotate-45 translate-y-1.5' : ''}`}
              />
              <div
                className={`w-6 h-0.5 ${menuBgColor2} transition-all duration-300 ${hamburger ? 'opacity-0' : ''}`}
              />
              <div
                className={`w-6 h-0.5 ${menuBgColor2} transition-all duration-300 ${hamburger ? 'transform -rotate-45 -translate-y-1.5' : ''}`}
              />
            </div>
            <p className={`font-bold transition-transform duration-500 ${hamburger ? 'translate-x-2' : 'translate-x-0'}`}>Menu</p>
          </div>
        </div>
      </header>

      <div
        className={`flex py-4 px-4 flex-col gap-2 fixed w-full md:w-[40%] lg:w-[30%] md:rounded-xl z-50 ${hamburger ? "top-[70px] h-[100vh] md:h-fit" : "top-[-400%] h-fit"} text-center text-black bg-white left-0`}
        style={{ transition: "all 0.5s ease-in" }}
      >
        {menuItems.map((item, index) => (
          <Link
            key={index}
            className={`flex justify-between hover:ease-in-out hover:duration-1000 cursor-pointer hover:bg-black hover:text-white rounded-2xl px-8 py-4 bg-[#F4F4F4] ${item.className ?? ''}`}
            onClick={() => setHamburger(prevVal => !prevVal)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            href={item.href}>
            {item.text}
            <FaLongArrowAltRight className={`text-2xl font-light transform ${hoveredIndex === index ? '-rotate-45 duration-500' : 'rotate-0'}`} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navigation;