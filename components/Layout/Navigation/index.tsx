"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const activeStyle = {
  fontWeight: 700,
  paddingBottom: "7px",
  borderBottom: "1px solid black",
};

interface MenuItem {
  href: string;
  text: string;
  className?: string;
}

const menuItems: MenuItem[] = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/apartments", text: "Listing" },
  { href: "/contact", text: "Help Center" },
  { href: "/career", text: "Become a Member", className: "text-red-600 hover:bg-[#ffba00] hover:text-black" },
];

export const Navigation = () => {
  const [hamburger, setHamburger] = useState(false);
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  const isContactOrHomePage = pathname === "/contact" || pathname === "/";

  const styles = {
    logoSrc: isContactOrHomePage ? "/images/logowhite.svg" : "/images/logoblack.svg",
    menuBgColor: isContactOrHomePage ? "bg-white" : "bg-black",
    menuTextColor: isContactOrHomePage ? "text-black" : "text-white",
    menuBgColor2: isContactOrHomePage ? "bg-black" : "bg-white",
    signupHelp: isContactOrHomePage ? "text-white" : "text-black",
    signupHelpDivider: isContactOrHomePage ? "border-r-white border-l-white" : "border-r-black border-l-black",
    navBg: isContactOrHomePage ? "bg-black" : "bg-white",
  };

  const toggleHamburger = () => setHamburger((prev) => !prev);

  return (
    <>
      <header
        className={`${styles.navBg} fixed w-full flex items-center justify-between top-0 px-5 md:px-6 xl:px-[97px] py-2 md:py-0 z-50`}
      >
        <Link href="/">
          <img src={styles.logoSrc} alt="logo" className="md:hidden" />
        </Link>

        <div className="hidden md:flex justify-between w-full py-3 items-center">
          <div
            className={`relative w-fit overflow-hidden transition-all duration-300 ease-in-out ${hamburger ? "w-64" : "w-28"}`}
            onClick={toggleHamburger}
          >
            <div
              className={`flex py-2 cursor-pointer px-4 gap-2 rounded-2xl items-center ${styles.menuBgColor} ${styles.menuTextColor} transition-all duration-300 ease-in-out ${hamburger ? "justify-between w-full" : "justify-between"}`}
            >
              <div className="grid gap-1">
                <div
                  className={`w-6 h-0.5 ${styles.menuBgColor2} transition-all duration-300 ${hamburger ? "transform rotate-45 translate-y-1.5" : ""}`}
                />
                <div
                  className={`w-6 h-0.5 ${styles.menuBgColor2} transition-all duration-300 ${hamburger ? "opacity-0" : ""}`}
                />
                <div
                  className={`w-6 h-0.5 ${styles.menuBgColor2} transition-all duration-300 ${hamburger ? "transform -rotate-45 -translate-y-1.5" : ""}`}
                />
              </div>
              <p className="font-bold">Menu</p>
            </div>
          </div>

          <Link href="/">
            <img src={styles.logoSrc} alt="logo" />
          </Link>

          <nav>
            <ul className={`grid grid-flow-col text-base items-center gap-x-8 ${styles.signupHelp}`}>
              <li>
                <Link href="/services" style={pathname.includes("/services") ? activeStyle : {}} className="font-bold">
                  Help Center
                </Link>
              </li>
              <span className={`h-4 ${styles.signupHelpDivider} w-1 border-2`}></span>
              <li>
                <Link href="/career" style={pathname.includes("/career") ? activeStyle : {}} className="font-bold">
                  Signup
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div
          className={`md:hidden cursor-pointer relative overflow-hidden transition-all duration-300 ease-in-out ${hamburger ? "w-64" : "w-28"}`}
          onClick={toggleHamburger}
        >
          <div
            className={`flex py-2  px-4 rounded-2xl items-center ${styles.menuBgColor} ${styles.menuTextColor} transition-all duration-300 ease-in-out ${hamburger ? "justify-between w-full" : "justify-between"}`}
          >
            <div className="grid gap-1 ">
              <div
                className={`w-6 h-0.5 ${styles.menuBgColor2} transition-all duration-300 ${hamburger ? "transform rotate-45 translate-y-1.5" : ""}`}
              />
              <div
                className={`w-6 h-0.5 ${styles.menuBgColor2} transition-all duration-300 ${hamburger ? "opacity-0" : ""}`}
              />
              <div
                className={`w-6 h-0.5 ${styles.menuBgColor2} transition-all duration-300 ${hamburger ? "transform -rotate-45 -translate-y-1.5" : ""}`}
              />
            </div>
            <p className="font-bold">Menu</p>
          </div>
        </div>
      </header>

      <div
        className={`fixed h-full md:h-fit w-full md:w-[40%] lg:w-[30%] md:rounded-xl z-50 transition-all duration-300 ease-in-out ${hamburger ? "top-[55px] pt-4 md:pt-0 md:top-[65px] opacity-100" : "top-[-100%] opacity-0"} text-center bg-white left-0`}
      >
        <div className="flex flex-col gap-2 p-4">
          {menuItems.map((item, index) => (
            <Link
              key={item.href}
              className={`flex justify-between items-center transition-all duration-300 ease-in-out hover:bg-black hover:text-white rounded-2xl px-8 py-4 bg-[#F4F4F4] ${item.className ?? ""}`}
              onClick={() => setHamburger(false)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              href={item.href}
            >
              {item.text}
              <FaLongArrowAltRight className={` transition-transform duration-300 ease-in-out ${hoveredIndex === index ? "-rotate-45 text-white" : "rotate-0"} `}/>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
