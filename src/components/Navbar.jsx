import earthImg from '../assets/earth.png'
import React, {useEffect} from 'react';
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import { Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { navLinks } from '../constants';
import { useState } from 'react';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const isScrolled = window.scrollY > 10;
          if (isScrolled !== scrolled) {
            setScrolled(!scrolled);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [scrolled]);
  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 py-2 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-navcolor' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[80px]">
        <div className="flex items-center">
          <img src={earthImg} alt="earth" className="w-[30px] h-[30px] md:w-[60px] md:h-[60px]" />
          <div className="ml-4">
            <h1 className="sm:text-xl text-xs font-bold text-white">Space Snippets</h1>
            <p className="sm:text-md text-xs text-gray-300 italic">Explore the universe</p>
          </div>
        </div>
        <ul className="hidden sm:flex items-center space-x-10">
          {navLinks.map((nav) => (
            <li key={nav.id} className="font-poppins font-normal cursor-pointer text-[30px] text-white">
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[20px] h-[20px] xs:w-[30px] xs:h-[30px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>
      </div>
      {toggle && (
        <div className="absolute top-full right-2 bg-black-gradient px-4 py-6 rounded-xl space-y-4 sm:hidden">
          <ul className="flex flex-col items-center space-y-4">
            {navLinks.map((nav) => (
              <li key={nav.id} className="font-poppins font-normal cursor-pointer text-[16px] text-white">
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar