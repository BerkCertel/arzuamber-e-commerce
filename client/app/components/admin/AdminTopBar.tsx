import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function TopBar({ toggleSidebar }: { toggleSidebar: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-primary w-full p-4 flex items-center justify-between md:hidden">
      <button
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
          toggleSidebar(); // Sidebar'ı açıp kapatma
        }}
        className="text-white text-xl"
      >
        {isMenuOpen ? <IoMdClose size={24} /> : <FaBars size={24} />}
      </button>
      <h1 className="text-white font-bold text-xl">Admin Panel</h1>
    </div>
  );
}

export default TopBar;
