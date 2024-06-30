import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 md:px-6 h-14 border-b border-muted">
      <Link className="flex items-center gap-2" to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
        </svg>
        
        <span className="text-lg font-semibold">Acme Inc</span>
      </Link>
      <nav className="hidden md:flex items-center gap-4">
        <NavLink to="/features">Features</NavLink>
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
};

