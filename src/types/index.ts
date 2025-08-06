export interface Transaction {
    id: string;
    date: string;
    remark: string;
    amount: number;
    currency: string;
    type: 'Credit' | 'Debit';
  }
  



export type WalletSummary = {
  balance: number;
  income: number;
  expenses: number;
};

export type SpendingCategory = {
  category: string;
  amount: number;
};

export type ActivityLog = {
  id: string;
  action: string;
  date: string;
};

  