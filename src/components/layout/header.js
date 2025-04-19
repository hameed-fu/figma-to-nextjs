import React from "react";
import { BellOutlined, UserOutlined, DownOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Dropdown, Menu } from "antd";

const Header = ({ title, id, toggleSidebar }) => {
  const menuItems = [
    { key: "1", label: "Profile" },
    { key: "2", label: "Settings" },
    { key: "3", label: "Log Out" },
  ];

  const menu = {
    items: menuItems,
  };

  return (
    <div className="bg-gray-100 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center"></div>

      <div className="flex items-center gap-2">
        <Badge count={11}>
          <Button
            type="text"
            icon={<BellOutlined style={{ fontSize: "20px" }} />}
            className="border border-gray-600 rounded-full bg-white"
          />
        </Badge>
        <div className="ml-4 flex items-center bg-white rounded-full px-2 py-1">
          <Avatar
            style={{
              backgroundColor: "#f0f0f0",
              color: "#666",
            }}
            icon={<UserOutlined />}
            size="large"
          >
            AK
          </Avatar>

          <Dropdown
            menu={menu}
            placement="bottomRight"
            trigger={["click"]}
          >
            <Button
              type="text"
              icon={<DownOutlined style={{ fontSize: "18px" }} />}
              className="border-none"
            />
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
