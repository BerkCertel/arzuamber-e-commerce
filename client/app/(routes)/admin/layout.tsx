import AdminSideBar from "@/app/components/admin/AdminSideBar";
import React from "react";

interface RoutesLayoutProps {
  children: React.ReactNode;
}

function AdminLayout({ children }: RoutesLayoutProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <AdminSideBar />
      {children}
    </div>
  );
}

export default AdminLayout;
