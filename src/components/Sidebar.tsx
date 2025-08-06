"use client";

import {
  LayoutDashboard,
  CreditCard,
  BarChart2,
  Settings,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  {
    label: "Dashboard",
    icon: <LayoutDashboard className="w-5 h-5" />,
    path: "/",
  },
  {
    label: "Transactions",
    icon: <CreditCard className="w-5 h-5" />,
    path: "/transactions",
  },
  {
    label: "Reports",
    icon: <BarChart2 className="w-5 h-5" />,
    path: "/reports",
  },
  {
    label: "Settings",
    icon: <Settings className="w-5 h-5" />,
    path: "/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`${
        isCollapsed ? "w-[80px]" : "w-[200px]"
      } bg-white h-screen sticky top-0 px-4 py-1 transition-all duration-300 hidden md:block`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 px-3 py-2 mb-2">
          <Menu
            className="w-6 h-6 cursor-pointer"
            onClick={() => setIsCollapsed(!isCollapsed)}
          />
        </div>
      </div>

      <ul className="flex flex-col gap-3">
        {menuItems.map((item) => (
          <li className="" key={item.label}>
            <Link
              href={item.path}
              className={`flex items-center gap-3 px-3 py-1 text-gray-700 rounded-xl hover:bg-gray-100 transition ${
                pathname === item.path ? "bg-[#d9e8ed] text-[#58b2cd] font-semibold" : ""
              }`}
            >
              {item.icon}
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
