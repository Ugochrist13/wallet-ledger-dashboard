import { LayoutDashboard, Search } from "lucide-react";
import Image from "next/image";
import Sidebar from "./Sidebar";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between bg-white px-4 py-2 shadow-md">
      <div className="flex gap-2">
        <div className="block md:hidden">
          <Sidebar mobile />
        </div>
        <Image
          src="/assets/logo.svg"
          alt="Logo"
          width={88}
          height={68}
          className="hidden md:block"
        />
      </div>
      <div className="flex px-2 md:px-0 items-center gap-4">
        <div className="relative">
          <Search className="absolute right-3 top-2 h-4 w-4 text-gray-500" />
          <input
            type="text"
            className="border-none rounded px-3 py-1 text-sm focus:outline-none focus:ring-[0.3px] focus:ring-[#9ac2ce]"
          />
        </div>
        <LayoutDashboard className="w-5 h-5 text-gray-700 cursor-pointer" />
        <Image
          src="/profile/img1.svg"
          alt="User"
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
    </nav>
  );
}
