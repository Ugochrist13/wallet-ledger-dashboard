import { SquareDashedBottom } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-end bg-white px-4 py-2 shadow-md">
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <SquareDashedBottom className="w-5 h-5 text-gray-700 cursor-pointer" />
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
