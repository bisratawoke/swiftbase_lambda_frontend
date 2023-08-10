import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  BackwardFilled,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem("Functions", "/functions", <AppstoreOutlined />),

  { type: "divider" },

  getItem("Settings", "/settings", <SettingOutlined />),
  { type: "divider" },
  getItem("Docs", "/docs", <MailOutlined />),
  { type: "divider" },
  getItem("Logout", "4", <BackwardFilled />),
];

const App: React.FC = () => {
  const navigate = useNavigate();
  const onClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
      style={{
        backgroundColor: "white",
      }}
    />
  );
};

export default App;
