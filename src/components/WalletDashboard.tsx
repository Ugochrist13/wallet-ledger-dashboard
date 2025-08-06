"use client";

import React from "react";
import Header from "./Header";
import SummaryCard from "./SummaryCard";
import TransactionsTable from "./TransactionTable";

export default function WalletDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Header />
      <div className="p-4">
        <SummaryCard />
      </div>
      <section className="bg-white rounded shadow p-2">
        <TransactionsTable />
      </section>
    </div>
  );
}
