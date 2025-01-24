"use client";

import SideBar from "@/app/components/admin/AdminSideBar";
interface AdminLayoutProps {
  children: React.ReactNode;
}

function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex h-full bg-primary ">
      <SideBar />
      <div className="w-full h-full flex flex-col bg-primary overflow-hidden ">
        <main className="my-4 md:my-0">{children}</main>
      </div>
    </div>
  );
}

export default AdminLayout;
