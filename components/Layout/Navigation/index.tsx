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
    { href: "/career", text: "Help Center" },
    { href: "/career", text: "Become a Member", className: "text-red-600 hover:bg-[#ffba00] hover:text-black" }
  ];

  return (
    <>
      <header
        className={`fixed w-full flex items-center justify-between top-0 px-[20px] md:px-[25px] gap-x-[60px] pb-2 bg-black bg-opacity-15 xl:px-[97px] z-50`}
      >
        <Link href={"/"}>
          <img
            src={"/images/logowhite.png"}
            alt="logo"
            className='md:hidden'
          />
        </Link>

        <div className='  hidden md:flex justify-between w-full pt-[20px]'>
          <div
            className=" relative w-fit p-[4px]  overflow-hidden"
            onClick={() => {
              setHamburger((prevVal) => !prevVal);
            }}
          >
            <div className='flex cursor-pointer bg-white py-2 px-4 w-28 justify-between rounded-2xl items-center text-black '>
              <div>
              <div className=' grid gap-1'>
            <div
            className={`w-6 h-0.5 bg-black transition-transform duration-300 ${hamburger ? 'transform rotate-45 translate-y-1.5' : ''}`}
          />
          <div
            className={`w-6 h-0.5 bg-black transition-opacity duration-300 ${hamburger ? 'opacity-0' : ''}`}
          />
          <div
            className={`w-6 h-0.5 bg-black transition-transform duration-300 ${hamburger ? 'transform -rotate-45 -translate-y-1.5' : ''}`}
          />

            </div>
              </div>

              <p className=' '>  Menu</p>
            </div>
          </div>

          <div>
            <Link href={"/"}>
              <img
                src={"/images/logowhite.png"}
                alt="logo"
                className=''
              />
            </Link>
          </div>

          <nav className=" text-white ">
            <ul className=" grid grid-flow-col line-clamp-4 text-base items-center gap-x-[30px] justify-between">
              <li className=''>
                <Link
                  href={"/services"}
                  style={pathname.includes("/services") ? active : {}}
                >
                  Services
                </Link>
              </li>

              <span className=' h-4 w-1 border-2 border-r-white'></span>
              <li>
                <Link
                  href={"/career"}
                  style={pathname.includes("/career") ? active : {}}
                >
                  Career
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div
          className="md:hidden cursor-pointer relative w-fit p-[4px] pt-[20px] overflow-hidden"
          onClick={() => {
            setHamburger((prevVal) => !prevVal);
          }}
        >
          <div className='flex bg-white py-2 px-4 w-28 justify-between rounded-2xl items-center text-black cursor-pointer '>
            <div className=' grid gap-1'>
            <div
            className={`w-6 h-0.5 bg-black transition-transform duration-300 ${hamburger ? 'transform rotate-45 translate-y-1.5' : ''}`}
          />
          <div
            className={`w-6 h-0.5 bg-black transition-opacity duration-300 ${hamburger ? 'opacity-0' : ''}`}
          />
          <div
            className={`w-6 h-0.5 bg-black transition-transform duration-300 ${hamburger ? 'transform -rotate-45 -translate-y-1.5' : ''}`}
          />

            </div>

            <p className=' '>  Menu</p>
          </div>
        </div>
      </header>

      <div
        className={`flex py-4 px-4 flex-col gap-2 fixed w-full md:w-[40%] lg:w-[30%] md:rounded-xl z-50 ${hamburger ? "top-[70px] h-[100vh]" : "top-[-400%] h-fit"
          } text-center text-black bg-white left-0`}
        style={{ transition: "all 0.5s ease-in" }}
      >
        {menuItems.map((item, index) => (
          <Link
            key={index}
            className={`flex justify-between hover:ease-in-out hover:duration-1000 cursor-pointer hover:bg-black hover:text-white rounded-2xl px-8 py-4 bg-slate-300 ${item.className ?? ''}`}
            onClick={() => setHamburger(prevVal => !prevVal)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            href={item.href}>{item.text}
            
            <FaLongArrowAltRight className={`text-2xl font-light transform ${hoveredIndex === index ? '-rotate-45 duration-500' : 'rotate-0'}`} />
            </Link>
        ))}
      </div>
    </>
  );
};
