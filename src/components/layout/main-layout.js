"use client";

import { useState } from "react";
import Sidebar from "./sidebar";
import { ConfigProvider, Button, Space, Input, Divider } from "antd";
import Header from "./header";

export default function MainLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#389E0D",
        },
        components: {
          Menu: {
            colorPrimary: "#389E0D",
            itemSelectedColor: "#389E0D",
            itemSelectedBg: "#D9F7BE",
            itemHoverColor: "#52c41a",
          },
          Button: {
            colorPrimary: "#389E0D",
          },
          Input: {
            colorPrimary: "#389E0D",
          },
          Select: {
            colorPrimary: "#389E0D",
          },
        },
      }}
    >
     <div className="min-h-screen bg-gray-100">
  <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
  <div
    className={`transition-all duration-300 ease-in-out ${
      isSidebarOpen ? "ml-64" : "ml-20"
    }`}
  >
    <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
    <main className="p-10">{children}</main>
  </div>
</div>

    </ConfigProvider>
  );
}
