"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  {
    label: "Dashboard",
    path: "/",
  },
  {
    label: "Transactions",
    path: "/transactions",
  },
  {
    label: "Reports",
    path: "/reports",
  },
  {
    label: "Settings",
    path: "/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <aside
        className={`${
          isCollapsed ? "w-[40px]" : "w-[200px]"
        } bg-white h-screen fixed sm:sticky top-0 px-4 py-2 transition-all duration-300 hidden md:block`}
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
            <li key={item.label}>
              {!isCollapsed && (
                <Link
                  href={item.path}
                  className={`flex items-center gap-3 px-3 py-1 text-gray-700 rounded-xl hover:bg-gray-100 transition ${
                    pathname === item.path
                      ? "bg-[#d9e8ed] text-[#58b2cd] font-semibold"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </aside>

      <div className="md:hidden px-2 py-2">
        <Menu
          className="w-6 h-6 cursor-pointer"
          onClick={() => setIsMobileOpen(true)}
        />
        {isMobileOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-30">
            <aside className="w-[60%] bg-white h-[100vh] p-4">
              <div className="flex justify-end">
                <X
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => setIsMobileOpen(false)}
                />
              </div>
              <ul className="mt-6 flex flex-col gap-3">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.path}
                      className={`flex items-center gap-3 px-3 py-1 text-gray-700 rounded-xl hover:bg-gray-100 transition ${
                        pathname === item.path
                          ? "bg-[#d9e8ed] text-[#58b2cd] font-semibold"
                          : ""
                      }`}
                      onClick={() => setIsMobileOpen(false)}
                    >
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        )}
      </div>
    </>
  );
}
