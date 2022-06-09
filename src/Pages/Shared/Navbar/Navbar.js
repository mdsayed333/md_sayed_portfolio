import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const navMenu = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Project</a>
      </li>
      <li>
        <a>Resume</a>
      </li>
      <li>
        <a>Blogs</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );
  return (
    <div >
      <div class="navbar navbarBg">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow navbarBg rounded-box w-52"
            >
              {navMenu}
            </ul>
          </div>
          <a class=" normal-case text-2xl"><span className="">MOHAMMED</span>  <span>SAYED</span></a>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            {navMenu}
          </ul>
        </div>
        {/* <div class="navbar-end">
          <a class="btn">Get started</a>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
