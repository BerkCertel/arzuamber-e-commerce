import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { MdCategory } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import Heading from "../general/Heading";
import { FaRegListAlt, FaPlus, FaMinus } from "react-icons/fa";
import Link from "next/link";

const SideBar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const adminPanel = [
    {
      name: "General",
      icon: IoMdHome,
      options: [
        { name: "Go to Home", url: "/" },
        { name: "Summary", url: "/admin" },
        { name: "Orders", url: "/admin/orders" },
      ],
    },
    {
      name: "Products",
      icon: AiFillProduct,
      options: [
        { name: "All Product", url: "/admin/product" },
        { name: "Create Product", url: "/admin/product/create" },
        { name: "Update Product", url: "/admin/product/update" },
        { name: "Delete Product", url: "/admin/product/delete" },
      ],
    },
    {
      name: "Categories",
      icon: MdCategory,
      options: [
        { name: "All Category", url: "/admin/category" },
        { name: "Create Category", url: "/admin/category/create" },
        { name: "Update Category", url: "/admin/category/update" },
        { name: "Delete Category", url: "/admin/category/delete" },
      ],
    },
    {
      name: "Blogs",
      icon: FaRegListAlt,
      options: [
        { name: "All Blog", url: "/admin/blog" },
        { name: "Create Blog", url: "/admin/blog/create" },
        { name: "Update Blog", url: "/admin/blog/update" },
        { name: "Delete Blog", url: "/admin/blog/delete" },
      ],
    },
  ];

  const toggleMenu = (menuName: string) => {
    setOpenMenu((prevMenu) => (prevMenu === menuName ? null : menuName));
  };

  return (
    <div className="w-64 bg-secondary text-mywhite h-full p-4  ">
      <Heading text="Admin Panel" textSize="xl" color="white" hr />
      <ul className="space-y-4 mt-3">
        {adminPanel.map((menu) => (
          <li key={menu.name}>
            <div
              className="flex items-center justify-between cursor-pointer p-3 rounded-md hover:bg-third border- "
              onClick={() => toggleMenu(menu.name)}
            >
              <div className="flex items-center gap-3">
                <menu.icon size={20} />
                <span>{menu.name}</span>
              </div>
              <span>
                {openMenu === menu.name ? (
                  <FaMinus size={10} />
                ) : (
                  <FaPlus size={10} />
                )}
              </span>
            </div>
            {openMenu === menu.name && (
              <ul className="mt-2 ml-6 space-y-2 border-l rounded-md border-mywhite">
                {menu.options.map((option) => (
                  <li key={option.name}>
                    <Link
                      className="block p-2 rounded-md text-sm hover:bg-third ml-1"
                      href={option.url}
                    >
                      {option.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
