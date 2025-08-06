"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  { label: "Dashboard", path: "/" },
  { label: "Transactions", path: "/transactions" },
  { label: "Reports", path: "/reports" },
  { label: "Settings", path: "/settings" },
];

export default function Sidebar({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  if (mobile) {
    return (
      <div>
        <Menu
          className="w-6 h-6 cursor-pointer text-gray-800"
          onClick={() => setIsMobileOpen(true)}
        />
        {isMobileOpen && (
          <div className="fixed inset-0 z-50 bg-gray-500 opacity-90">
            <aside className="w-[70%] bg-white h-full p-4">
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
                      onClick={() => setIsMobileOpen(false)}
                      className={`block px-4 py-2 rounded-xl text-gray-700 hover:bg-gray-100 transition ${
                        pathname === item.path
                          ? "bg-[#d9e8ed] text-[#58b2cd] font-semibold"
                          : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        )}
      </div>
    );
  }

  return (
    <aside
      className={`${
        isCollapsed ? "w-[50px]" : "w-[200px]"
      } bg-white h-screen md:sticky top-0 px-4 py-4 transition-all duration-300 hidden md:block`}
    >
      <div className="flex items-center justify-between mb-6">
        <Menu
          className="w-6 h-6 cursor-pointer"
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
      </div>

      <ul className="flex flex-col gap-4">
        {menuItems.map((item) => (
          <li key={item.label}>
            {!isCollapsed && (
              <Link
                href={item.path}
                className={`block px-3 py-2 rounded-xl text-gray-700 hover:bg-gray-100 transition ${
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
  );
}
