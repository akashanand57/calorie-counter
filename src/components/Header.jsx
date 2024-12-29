import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Calorie Counter</h1>
      <button
        className="sm:hidden block text-white"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
          ></path>
        </svg>
      </button>
      <nav
        className={`${
          menuOpen ? 'block' : 'hidden'
        } sm:flex sm:items-center absolute sm:static top-14 left-0 sm:top-auto sm:left-auto w-full sm:w-auto bg-blue-600 sm:bg-transparent`}
      >
        <Link
          to="/"
          className="block sm:inline-block py-2 px-4 hover:underline"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/history"
          className="block sm:inline-block py-2 px-4 hover:underline"
          onClick={() => setMenuOpen(false)}
        >
          History
        </Link>
      </nav>
    </header>
  );
};

export default Header;
