import '../index.css';
import { useState } from 'react';

function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuIsOpen(!mobileMenuIsOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-900 bg-[#0c0414]/70 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* testing */}
          {/* Logo Brand - Menggunakan warna solid putih dengan hover cyan */}
          <div className="flex-1 flex items-center justify-start">
            <a href="#" className="text-xl font-bold tracking-wider text-white hover:text-cyan-400 transition-colors">
              Tik-Down
            </a>
          </div>

          {/* Desktop Navigation Link Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <a 
              href="#" 
              className="text-sm font-medium text-cyan-400 border-b-2 border-cyan-400 px-1 py-1"
            >
              TikVideo
            </a>
            {/* <a 
              href="#" 
              className="text-sm font-medium text-gray-400 hover:text-white hover:border-b-2 hover:border-purple-500 px-1 py-1 transition-all"
            >
              TikAudio
            </a> */}
          </div>

          {/* Right Action Button */}
    
          
          {/* Toggle Button Hamburger for Mobile Screen */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuIsOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`lg:hidden transition-all duration-300 ${mobileMenuIsOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'} overflow-hidden bg-[#0c0414]/95 border-b border-gray-950 px-4`}>
        <div className="flex flex-col gap-2 py-3">
          <a 
            href="#" 
            className="px-4 py-2.5 rounded-xl text-sm font-medium bg-white/5 text-cyan-400"
          >
            TikVideo
          </a>
          {/* <a 
            href="#" 
            className="px-4 py-2.5 rounded-xl text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-all"
          >
            TikAudio
          </a> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;