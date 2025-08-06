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
    { label: "Date", field: "date", extraClass: "pl-6 pr-[120px]" },
    { label: "Remark", field: "remark", extraClass: "px-2" },
    { label: "Amount", field: "amount", extraClass: "px-2" },
    { label: "Currency", field: "currency", extraClass: "px-2" },
    { label: "Type", field: "type", extraClass: "px-2" },
  ] as const;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left">
            {headers.map(({ label, field, extraClass }) => (
              <th
                key={field}
                onClick={() => handleSort(field)}
                className={`py-2 cursor-pointer ${extraClass}`}
              >
                <div className="flex w-full border-[#4B8B9F] border-b-[.2px] pb-1 items-center gap-1">
                  {label}
                  {sortField === field ? (
                    sortAsc ? (
                      <ArrowUp className="w-4 h-4 text-[#4B8B9F]" />
                    ) : (
                      <ArrowDown className="w-4 h-4 text-[#4B8B9F]" />
                    )
                  ) : (
                    <ArrowUp className="w-4 h-4 text-gray-300" />
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedTransactions.map((tx) => (
            <tr key={tx.id} className="hover:bg-gray-50">
              <td className="pl-6 pr-[120px]py-2 whitespace-nowrap">
                <div className="block w-full border-[#4B8B9F] border-b-[.2px] pb-1">
                  {tx.date}
                </div>
              </td>
              <td className="px-2 py-2 whitespace-nowrap">
                <div className="block w-full border-[#4B8B9F] border-b-[.2px] pb-1">
                  {tx.remark}
                </div>
              </td>
              <td className="px-2 py-2 whitespace-nowrap">
                <div className="block w-full border-[#4B8B9F] border-b-[.2px] pb-1">
                  ${Math.abs(tx.amount).toLocaleString()}
                </div>
              </td>
              <td className="px-2 py-2 whitespace-nowrap">
                <div className="block w-full border-[#4B8B9F] border-b-[.2px] pb-1">
                  {tx.currency}
                </div>
              </td>
              <td className="px-2 py-2">
                <div className="block w-full border-[#4B8B9F] border-b-[.2px] pb-1">
                  <span className="inline-flex items-center gap-1">
                    <span
                      className={`w-2 h-2 rounded-full ${
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
