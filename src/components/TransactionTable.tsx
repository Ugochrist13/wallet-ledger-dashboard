import React, { useState } from "react";
import { Transaction } from "@/types";
import { transactions } from "@/data/mockData";
import { ArrowDown, ArrowUp } from "lucide-react";

export default function TransactionsTable() {
  const [sortAsc, setSortAsc] = useState(true);

  const sortedTransactions = [...transactions].sort((a, b) => {
    return sortAsc
      ? new Date(a.date).getTime() - new Date(b.date).getTime()
      : new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4">Transactions</h2>
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left border-b">
            <th
              className="px-4 py-2 cursor-pointer"
              onClick={() => setSortAsc(!sortAsc)}
            >
              <div className="flex items-center gap-1">
                Date{" "}
                {sortAsc ? (
                  <ArrowUp className="w-4 h-4" />
                ) : (
                  <ArrowDown className="w-4 h-4" />
                )}
              </div>
            </th>
            <th className="px-4 py-2">Remark</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Currency</th>
            <th className="px-4 py-2">Type</th>
          </tr>
        </thead>
        <tbody>
          {sortedTransactions.map((tx) => (
            <tr key={tx.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 whitespace-nowrap">{tx.date}</td>
              <td className="px-4 py-2 whitespace-nowrap">{tx.remark}</td>
              <td className="px-4 py-2 whitespace-nowrap">
                ${Math.abs(tx.amount).toLocaleString()}
              </td>
              <td className="px-4 py-2 whitespace-nowrap">{tx.currency}</td>
              <td className="px-4 py-2">
                <span className="inline-flex items-center gap-1">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      tx.type === "Credit" ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                  {tx.type}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
