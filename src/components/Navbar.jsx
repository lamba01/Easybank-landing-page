// "use client";

// import { useState } from 'react';
// import Image from 'next/image';
// import Hamburger from '../../public/images/icon-hamburger.svg'
// import closeIcon from '../../public/images/icon-close.svg'
// import logo from '../../public/images/logo.svg'
// import Link from 'next/link';


// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="bg-white text-white p-6">
//       <div className=" flex justify-between items-center">
//       <Link href="/" className="flex-shrink-0">
//           <Image src={logo} alt="logo" />
//         </Link>
//         <div className="hidden md:flex space-x-4"> 
//         <Link href="#features" className='h-full' legacyBehavior>
//             <a className="text-grayishBlue pb-2 hover:text-darkBlue hover:border-b-2 hover:border-limeGreen">
//               Features
//             </a>
//         </Link>  
//         <Link href="#testimonials" legacyBehavior>
//             <a className="text-grayishBlue hover:text-darkBlue hover:border-b-2 hover:border-limeGreen">
//               Testimonials
//             </a>
//         </Link>  
//         <Link href="#Get started" legacyBehavior> 
//             <a className="text-grayishBlue hover:text-darkBlue hover:border-b-2 hover:border-limeGreen">
//               Get Started
//             </a>
//         </Link>   
//         </div>
//         <div className="md:hidden">
//           <button onClick={toggleMenu}>
//           <Image src={isOpen ? closeIcon : Hamburger} alt="Menu icon" width={24} height={24} />
//           </button>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="flex flex-col space-y-2 mt-4">  
//             <a className="hover:text-limeGreen" onClick={toggleMenu}>Features</a>            
//             <a className="hover:text-limeGreen" onClick={toggleMenu}>Testimonials</a>           
//             <a className="hover:text-limeGreen" onClick={toggleMenu}>Get Started</a>           
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;




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
    <header className="bg-white text-white p-6">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex-shrink-0">
          <Image src={logo} alt="logo" />
        </Link>
        <div className="hidden md:flex space-x-4"> 
          <Link href="#features" legacyBehavior>
            <a className="text-grayishBlue border-b-2 border-transparent hover:border-limeGreen hover:text-darkBlue transition-colors duration-300">
              Features
            </a>
          </Link>  
          <Link href="#testimonials" legacyBehavior>
            <a className="text-grayishBlue border-b-2 border-transparent hover:border-limeGreen hover:text-darkBlue transition-colors duration-300">
              Testimonials
            </a>
          </Link>  
          <Link href="#Get started" legacyBehavior> 
            <a className="text-grayishBlue border-b-2 border-transparent hover:border-limeGreen hover:text-darkBlue transition-colors duration-300">
              Get Started
            </a>
          </Link>   
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <Image src={isOpen ? closeIcon : Hamburger} alt="Menu icon" width={24} height={24} />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-2 mt-4">  
            <a className="hover:text-limeGreen" onClick={toggleMenu}>Features</a>            
            <a className="hover:text-limeGreen" onClick={toggleMenu}>Testimonials</a>           
            <a className="hover:text-limeGreen" onClick={toggleMenu}>Get Started</a>           
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
