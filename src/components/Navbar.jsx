"use client";

import { useState } from 'react';
import Image from 'next/image';
import Hamburger from '../../public/images/icon-hamburger.svg'
import closeIcon from '../../public/images/icon-close.svg'
import logo from '../../public/images/logo.svg'
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <header className="bg-white text-white h-20 px-6 flex justify-between items-center md:block md:p-6">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex-shrink-0">
          <Image src={logo} alt="logo" />
        </Link>
        <div className="hidden md:flex space-x-4"> 
          <Link href="#Home" legacyBehavior>
            <a className="text-grayishBlue border-b-2 border-transparent hover:border-limeGreen hover:text-darkBlue transition-colors duration-300">
              Home
            </a>
          </Link>  
          <Link href="#About" legacyBehavior>
            <a className="text-grayishBlue border-b-2 border-transparent hover:border-limeGreen hover:text-darkBlue transition-colors duration-300">
              About
            </a>
          </Link>  
          <Link href="#Contact" legacyBehavior> 
            <a className="text-grayishBlue border-b-2 border-transparent hover:border-limeGreen hover:text-darkBlue transition-colors duration-300">
              Contact
            </a>
          </Link>   
          <Link href="#Blog" legacyBehavior> 
            <a className="text-grayishBlue border-b-2 border-transparent hover:border-limeGreen hover:text-darkBlue transition-colors duration-300">
              Blog
            </a>
          </Link>  
          <Link href="#Careers" legacyBehavior> 
            <a className="text-grayishBlue border-b-2 border-transparent hover:border-limeGreen hover:text-darkBlue transition-colors duration-300">
              Careers
            </a>
          </Link>    
        </div>
        <button className="hidden md:block bg-gradient-to-r from-limeGreen to-brightCyan text-white text-sm px-6 py-2 rounded-2xl hover:opacity-50">Request Invite</button>

      </div>
      <div className="md:hidden">
          <button onClick={toggleMenu}>
            <Image src={isOpen ? closeIcon : Hamburger} alt="Menu icon" width={24} height={24} />
          </button>
        </div>

    </header>
    {isOpen && (
        <div className="md:hidden relative mx-auto">
          {/* <div className="absolute inset-0 bg-black opacity-50 h-screen z-10"></div> */}
          <div className="flex absolute left-1/2 transform -translate-x-1/2 z-20 rounded py-4 w-4/5 bg-white flex-col items-center space-y-2 mt-4">  
            <a className="text-grayishBlue hover:text-limeGreen" onClick={toggleMenu}>Home</a>            
            <a className="text-grayishBlue hover:text-limeGreen" onClick={toggleMenu}>About </a>           
            <a className="text-grayishBlue hover:text-limeGreen" onClick={toggleMenu}>Contact</a>      
            <a className="text-grayishBlue hover:text-limeGreen" onClick={toggleMenu}>Blog</a>           
            <a className="text-grayishBlue hover:text-limeGreen" onClick={toggleMenu}>Careers</a>                
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
