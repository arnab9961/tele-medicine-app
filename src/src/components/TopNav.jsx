import React from 'react';
import { Link } from 'react-router-dom';
import Theme from './Theme';

function TopNav() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 flex items-center">
        {/* Logo */}
        <img className="rounded-full h-28 w-28 mr-4" src="logo.jpg" alt="TeleMedicine Logo" />
        
        {/* Title with margin */}
        <Link to="/">
          <p className="btn font-bold mr-4">TeleMedicine</p>
        </Link>
        
        {/* Animated circle */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      </div>
      <div className="flex-none gap-2">
        <div>
          <Theme />
        </div>
        {/* Search input */}
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        {/* User dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="User Avatar"
                src="https://global.discourse-cdn.com/business6/uploads/zoomdeveloper/original/3X/b/3/b383df5a391544eba871146584fe42a3c0d08489.png"
              />
            </div>
          </div>
          <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <Link to="/profile" className="justify-between">
                Profile <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
