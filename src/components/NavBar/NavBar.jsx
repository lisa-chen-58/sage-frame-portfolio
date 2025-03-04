import { useState, useEffect } from "react";
import { BackToTop } from "../BackToTop";

const NavBar = ({ pageInfo }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { header1, header2, header3 } = pageInfo;

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: header1, link: "#about" },
    { name: header2, link: "#projects" },
    { name: header3, link: "#contact" },
  ];

  return (
    <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 w-[85%] max-w-xl bg-[var(--color-quinary)] bg-opacity-95 backdrop-blur-md py-1.5 px-4 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.4)] flex justify-between items-center font-[var(--font-body)] z-50 transition-all duration-300">
      <ul className="flex flex-nowrap md:flex-nowrap justify-center items-center md:space-x-8 space-y-2 md:space-y-0 font-normal text-sm tracking-wider text-center w-full">
        {navItems.map((item, index) => (
          <li key={index} className="relative group transition-all duration-300 ease-in-out hover:scale-105 flex flex-col items-center text-center">
            <a
              href={item.link}
              className="text-[var(--color-primary)] transition-all duration-300 ease-in-out px-3 py-1 rounded-md hover:bg-white/10 hover:ring-2 hover:ring-[var(--color-quaternary)] hover:ring-opacity-50"
            >
              {item.name}
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[var(--color-quaternary)] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0"></span>
            </a>
          </li>
        ))}
      </ul>
      {showBackToTop && <BackToTop />}
    </nav>
  );
};

export default NavBar;
