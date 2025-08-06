"use client";

import React, { useState } from "react";
import { Transaction } from "@/types";
import { transactions } from "@/data/mockData";
import { ArrowDown, ArrowUp } from "lucide-react";

type SortField = keyof Transaction;

export default function TransactionsTable() {
  const [sortField, setSortField] = useState<SortField>("date");
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  const sortedTransactions = [...transactions].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];

    if (sortField === "date") {
      return sortAsc
        ? new Date(aValue).getTime() - new Date(bValue).getTime()
        : new Date(bValue).getTime() - new Date(aValue).getTime();
    }

    if (typeof aValue === "string") {
      return sortAsc
        ? aValue.localeCompare(bValue as string)
        : (bValue as string).localeCompare(aValue);
    }

    return sortAsc
      ? (aValue as number) - (bValue as number)
      : (bValue as number) - (aValue as number);
  });

  const headers = [
    { label: "Date", field: "date" },
    { label: "Remark", field: "remark" },
    { label: "Amount", field: "amount" },
    { label: "Currency", field: "currency" },
    { label: "Type", field: "type" },
  ] as const;

  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full text-xs md:text-sm">
        <thead>
          <tr className="text-left">
            {headers.map(({ label, field }) => (
              <th
                key={field}
                onClick={() => handleSort(field)}
                className={`py-2 cursor-pointer w-full whitespace-nowrap ${
                  field === "date" ? "pl-6" : "px-2"
                }`}
              >
                <div
                  className={`flex w-full border-[#78c2d8] border-b-[.2px] pb-1 items-center gap-1 $${
                    field === "date" ? "pr-[80px]" : ""
                  }`}
                >
                  {label}
                  {sortField === field ? (
                    sortAsc ? (
                      <ArrowUp className="w-3 md:w-4 h-3 md:h-4 text-[#4B8B9F]" />
                    ) : (
                      <ArrowDown className="w-3 md:w-4 h-3 md:h-4 text-[#4B8B9F]" />
                    )
                  ) : (
                    <ArrowUp className="w-3 md:w-4 h-3 md:h-4 text-gray-300" />
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedTransactions.map((tx) => (
            <tr key={tx.id} className="hover:bg-gray-50 w-full">
              <td className="pl-6 py-2 whitespace-nowrap">
                <div className="block w-full border-[#78c2d8] border-b-[.2px] pb-1">
                  {tx.date}
                </div>
              </td>
              <td className="px-2 py-2 whitespace-nowrap">
                <div className="block w-full border-[#78c2d8] border-b-[.2px] pb-1">
                  {tx.remark}
                </div>
              </td>
              <td className="px-2 py-2 whitespace-nowrap">
                <div className="block w-full border-[#78c2d8] border-b-[.2px] pb-1">
                  ${Math.abs(tx.amount).toLocaleString()}
                </div>
              </td>
              <td className="px-2 py-2 whitespace-nowrap">
                <div className="block w-full border-[#78c2d8] border-b-[.2px] pb-1">
                  {tx.currency}
                </div>
              </td>
              <td className="px-2 py-2">
                <div className="block w-full border-[#78c2d8] border-b-[.2px] pb-1">
                  <span className="inline-flex items-center gap-1">
                    <span
                      className={`w-1 h-1 rounded-full ${
                        tx.type === "Credit" ? "bg-[#4B8B9F]" : "bg-red-500"
                      }`}
                    ></span>
                    {tx.type}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
