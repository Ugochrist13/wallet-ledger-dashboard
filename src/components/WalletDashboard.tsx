"use client";

import React from "react";
import Header from "./Header";
import SummaryCard from "./SummaryCard";
import TransactionsTable from "./TransactionTable";

export default function WalletDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header Section */}
      <Header />

      {/* Wallet Ledger Title */}
      <div className="mt-6 mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-semibold">Wallet Ledger</h1>
          <span className="h-2 w-2 bg-green-500 rounded-full"></span>
        </div>
        <div className="flex -space-x-2">
          <img
            src="/avatars/ava.png"
            alt="Ava"
            className="w-8 h-8 rounded-full border-2 border-white"
          />
          <img
            src="/avatars/liam.png"
            alt="Liam"
            className="w-8 h-8 rounded-full border-2 border-white"
          />
          <img
            src="/avatars/noah.png"
            alt="Noah"
            className="w-8 h-8 rounded-full border-2 border-white"
          />
          <div className="w-8 h-8 rounded-full bg-gray-200 text-sm flex items-center justify-center font-medium border-2 border-white">
            +12
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-6">
        <button className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
          Overview
        </button>
        <button className="text-gray-500 hover:text-blue-600 pb-1">
          Transactions
        </button>
      </div>
      <div className="p-20">
        <SummaryCard />
      </div>
      {/* Transaction Table */}
      <section className="bg-white rounded shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Transactions</h2>
        <TransactionsTable />
      </section>
    </div>
  );
}
