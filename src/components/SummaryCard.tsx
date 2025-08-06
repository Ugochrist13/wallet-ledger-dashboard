import React from "react";

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
    <div className="w-full px-2 md:px-4">
      <div className="font-extrabold text-black text-base md:text-lg lg:text-xl mb-3">
        Summary
      </div>

      <div className="flex flex-wrap gap-2 md:gap-4 justify-between">
        {summaryData.map((item) => (
          <div
            key={item.label}
            className="bg-white rounded-lg shadow p-2 md:p-4 w-[46%] lg:w-[23%]"
          >
            <div className="text-xs font-semibold text-black mb-1 flex items-center gap-3 md:gap-5">
              <span>{item.label}</span>
              <span className="flex gap-[1px] md:gap-[2px]">
                <span className="h-[2.5px] md:h-[3px] w-[2.5px] md:w-[3px] bg-black rounded-full"></span>
                <span className="h-[2.5px] md:h-[3px] w-[2.5px] md:w-[3px] bg-black rounded-full"></span>
                <span className="h-[2.5px] md:h-[3px] w-[2.5px] md:w-[3px] bg-black rounded-full"></span>
              </span>
            </div>

            <div className="text-lg md:text-xl font-bold mb-1">
              {item.value}
            </div>

            <div
              className={`flex items-center text-xs md:text-sm font-medium text-[#4B8B9F]`}
            >
              <span>{item.change}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
