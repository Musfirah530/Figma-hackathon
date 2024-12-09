import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Left Section: Logo */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/nike-logo.png" alt="Nike Logo" width={32} height={32} />
        </a>

        {/* Center Section: Navigation Links */}
        <ul className={`hidden md:flex space-x-8 rtl:space-x-reverse font-medium`}>
          <li><a href="#" className="text-gray-700 hover:text-blue-700">New & Featured</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-700">Men</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-700">Women</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-700">Kids</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-700">Sale</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-700">SNKRS</a></li>
        </ul>

        {/* Right Section: Search and Icons */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="hidden md:block border rounded px-3 py-2 text-sm"
          />
          <button><Image src="/favorite-icon.png" alt="Favorites" width={20} height={20} /></button>
          <button><Image src="/cart-icon.png" alt="Cart" width={20} height={20} /></button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden font-medium flex flex-col space-y-2 p-4 bg-gray-50 border-t border-gray-200">
          <li><a href="#" className="block py-2 px-3 text-gray-700 hover:text-blue-700">New & Featured</a></li>
          <li><a href="#" className="block py-2 px-3 text-gray-700 hover:text-blue-700">Men</a></li>
          <li><a href="#" className="block py-2 px-3 text-gray-700 hover:text-blue-700">Women</a></li>
          <li><a href="#" className="block py-2 px-3 text-gray-700 hover:text-blue-700">Kids</a></li>
          <li><a href="#" className="block py-2 px-3 text-gray-700 hover:text-blue-700">Sale</a></li>
          <li><a href="#" className="block py-2 px-3 text-gray-700 hover:text-blue-700">SNKRS</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
