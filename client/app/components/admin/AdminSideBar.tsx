"use client";

import AdminSideBarItem from "./AdminSideBarItem";
import { MdSpaceDashboard, MdEventNote } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { IoCreateOutline } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";
import { usePathname } from "next/navigation";

function AdminSideBar() {
  const pathname = usePathname();

  // Admin panel verileri
  const adminPanel = [
    {
      title: "Dashboard",
      items: [{ name: "Summary", icon: MdSpaceDashboard, url: "/admin" }],
    },
    {
      title: "Products",
      items: [
        {
          name: "Create Product",
          icon: IoCreateOutline,
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
      title: "Categories",
      items: [
        {
          name: "Create Category",
          icon: IoCreateOutline,
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
      title: "Blogs",
      items: [
        {
          name: "Create Blog",
          icon: IoCreateOutline,
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
    {
      title: "Orders",
      items: [{ name: "Orders", icon: MdEventNote, url: "/admin/orders" }],
    },
  ];

  return (
    <div className="border rounded-lg w-full md:w-1/4 h-full bg-gray-100 shadow-lg">
      {adminPanel.map((section, index) => (
        <div key={index} className="mb-6">
          {/* Bölüm Başlığı */}
          <h2 className="text-lg font-bold text-gray-700 px-4 py-2 bg-gray-200">
            {section.title}
          </h2>
          {/* Bölüm Elemanları */}
          <ul className="space-y-1 mt-2">
            {section.items.map((item, i) => (
              <li key={i}>
                <AdminSideBarItem
                  name={item.name}
                  icon={item.icon}
                  url={item.url}
                  selected={pathname === item.url}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default AdminSideBar;
