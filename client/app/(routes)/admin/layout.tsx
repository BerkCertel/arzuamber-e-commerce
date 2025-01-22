"use client";

import SideBar from "@/app/components/admin/SideBar";
import Button from "@/app/components/general/Button";
import { useRouter } from "next/navigation";

interface AdminLayoutProps {
  children: React.ReactNode;
}

function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter();

  const handleGoHome = () => {
    router.push(`/`);
  };

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 h-screen flex flex-col">
        <header className="bg-gray-800 text-white flex justify-between items-center p-4">
          <div className="hidden lg:block">Admin Panel</div>

          <Button
            animation
            primary
            size="small"
            text="Go To Home"
            onClick={handleGoHome}
          />
        </header>
        <main> {children}</main>
      </div>
    </div>
  );
}

export default AdminLayout;
