import React from 'react';
import { Search, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
      {/* Left section */}
      <div className="flex items-center gap-4">
        <img src="/logo.svg" alt="FinTrack Logo" className="h-10 w-auto" />
        <div>
          <h1 className="text-2xl font-bold">Wallet Ledger</h1>
          <span className="text-sm text-green-600 font-medium">● Active</span>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4 w-full md:w-auto">
        <div className="relative flex-1 md:flex-none">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-8 pr-4 py-2 border rounded-md text-sm focus:outline-none"
          />
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-300" title="User Avatar" />
      </div>

      {/* Tabs */}
      <div className="w-full flex gap-6 border-b pt-2">
        <button className="pb-2 border-b-2 border-black font-medium">Overview</button>
        <button className="pb-2 text-gray-500 hover:text-black">Transactions</button>
      </div>
    </header>
  );
}
