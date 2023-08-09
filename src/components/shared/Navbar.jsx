import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-black bg-opacity-20 backdrop-blur-lg fixed top-0 w-full text-white z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="relative menu menu-sm dropdown-content mt-3 p-2 shadow bg-black backdrop-blur-lg z-50 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>Our Attorneys</a>
            </li>
            <li>
              <a>Practice Areas</a>
              <ul className="p-2">
                <li>
                  <a>Corporate and Commercial Law</a>
                </li>
                <li>
                  <a>Civil Law</a>
                </li>
                <li>
                  <a>Criminal Law</a>
                </li>
                <li>
                  <a>Intellectual Property Law</a>
                </li>
                <li>
                  <a>Labor Law</a>
                </li>
                <li>
                  <a>Banking and Finance Law</a>
                </li>
                <li>
                  <a>Administrative Law</a>
                </li>
                <li>
                  <a>Family Law</a>
                </li>
                <li>
                  <a>Tax Law</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          EquiJuris Associates
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>Our Attorneys</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Practice Areas</summary>
              <ul className="p-2 bg-black backdrop-blur-lg">
                <li>
                  <a>Corporate and Commercial Law</a>
                </li>
                <li>
                  <a>Civil Law</a>
                </li>
                <li>
                  <a>Criminal Law</a>
                </li>
                <li>
                  <a>Intellectual Property Law</a>
                </li>
                <li>
                  <a>Labor Law</a>
                </li>
                <li>
                  <a>Banking and Finance Law</a>
                </li>
                <li>
                  <a>Administrative Law</a>
                </li>
                <li>
                  <a>Family Law</a>
                </li>
                <li>
                  <a>Tax Law</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <a className="btn">Sign Up</a>
        <a className="btn">Sign In</a>
      </div>
    </div>
  );
};

export default Navbar;
