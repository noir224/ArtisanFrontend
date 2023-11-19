import React, { useState, useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const navRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      if (!nav) {
        handleNav(); }
    }
  };

  return (
    
    <div className='flex justify-between items-center h-14 max-w-[1920px] mx-auto px-4 text-gunmetal '>
      {/* Computer menu */}
      <h1 className='w-full text-2xl font-bold text-gunmetal font-artsy tracking-wide'>Artisan Brushes</h1>
      <ul className='hidden md:flex'>
        <li onClick={() => scrollToSection('Hero')} className='p-4 font-typewriter-light hover:font-typewriter-lightitalic hover:font-semibold hover:border-b border-sage'>
          Home
        </li>
        <li onClick={() => scrollToSection('Products')} className='p-4 font-typewriter-light hover:font-typewriter-lightitalic hover:font-semibold hover:border-b border-sage'>
          Products
        </li>
        <li onClick={() => scrollToSection('Gallery')} className='p-4 font-typewriter-light hover:font-typewriter-lightitalic hover:font-semibold hover:border-b border-sage'>
          Gallery
        </li>
        <li onClick={() => scrollToSection('About')} className='p-4 font-typewriter-light hover:font-typewriter-lightitalic hover:font-semibold hover:border-b border-sage'>
          About
        </li>
        <li onClick={() => scrollToSection('Footer')} className='p-4 font-typewriter-light hover:font-typewriter-lightitalic hover:font-semibold hover:border-b border-sage'>
          Contact
        </li>
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div ref={navRef} className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-raisinblack bg-gunmetal ease-in-out duration-500 text-background' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-2xl font-bold text-[#cacfd6] font-artsy py-5 px-4 tracking-wide'>Artisan Brushes</h1>
        <ul className='uppercase p-4 font-typewriter-bold'>
          <li onClick={() => scrollToSection('Hero')} className='p-3 border-b border-gray-600 text-sm'>
            Home
          </li>
          <li onClick={() => scrollToSection('Products')} className='p-3 border-b border-gray-600 text-sm'>
            Products
          </li>
          <li onClick={() => scrollToSection('Gallery')} className='p-3 border-b border-gray-600 text-sm'>
            Gallery
          </li>
          <li onClick={() => scrollToSection('About')} className='p-3 border-b border-gray-600 text-sm'>
            About
          </li>
          <li onClick={() => scrollToSection('Footer')} className='p-3 text-sm'>
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;