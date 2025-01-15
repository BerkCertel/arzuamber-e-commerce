import React from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

interface RoutesLayoutProps {
  children: React.ReactNode;
}

function LayoutProvider({ children }: RoutesLayoutProps) {
  return (
    <div className="flex flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default LayoutProvider;
