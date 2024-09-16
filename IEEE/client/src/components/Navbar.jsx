/* eslint-disable react/prop-types */
import { useState } from 'react';
import logo from '../assets/madhack.png';
import { Link } from 'react-router-dom';


function Navbar({ scrollToSection }) {
    const [activeNav, setActiveNav] = useState('home'); 

    const handleNavClick = (section) => {
        setActiveNav(section);  // Set the clicked item as active
        scrollToSection(section);  // Scroll to section
      };
  return (
    <div className='fixed w-full z-20'>
    <header className="h-[90px] bg-black shadow-2xl transition-colors duration-300 ">
      <div className="text-white h-full container mx-auto flex items-center justify-between px-4">
        <div className="w-44 cursor-pointer -ml-20">
          <img src={logo} alt="Logo" />
        </div>
        <div className='hidden md:flex ml-48 space-x-6'>
          {/* Home Link */}
          <Link 
            onClick={() => handleNavClick('home')}
            className={`font-bold text-lg cursor-pointer px-4 py-1 rounded-full transition-all duration-300 
              ${activeNav === 'home' ? 'scale-110 text-black bg-white' : 'hover:text-black hover:bg-white'}`}
          >
            Home
          </Link>

          {/* About Link */}
          <Link 
            onClick={() => handleNavClick('about')}
            className={`font-bold text-lg cursor-pointer px-4 py-1 rounded-full transition-all duration-300 
              ${activeNav === 'about' ? 'scale-110 text-black bg-white' : 'hover:text-black hover:bg-white'}`}
          >
            About
          </Link>

          {/* Timeline Link */}
          <Link 
            onClick={() => handleNavClick('timeline')}
            className={`font-bold text-lg cursor-pointer px-4 py-1 rounded-full transition-all duration-300 
              ${activeNav === 'timeline' ? 'scale-110 text-black bg-white' : 'hover:text-black hover:bg-white'}`}
          >
            Timeline
          </Link>

          {/* Prizes Link */}
          <Link 
            onClick={() => handleNavClick('prizes')}
            className={`font-bold text-lg cursor-pointer px-4 py-1 rounded-full transition-all duration-300 
              ${activeNav === 'prizes' ? 'scale-110 text-black bg-white' : 'hover:text-black hover:bg-white'}`}
          >
            Prizes
          </Link>

          {/* FAQ Link */}
          <Link 
            onClick={() => handleNavClick('faq')}
            className={`font-bold text-lg cursor-pointer px-4 py-1 rounded-full transition-all duration-300 
              ${activeNav === 'faq' ? 'scale-110 text-black bg-white' : 'hover:text-black hover:bg-white'}`}
          >
            FAQ
          </Link>
          <Link
            onClick={() => handleNavClick('contact')}
            className={`font-bold text-lg cursor-pointer px-4 py-1 rounded-full transition-all duration-300 
              ${activeNav === 'contact' ? 'scale-110 text-black bg-white' : 'hover:text-black hover:bg-white'}`}
          >Contact
          </Link>
        </div>
      </div>
    </header>
  </div>
  )
}

export default Navbar