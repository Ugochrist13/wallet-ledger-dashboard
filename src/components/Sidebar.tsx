"use client";

import {
  LayoutDashboard,
  CreditCard,
  BarChart2,
  Settings,
  Menu,
} from "lucide-react";
import Image from "next/image";
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
        isCollapsed ? "w-30" : "w-44"
      } bg-white h-screen border-r p-4 transition-all duration-300 hidden md:block`}
    >
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-2">
          <Menu
            className="w-6 h-6 cursor-pointer"
            onClick={() => setIsCollapsed(!isCollapsed)}
          />
          {isCollapsed ? (
            <Image src="/assets/logo.svg" alt="Logo" width={54} height={54} />
          ) : (
            <Image src="/assets/logo.svg" alt="Logo" width={58} height={58} />
          )}
        </div>
      </div>

      <ul className="flex flex-col gap-3 mt-7">
        {menuItems.map((item) => (
          <li className="mb-4" key={item.label}>
            <Link
              href={item.path}
              className={`flex items-center gap-3 pl-5 px-3 py-6 rounded-md hover:bg-gray-100 transition ${
                pathname === item.path ? "bg-[#bed1d8] text font-semibold" : ""
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
