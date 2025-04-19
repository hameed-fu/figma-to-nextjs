"use client";

import React, { useState, useEffect } from "react";
import { Menu, Divider, Button } from "antd";
import {
  Edit,
  Grid,
  Route,
  UsersRound,
  ListCollapseIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IdcardOutlined } from "@ant-design/icons";

const sidebarItems = [
  {
    name: "Заявки",
    icon: <Edit className="h-4 w-4" />,
    key: "applications",
    children: [
      { name: "Активные", key: "active" },
      { name: "Черновики", key: "drafts" },
      { name: "Опубликованные", key: "published" },
      { name: "Архив", key: "archive" },
      { name: "Шаблоны", key: "templates" },
      { name: "Удаленные", key: "deleted" },
    ],
  },
  {
    name: "Маршруты",
    icon: <Route className="h-4 w-4" />,
    key: "routes",
    children: [],
  },
  {
    name: "Профили должностей",
    icon: <UsersRound className="h-4 w-4" />,
    key: "job-profiles",
    children: [],
  },
  { type: "divider" },
  {
    name: "Справочник",
    icon: <Grid className="h-4 w-4" />,
    key: "reference",
    children: [],
  },
  {
    name: "Новый термин",
    icon: <IdcardOutlined />,
    key: "new-term",
    children: [],
  },
];

export default function Sidebar({ isOpen, setIsOpen }) {
  const pathname = usePathname();
  const [openKeys, setOpenKeys] = useState(["applications"]);
  const [selectedKey, setSelectedKey] = useState("applications/");

  useEffect(() => {
    const cleanedPath = pathname.replace(/^\/+/, "");
    setSelectedKey(cleanedPath);
    const mainKey = cleanedPath.split("/")[0];
    if (mainKey) setOpenKeys([mainKey]);
  }, [pathname]);

  const items = sidebarItems.map((item, index) => {
    if (item.type === "divider") {
      return { type: "group", key: `divider-${index}`, label: <Divider /> };
    }
    return {
      key: item.key,
      icon: item.icon,
      label: item.name,
      children:
        item.children?.map((child) => ({
          key: `${item.key}/${child.key}`,
          label: <Link href={`/${item.key}/${child.key}`}>{child.name}</Link>,
        })) ?? [],
    };
  });

  return (
    <div
      className={`fixed left-0 top-0 z-40 flex h-full flex-col bg-white shadow transition-all duration-300 ease-in-out ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Header */}
      <div className="flex h-16 items-center justify-center px-4">
        <span
          className={`text-lg font-semibold text-gray-800 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          Профессионалы
        </span>
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto px-2">
        <Menu
          mode="inline"
          openKeys={openKeys}
          selectedKeys={[selectedKey]}
          onOpenChange={setOpenKeys}
          onClick={(e) => setSelectedKey(e.key)}
          style={{ border: "none" }}
          items={items}
        />
      </div>

      {/* Footer / Toggle Button */}
      <div className="flex items-center h-16 border-t border-gray-300">
        <Button
          type="link"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ListCollapseIcon
            className={`h-5 w-5 text-gray-600 transition-transform duration-200 ${
              !isOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </div>
    </div>
  );
}
