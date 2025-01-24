"use client";

import React, { useState } from "react";
import { FaHeart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const menuItems = [
    { name: "Profile", url: "/profile" },
    { name: "Sign Up", url: "/register" },
    { name: "Log In", url: "/login" },
    { name: "Admin", url: "/admin" },
    { name: "Logout", url: "/logout" },
  ];

  const navLinks = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: "Blogs", url: "/blogs" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <header className=" text-mywhite z-50">
      {/* Top Bar */}
      <div className="top-bar hidden md:flex justify-center items-center bg-myblack text-sm py-2">
        Up to <span className="text-fourth px-1">50% Off</span> on New Season
        Products!!!
        <span className="text-fourth px-1 cursor-pointer hover:underline">
          Check it out!
        </span>
      </div>

      {/* Navbar */}
      <nav className="relative bg-primary border-b-2">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="text-2xl md:text-4xl font-serif font-bold underline underline-offset-4">
            <Link href="/">ARZUAMBER</Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="lg:hidden flex items-center justify-center">
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="text-mywhite text-2xl focus:outline-none border rounded-md p-1 "
            >
              {openMenu ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Links (Desktop) */}
          <ul
            className={`hidden lg:flex gap-8 text-base font-semibold transition-all duration-300`}
          >
            {navLinks.map((link) => (
              <li key={link.url} className="relative group">
                <Link
                  href={link.url}
                  className="text-mywhite text-md  hover:text-secondary transition-all duration-300"
                >
                  {link.name}
                </Link>
                <span className="absolute  -bottom-1 left-0 w-0 h-[2px] bg-secondary transition-all duration-500 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <ul className="hidden lg:flex items-center justify-center gap-5">
            <li>
              <BiSearch
                size={30}
                className="cursor-pointer hover:text-thirdLight"
              />
            </li>
            <li className="relative">
              <Link href="/cart" className="flex items-center">
                <BsCart2
                  size={30}
                  className="cursor-pointer hover:text-thirdLight"
                />
                <span className="absolute -top-2 -right-2 bg-red-600 text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  1
                </span>
              </Link>
            </li>
            <li className="relative">
              <Link href="/favorites" className="flex items-center">
                <FaHeart
                  size={28}
                  className="cursor-pointer hover:text-thirdLight"
                />
                <span className="absolute -top-2 -right-3 bg-red-600 text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  1
                </span>
              </Link>
            </li>
            <li
              className="relative flex flex-col space-y-9"
              onMouseEnter={() => setOpenDropdown(true)}
              onMouseLeave={() => setOpenDropdown(false)}
            >
              <div className="border rounded-lg py-1 px-2 hover:border-thirdLight transition duration-300 hover:text-thirdLight">
                <div className="flex items-center space-x-2 cursor-pointer">
                  <FaUser size={20} />
                  <p className="capitalize text-xl">berk</p>
                </div>
              </div>
              {openDropdown && (
                <div className="absolute left-0 right-0 p-1 bg-mywhite text-myblack shadow-xl rounded text-md font-thin flex flex-col border text-center">
                  {menuItems.map((item, i) => (
                    <Link
                      key={i}
                      href={item.url}
                      className="hover:bg-gray-200  rounded px-2 py-1"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {openMenu && (
          <ul className="lg:hidden justify-center items-center flex flex-col bg-fourth border-t-2 text-mywhite p-4 space-y-4 border-b-2 ">
            {navLinks.map((link) => (
              <li key={link.url}>
                <Link
                  href={link.url}
                  className="block text-lg hover:text-thirdLight underline underline-offset-4 bg  px-2 rounded-md"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <div className="flex items-center gap-4 mt-4">
              <BiSearch className="text-3xl cursor-pointer hover:text-thirdLight" />
              <BsCart2 className="text-3xl cursor-pointer hover:text-thirdLight" />
              <FaHeart className="text-2xl cursor-pointer hover:text-thirdLight" />
            </div>
            <li>
              <div className="relative">
                <div
                  className="flex items-center space-x-2 cursor-pointer border rounded-md p-2 hover:opacity-60 hover:border-secondary"
                  onClick={() => setOpenDropdown(!openDropdown)}
                >
                  <FaUser />
                  <p className=" capitalize tex">berk</p>
                </div>
                {openDropdown && (
                  <div className="absolute right-0 left-0 mt-1 bg-fourth text-mywhite shadow-xl rounded p-2 flex flex-col space-y-2 border p z-50">
                    {menuItems.map((item, i) => (
                      <Link
                        key={i}
                        href={item.url}
                        className="text-center hover:bg-secondary rounded"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
