import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const summaryData = [
  {
    label: "Total Balance",
    value: "$12,450",
    change: "+12%",
  },
  {
    label: "Total Credits",
    value: "$5,600",
    change: "+8%",
  },
  {
    label: "Total Debits",
    value: "$2,340",
    change: "-3%",
  },
  {
    label: "Transactions",
    value: "238",
    change: "+15%",
  },
];

export default function SummaryCard() {
  return (
    <div className="w-full p-[10px]">
      <div className="font-extrabold text-[#000] mb-[100px] w-full " >Summary</div>
      <div className="flex flex-wrap items-center justify-between gap-4 mt-4 p-[10px]">
        {summaryData.map((item) => (
          <div
            key={item.label}
            className="bg-white rounded-lg shadow p-4 w-full sm:w-[48%] lg:w-[23%]"
          >
            <div className="text-xs font-semibold text-black mb-1 flex items-center gap-2">
              <span>{item.label}</span>
              <span>•••</span>
            </div>

            <div className="text-xl font-bold mb-1">{item.value}</div>

            <div
              className={`flex items-center text-sm font-medium text-green-600`}
            >
              <span className="ml-1">{item.change}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
