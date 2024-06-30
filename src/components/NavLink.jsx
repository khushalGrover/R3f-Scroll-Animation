import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ to, children }) => {
  return (
    <Link className="text-sm font-medium hover:underline underline-offset-4" to={to}>
      {children}
    </Link>
  );
};

export default NavLink;

