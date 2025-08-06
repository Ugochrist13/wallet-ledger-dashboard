"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [activeTab, setActiveTab] = useState<"overview" | "transactions">(
    "overview"
  );

  return (
    <header className="mb-2">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold mr-4">Wallet Ledger</h1>
          <span className="h-2 w-2 bg-[#4B8B9F] rounded-full mr-1"></span>
          <span className="text-sm text-[#4B8B9F]">Active</span>
        </div>
        <div className="flex items-center">
          <button className="mr-6 text-black bg-[#4B8B9F] text-sm px-3 py-1 rounded-xl">
            Share
          </button>
          <div className="flex items-center justify-center rounded-4xl border-[.2px] border-[#9ac2ce] h-[26px] w-[30px] gap-1 ">
            <span className="h-[2px] w-[2px] bg-black rounded-full"></span>
            <span className="h-[2px] w-[2px] bg-black rounded-full"></span>
            <span className="h-[2px] w-[2px] bg-black rounded-full"></span>
          </div>
        </div>
      </div>

      <div className="mt-6 mb-4 flex items-center gap-1">
        <div className="flex -space-x-3">
          {[1, 2, 3, 4].map((_, idx, arr) => (
            <Image
              key={idx}
              src="/profile/img1.svg"
              alt="User"
              width={32}
              height={32}
              className={`w-8 h-8 rounded-full border-1 border-white z-${
                arr.length - idx
              }`}
            />
          ))}
        </div>
        <div className="h-8 rounded-full bg-gray-200 text-xs flex items-center justify-center font-light border-2 border-white">
          Avian, Liam, Noah +12 others
        </div>
      </div>
      <div className="w-full flex gap-6 border-[#9ac2ce] border-b-[0.2px]  pt-1 pl-4">
        <button
          onClick={() => setActiveTab("overview")}
          className={`pb-2 font-medium ${
            activeTab === "overview"
              ? "border-b-1 border-[#4B8B9F] text-[#4B8B9F]"
              : "text-gray-500 hover:text-black"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("transactions")}
          className={`pb-2 font-medium ${
            activeTab === "transactions"
              ? "border-b-1 border-[#4B8B9F] text-[#4B8B9F]"
              : "text-gray-500 hover:text-black"
          }`}
        >
          Transactions
        </button>
      </div>
    </header>
  );
}
