import React from "react";
import AdminSideBarItem from "./AdminSideBarItem";
import { MdSpaceDashboard, MdEventNote } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { IoCreateOutline } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";
import { usePathname } from "next/navigation";

function AdminSideBar({ isOpen }: { isOpen: boolean }) {
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
    <div
      className={`flex flex-col bg-primary h-full transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      } md:w-64`}
    >
      <div className="flex flex-col items-start justify-center gap-1 p-3">
        {adminPanel.map((admin, index) => (
          <AdminSideBarItem
            key={index}
            name={admin.name}
            icon={admin.icon}
            url={admin.url}
            selected={pathname === admin.url}
            isOpen={isOpen}
          />
        ))}
      </div>
    </div>
  );
}

export default AdminSideBar;
