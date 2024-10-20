import '../index.css';
import { useState } from 'react';

function Navbar({ children }) {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuIsOpen(!mobileMenuIsOpen);
  };

  return (
    <>
      <div className="navbar bg-neutral text-neutral-content">
        <div className="flex-2">
          <a className="h1 ps-6">Tik-Down</a>
        </div>
        
        {/* Toggle Button for Mobile */}
        <div className="lg:hidden flex-none">
          <button
            onClick={toggleMenu}
            className="px-2 py-1 text-neutral-content hover:text-neutral-focus"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Horizontal Menu for Larger Screens */}
        <div className="hidden lg:flex flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a className='h6'>TikVideo</a></li>
            <li><a href="">TikAudio</a></li>
          </ul>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`lg:hidden ${mobileMenuIsOpen ? 'block' : 'hidden'} bg-neutral`}>
        <ul className="menu menu-vertical px-4 py-2">
          <li><a className='h6 text-white'>TikVideo</a></li>
          <li><a href="" className='text-white'>TikAudio</a></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
