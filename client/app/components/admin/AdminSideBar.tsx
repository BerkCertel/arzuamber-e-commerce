import React, { useState } from "react";
import { IoMdHome, IoMdStarOutline } from "react-icons/io";
import { MdSpaceDashboard, MdEventNote, MdCategory } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { TiDeleteOutline } from "react-icons/ti";
import { AiFillProduct } from "react-icons/ai";
import Link from "next/link";
import Button from "../general/Button";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const adminPanel = [
    {
      name: "General",
      icon: AiFillProduct,
      options: [
        {
          name: "Go to home",
          icon: IoMdHome,
          url: "/",
        },
        {
          name: "Summary",
          icon: MdSpaceDashboard,
          url: "/admin",
        },
        {
          name: "Orders",
          icon: MdEventNote,
          url: "/admin/orders",
        },
      ],
    },
    {
      name: "Products",
      icon: AiFillProduct,
      options: [
        {
          name: "All Product",
          icon: FaRegListAlt,
          url: "/admin/product",
        },
        {
          name: "Create Product",
          icon: IoMdStarOutline,
          url: "/admin/product/create",
        },
        {
          name: "Update Product",
          icon: RxUpdate,
          url: "/admin/product/update",
        },
        {
          name: "Delete Product",
          icon: TiDeleteOutline,
          url: "/admin/product/delete",
        },
      ],
    },
    {
      name: "Categories",
      icon: MdCategory,
      options: [
        {
          name: "All Category",
          icon: FaRegListAlt,
          url: "/admin/category",
        },
        {
          name: "Create Category",
          icon: IoMdStarOutline,
          url: "/admin/category/create",
        },
        {
          name: "Update Category",
          icon: RxUpdate,
          url: "/admin/category/update",
        },
        {
          name: "Delete Category",
          icon: TiDeleteOutline,
          url: "/admin/category/delete",
        },
      ],
    },
    {
      name: "Blogs",
      icon: IoMdStarOutline,
      options: [
        {
          name: "All Blog",
          icon: FaRegListAlt,
          url: "/admin/blog",
        },
        {
          name: "Create Blog",
          icon: IoMdStarOutline,
          url: "/admin/blog/create",
        },
        { name: "Update Blog", icon: RxUpdate, url: "/admin/blog/update" },
        {
          name: "Delete Blog",
          icon: TiDeleteOutline,
          url: "/admin/blog/delete",
        },
      ],
    },
  ];

  const handleItemClick = (itemName: string) => {
    setSelectedItem((prevSelectedItem) =>
      prevSelectedItem === itemName ? null : itemName
    );
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed h-10 w-10 top-7 right-6 md:top-2 md:right-12 z-50 lg:hidden p-2 text-white bg-primary border border-black rounded-md n"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      <div
        className={`fixed top-0 left-0 z-40 h-screen bg-primary transition-transform overflow-hidde ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full flex items-center justify-center w-full"
        } lg:translate-x-0 lg:static lg:flex lg:w-72`}
      >
        <div className="flex flex-col justify-center items-center w-72 h-full space-y-2">
          <div className="flex justify-center items-center flex-col gap-4">
            <Link
              href={`/`}
              className="text-white underline underline-offset-4 text-3xl font-bold font-serif"
            >
              ARZUAMBER
            </Link>
          </div>
          <nav className="flex flex-col items-center justify-between gap-3 mt-">
            <ul className="flex w-full flex-col items-center space-y-2">
              {adminPanel.map((admin) => (
                <div
                  key={admin.name}
                  onClick={() => handleItemClick(admin.name)}
                  className={`w-full block relative`}
                >
                  <Button
                    className={`${
                      selectedItem === admin.name
                        ? "bg-third text-mywhite z-50"
                        : ""
                    }`}
                    icon={admin.icon}
                    size="small"
                    text={admin.name}
                  />

                  {/* Mobile - toggle options visibility */}
                  {selectedItem === admin.name && admin.options.length > 0 && (
                    <div className="md:relative md:-top-2 md:left-5 mt-2 md:mt-0 flex flex-col items-center justify-center w-full z-1 bg-secondary rounded-md">
                      {admin.options.map((option) => (
                        <Link href={option.url} key={option.name}>
                          <Button
                            className="bg-secondary text-center hover:bg-fourth "
                            icon={option.icon}
                            text={option.name}
                            size="small"
                          />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideBar;
