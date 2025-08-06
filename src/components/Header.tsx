"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [activeTab, setActiveTab] = useState<"overview" | "transactions">(
    "overview"
  );

  return (
    <header className="mb-4 px-2 md:px-0">
      <div className="w-full flex items-center justify-between gap-2">
        <div className="flex items-center">
          <h1 className="md:text-2xl font-bold mr-2 md:mr-4">
            Wallet Ledger
          </h1>
          <span className="h-1 md:h-2 w-1 md:w-2 bg-[#4B8B9F] rounded-full mr-1"></span>
          <span className="text-xs md:text-sm text-[#4B8B9F]">Active</span>
        </div>

        <div className="flex items-center justify-end gap-3">
          <button className="text-black bg-[#4B8B9F] text-xs md:text-sm px-2 py-1 rounded-xl">
            Share
          </button>
          <div className="flex items-center justify-center border border-[#9ac2ce] h-[19px] md:h-[26px] w-[18px] md:w-[30px] rounded-2xl gap-0.5 md:gap-1">
            <span className="h-[1px] md:h-[2px] w-[1px] md:w-[2px] bg-black rounded-full"></span>
            <span className="h-[1px] md:h-[2px] w-[1px] md:w-[2px] bg-black rounded-full"></span>
            <span className="h-[1px] md:h-[2px] w-[1px] md:w-[2px] bg-black rounded-full"></span>
          </div>
        </div>
      </div>

      {/* Avatars and Names */}
      <div className="mt-4 mb-4 flex flex-wrap items-center gap-2">
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
        <div className="h-8 px-3 rounded-full bg-gray-200 text-xs flex items-center justify-center font-light border-2 border-white">
          Avian, Liam, Noah +12 others
        </div>
      </div>

      {/* Tabs */}
      <div className="w-full flex flex-wrap gap-4 border-[#9ac2ce] border-b pt-1 pl-2 md:pl-4">
        <button
          onClick={() => setActiveTab("overview")}
          className={`pb-2 text-sm md:text-base font-medium ${
            activeTab === "overview"
              ? "border-b-2 border-[#4B8B9F] text-[#4B8B9F]"
              : "text-gray-500 hover:text-black"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("transactions")}
          className={`pb-2 text-sm md:text-base font-medium ${
            activeTab === "transactions"
              ? "border-b-2 border-[#4B8B9F] text-[#4B8B9F]"
              : "text-gray-500 hover:text-black"
          }`}
        >
          Transactions
        </button>
      </div>
    </header>
  );
}
