export interface Attachment {
  url: string;
}

export type Transaction = {
  id: string;
  created_at: string;
  counterparty_name: string;
  debit: boolean;
  credit: boolean;
  amount: string;
  currency: string;
  operation_type: string;
  attachments: Attachment[];
};

export interface TransactionResponse {
  transactions: Transaction[];
}

export interface TableColumn<T> {
  label: string;
  accessor: keyof T;
  type: "text" | "currency" | "date";
  sortable?: boolean;
}
