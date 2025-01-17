"use client";

import AdminSideBarItem from "./AdminSideBarItem";
import { MdSpaceDashboard, MdEventNote } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { IoCreateOutline } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";

import { usePathname } from "next/navigation";

function AdminSideBar() {
  const pathname = usePathname();

  const adminPanel = [
    {
      name: "Summary",
      icon: MdSpaceDashboard,
      url: "/admin",
    },
    {
      name: "Create Product",
      icon: IoCreateOutline,
      url: "/admin/create",
    },
    {
      name: "Update Product",
      icon: RxUpdate,
      url: "/admin/update",
    },
    {
      name: "Update Delete",
      icon: TiDeleteOutline,
      url: "/admin/delete",
    },
    {
      name: "Orders",
      icon: MdEventNote,
      url: "/admin/orders",
    },
  ];

  return (
    <div className="border rounded-md w-1/2 md:w-full h-full flex justify-center md:justify-around flex-col items-center md:flex-row space-y-2 py-3">
      {adminPanel.map((admin, i) => {
        return (
          <AdminSideBarItem
            key={i}
            name={admin.name}
            icon={admin.icon}
            url={admin.url}
            selected={pathname == admin.url}
          />
        );
      })}
    </div>
  );
}

export default AdminSideBar;
