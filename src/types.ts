export interface Attachment {
  url: string;
}

export interface Transaction {
  id: string;
  created_at: string;
  counterparty_name: string;
  debit: boolean;
  credit: boolean;
  amount: string;
  currency: string;
  operation_type: string;
  attachments: Attachment[];
}
