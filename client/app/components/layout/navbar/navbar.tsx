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
    { name: "Admin", url: "/admin" },
    { name: "Logout", url: "/logout" },
  ];

  const navLinks = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: "Blogs", url: "/blogs" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <header className="bg-primary text-mywhite">
      {/* Top Bar */}
      <div className="top-bar flex justify-center items-center bg-myblack text-sm py-2">
        Up to <span className="text-secondary px-1">50% Off</span> on New Season
        Products!!!
        <span className="text-thirdLight px-1 cursor-pointer hover:underline">
          Check it out!
        </span>
      </div>

      {/* Navbar */}
      <nav className="relative bg-primary">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="text-4xl font-serif font-bold underline underline-offset-4">
            <Link href="/">ARZUAMBER</Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="lg:hidden">
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="text-mywhite text-2xl focus:outline-none"
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
                  className="text-mywhite text-xl  hover:text-thirdLight transition-all duration-300"
                >
                  {link.name}
                </Link>
                <span className="absolute  -bottom-1 left-0 w-0 h-[2px] bg-mywhite transition-all duration-500 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <ul className="hidden lg:flex items-center justify-center gap-5">
            <li>
              <BiSearch
                size={38}
                className="cursor-pointer hover:text-thirdLight"
              />
            </li>
            <li className="relative">
              <Link href="/cart" className="flex items-center">
                <BsCart2
                  size={35}
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
                  size={32}
                  className="cursor-pointer hover:text-thirdLight"
                />
                <span className="absolute -top-2 -right-3 bg-red-600 text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  1
                </span>
              </Link>
            </li>
            <li>
              <div className="relative border rounded-md py-1 px-2">
                <div
                  className="flex items-center space-x-2 cursor-pointer hover:opacity-70"
                  onClick={() => setOpenDropdown(!openDropdown)}
                >
                  <FaUser size={20} />
                  <p className=" capitalize text-2xl">berk</p>
                </div>
                {openDropdown && (
                  <div className="absolute right-0 mt-2 bg-mywhite text-myblack shadow-xl rounded px-2 py-1 text-xl  font-thin  flex flex-col border text-center">
                    {menuItems.map((item, i) => (
                      <Link
                        key={i}
                        href={item.url}
                        className="px-2 py-1 hover:bg-gray-200 rounded"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {openMenu && (
          <ul className="lg:hidden justify-center items-center flex flex-col bg-primary text-mywhite p-4 space-y-4 border-thirdLight border-b-2 ">
            {navLinks.map((link) => (
              <li key={link.url}>
                <Link
                  href={link.url}
                  className="block text-lg hover:text-thirdLight underline underline-offset-4"
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
                  className="flex items-center space-x-2 cursor-pointer border rounded-md p-2 hover:opacity-60"
                  onClick={() => setOpenDropdown(!openDropdown)}
                >
                  <FaUser />
                  <p className=" capitalize tex">berk</p>
                </div>
                {openDropdown && (
                  <div className="absolute right-0 left-0 mt-2 bg-mywhite text-myblack shadow-xl rounded p-1 flex flex-col border-2 border-myblack">
                    {menuItems.map((item, i) => (
                      <Link
                        key={i}
                        href={item.url}
                        className="text-center  px-2 py-1 hover:bg-gray-200 rounded"
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
