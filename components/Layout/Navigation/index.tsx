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
  const menuRef = useRef<HTMLUListElement | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setHamburger(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const menuItems = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/services", text: "Listing" },
    { href: "/career", text: "Help Center" },
    { href: "/career", text: "Become a Member", className: "text-red-600 hover:bg-[#FFBA00] hover:text-black" }
  ];

  return (
    <>
      <header
        className={`fixed w-full flex items-center justify-between top-0 px-[20px] md:px-[25px] gap-x-[60px] bg-transparent xl:px-[97px] z-50`}
      >
        <Link href={"/"}>
          <img
            src={"/images/logowhite.png"}
            alt="logo"
            className='md:hidden'
          />
        </Link>

        <div className=' hidden md:flex justify-between w-full pt-[20px]'>
          <div
            className=" relative w-fit p-[4px]  overflow-hidden"
            onClick={() => {
              setHamburger((prevVal) => !prevVal);
            }}
          >
            <div className='flex bg-white py-2 px-4 w-28 justify-between rounded-2xl items-center text-black '>
              <div>
                <div
                  className={` w-[26px] h-[2px]  rounded-[15px] bg-black absolute z-50 ${hamburger ? "top-[50%] h-[8px]" : "top-[47%]"
                    } left-4`}
                  style={
                    hamburger
                      ? { transform: "rotate(45deg)", transition: "all 0.3s linear" }
                      : { transition: "all 0.3s linear" }
                  }
                ></div>
                <div
                  className="w-[26px] h-[2px]  rounded-[15px] bg-black absolute top-[59%] left-4"
                  style={
                    hamburger
                      ? { left: "100%", transition: "all 0.3s linear" }
                      : { transition: "all 0.3s linear" }
                  }
                ></div>
                <div
                  className={`w-[26px] h-[2px] rounded-[15px] bg-black absolute ${hamburger ? "top-[50%]" : "top-[71%]"
                    } left-4`}
                  style={
                    hamburger
                      ? { transform: "rotate(-45deg)", transition: "all 0.3s linear" }
                      : { transition: "all 0.3s linear" }
                  }
                ></div>
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
          className="md:hidden relative w-fit p-[4px] pt-[20px] overflow-hidden"
          onClick={() => {
            setHamburger((prevVal) => !prevVal);
          }}
        >
          <div className='flex bg-white py-2 px-4 w-28 justify-between rounded-2xl items-center text-black '>
            <div>
              <div
                className={` w-[26px] h-[2px]  rounded-[15px] bg-black absolute z-50 ${hamburger ? "top-[50%] h-[8px]" : "top-[47%]"
                  } left-4`}
                style={
                  hamburger
                    ? { transform: "rotate(45deg)", transition: "all 0.3s linear" }
                    : { transition: "all 0.3s linear" }
                }
              ></div>
              <div
                className="w-[26px] h-[2px]  rounded-[15px] bg-black absolute top-[59%] left-4"
                style={
                  hamburger
                    ? { left: "100%", transition: "all 0.3s linear" }
                    : { transition: "all 0.3s linear" }
                }
              ></div>
              <div
                className={`w-[26px] h-[2px] rounded-[15px] bg-black absolute ${hamburger ? "top-[50%]" : "top-[71%]"
                  } left-4`}
                style={
                  hamburger
                    ? { transform: "rotate(-45deg)", transition: "all 0.3s linear" }
                    : { transition: "all 0.3s linear" }
                }
              ></div>
            </div>

            <p className=' '>  Menu</p>
          </div>
        </div>
      </header>

      <ul
        ref={menuRef}
        className={`flex py-4 px-4 flex-col gap-2 fixed w-full md:w-[40%] lg:w-[30%] rounded-xl z-50 ${hamburger ? "top-[70px] h-[100vh]" : "top-[-400%] h-fit"
          } text-center text-black bg-white left-0`}
        style={{ transition: "all 0.5s ease-in" }}
      >
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`flex justify-between hover:ease-in-out hover:duration-1000 cursor-pointer hover:bg-black hover:text-white rounded-2xl px-8 py-4 bg-slate-300 ${item.className ?? ''}`}
            onClick={() => setHamburger(prevVal => !prevVal)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href={item.href}>{item.text}</Link>
            <FaLongArrowAltRight className={`text-2xl font-light transform ${hoveredIndex === index ? '-rotate-45 duration-500' : 'rotate-0'}`} />
          </li>
        ))}
      </ul>
    </>
  );
};
