"use client";

import Sidebar from "@/components/dashboard/sidebar";
import TopBar from "@/components/dashboard/topbar";



export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* TopBar Component - Hidden on mobile since mobile has its own header */}
        <TopBar className=" md:flex" />
        
        {/* Main content */}
        <main className="flex-1 overflow-auto bg-white md:bg-gray-50">
          {/* Mobile spacing to account for fixed menu button */}
          <div className="h-full md:pt-0">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}