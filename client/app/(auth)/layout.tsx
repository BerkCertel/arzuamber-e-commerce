"use client";

import React from "react";
import PageContainer from "../components/Containers/PageContainer";

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return <PageContainer> {children}</PageContainer>;
}

export default AuthLayout;
