"use client";

import AdminSideBarItem from "./AdminSideBarItem";
import { MdSpaceDashboard, MdEventNote } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { IoCreateOutline } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";
import { usePathname } from "next/navigation";

function AdminTopBar() {
  const pathname = usePathname();

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
    <nav className="w-full bg-gray-100 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-4 px-4 py-2">
        {adminPanel.map((admin, index) => (
          <AdminSideBarItem
            key={index}
            name={admin.name}
            icon={admin.icon}
            url={admin.url}
            selected={pathname === admin.url}
          />
        ))}
      </div>
    </nav>
  );
}

export default AdminTopBar;
