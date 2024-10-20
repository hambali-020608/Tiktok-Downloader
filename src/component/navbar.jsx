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
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a className='h6'>TikVideo</a></li>
      <li>
        <a href="">TikAudio</a>
      </li>
    </ul>
  </div>
</div>
    </>
  );
}

export default Navbar;
