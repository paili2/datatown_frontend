"use client";

// import { useSidebar } from "@/context/SidebarContext";
import AppHeader from "@/widgets/layout/AppHeader";
import Backdrop from "@/widgets/layout/Backdrop";
import AppSidebar from "@/widgets/layout/sideBar/AppSidebar";
import { useSidebarStore } from "@/widgets/layout/sideBar/hooks/useSidebarStore";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { isExpanded, isHovered, isMobileOpen } = useSidebar();
  const { isExpanded, isMobileOpen, isHovered } = useSidebarStore();

  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[290px]"
    : "lg:ml-[90px]";

  return (
    <div className="min-h-screen xl:flex">
      {/* Sidebar and Backdrop */}
      <AppSidebar />
      <Backdrop />
      {/* Main Content Area */}
      <div
        className={`flex-1 transition-all  duration-300 ease-in-out ${mainContentMargin}`}
      >
        {/* Header */}
        <AppHeader />
        {/* Page Content */}
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">{children}</div>
      </div>
    </div>
  );
}
