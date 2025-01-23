import React, { useState } from "react";
import { IoMdHome, IoMdStarOutline } from "react-icons/io";
import { MdSpaceDashboard, MdEventNote, MdCategory } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { TiDeleteOutline } from "react-icons/ti";
import { AiFillProduct } from "react-icons/ai";
import Link from "next/link";
import Button from "../general/Button";
import { FaBars, FaTimes } from "react-icons/fa";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const adminPanel = [
    { name: "Go to home", icon: IoMdHome, url: "/", options: [] },
    { name: "Summary", icon: MdSpaceDashboard, url: "/admin", options: [] },
    { name: "Orders", icon: MdEventNote, url: "/admin/orders", options: [] },
    {
      name: "Product",
      icon: AiFillProduct,
      url: "/admin/product",
      options: [
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
      name: "Category",
      icon: MdCategory,
      url: "/admin/category",
      options: [
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
      name: "Blog",
      icon: IoMdStarOutline,
      url: "/admin/blog",
      options: [
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

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed h-10 w-10 top-7 right-6 md:top-2 md:right-12 z-50 lg:hidden p-2 text-white bg-primary border border-black rounded-md  "
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      <div
        className={`fixed top-0 left-0 z-40  h-full bg-primary  transition-transform ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full flex items-center justify-center w-full"
        } lg:translate-x-0 lg:static lg:flex lg:w-72`}
      >
        <div className="flex flex-col justify-center items-center w-72 h-full ">
          <div className="flex justify-center items-center flex-col gap-4">
            <Link
              href={`/`}
              className="text-white underline underline-offset-4 text-3xl font-bold font-serif"
            >
              ARZUAMBER
            </Link>
          </div>
          <nav className="flex flex-col  items-center w-[90%] justify-between gap-3 p-2">
            <ul className="flex w-full flex-col items-center space-y-2 ">
              {adminPanel.map((admin) => (
                <div
                  key={admin.name}
                  onMouseEnter={() => setHoveredItem(admin.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() =>
                    setSelectedItem(
                      selectedItem === admin.name ? null : admin.name
                    )
                  }
                  className={`w-full block z-10`}
                >
                  <Link href={admin.url}>
                    <Button
                      primary
                      animation
                      icon={admin.icon}
                      size="small"
                      text={admin.name}
                    />
                  </Link>
                  {(hoveredItem === admin.name ||
                    selectedItem === admin.name) &&
                    admin.options.length > 0 && (
                      <div className="flex flex-col items-start justify-center mt-2  gap-2 w-full ">
                        {admin.options.map((option) => (
                          <Link href={option.url} key={option.name}>
                            <Button
                              primary
                              animation
                              icon={option.icon}
                              size="small"
                              text={option.name}
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
