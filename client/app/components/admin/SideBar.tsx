"use client";

import React from "react";
import { MdSpaceDashboard, MdEventNote } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { IoCreateOutline } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";
import Link from "next/link";
import Button from "../general/Button";

function SideBar() {
  const adminPanel = [
    { name: "Summary", icon: MdSpaceDashboard, url: "/admin" },
    { name: "Orders", icon: MdEventNote, url: "/admin/orders" },
    {
      name: "Create Product",
      icon: IoCreateOutline,
      url: "/admin/product/create",
    },
    { name: "Update Product", icon: RxUpdate, url: "/admin/product/update" },
    {
      name: "Delete Product",
      icon: TiDeleteOutline,
      url: "/admin/product/delete",
    },
    {
      name: "Create Category",
      icon: IoCreateOutline,
      url: "/admin/category/create",
    },
    { name: "Update Category", icon: RxUpdate, url: "/admin/category/update" },
    {
      name: "Delete Category",
      icon: TiDeleteOutline,
      url: "/admin/category/delete",
    },
    { name: "Create Blog", icon: IoCreateOutline, url: "/admin/blog/create" },
    { name: "Update Blog", icon: RxUpdate, url: "/admin/blog/update" },
    { name: "Delete Blog", icon: TiDeleteOutline, url: "/admin/blog/delete" },
  ];

  return (
    <div className="hidden lg:flex h-screen w-72 bg-gray-800 border-r-2">
      <div className="flex flex-col gap-4 justify-center items-center w-full">
        <div className="mx-auto ml-14 justify-center items-center mt-12">
          <Link href={`/`} className="text-white underline underline-offset-4">
            ARZUAMBER
          </Link>
        </div>
        <nav className="flex flex-col w-[90%] h-full justify-between md:flex gap-3">
          <ul className="hidden md:flex w-full flex-col items-start gap-4 mt-14">
            {adminPanel.map((admin) => (
              <Link href={admin.url} key={admin.name}>
                <Button
                  primary
                  animation
                  icon={admin.icon}
                  size="small"
                  text={admin.name}
                />
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
