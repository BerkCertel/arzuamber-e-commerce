// AdminLayout.tsx
"use client";

import SideBar from "@/app/components/admin/AdminSideBar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex h-full ">
      <SideBar />
      <div className="w-full h-full flex bg-secondary overflow-hidden">
        <main className="w-full h-auto my-4 md:my-0 overflow-auto border-l">
          {children}
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
