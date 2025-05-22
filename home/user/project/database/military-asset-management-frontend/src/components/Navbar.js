import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/purchases">Purchases</Link></li>
        <li><Link to="/transfers">Transfers</Link></li>
        <li><Link to="/assignments">Assignments</Link></li>
        <li><Link to="/expenditures">Expenditures</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
