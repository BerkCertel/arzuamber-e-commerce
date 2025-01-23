"use client";

import React from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import { ToastContainer } from "react-toastify";

interface RoutesLayoutProps {
  children: React.ReactNode;
}

function LayoutProvider({ children }: RoutesLayoutProps) {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <ToastContainer />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default LayoutProvider;
