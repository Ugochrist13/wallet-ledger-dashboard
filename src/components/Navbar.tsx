import { LayoutDashboard, Search } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white px-4 py-2 shadow-md">
      <Image src="/assets/logo.svg" alt="Logo" width={78} height={68} />
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute right-3 top-2 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="border rounded px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <LayoutDashboard className="w-5 h-5 text-gray-700 cursor-pointer" />
        <Image
          src="/avatar.png"
          alt="User"
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
    </nav>
  );
}
