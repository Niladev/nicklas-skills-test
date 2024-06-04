import { Transaction } from "../../types";
import { TransactionCard } from "./TransactionCard/TransactionCard";
import styles from "./TransactionSidebar.module.css";

export const TransactionSidebar = ({
  transaction,
}: {
  transaction?: Transaction;
}) => {
  const transactionDate =
    transaction?.created_at &&
    new Date(transaction.created_at).toLocaleDateString("en-uk", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <div data-testid="transactionSidebar" className={styles.transactionSidebar}>
      {!transaction && <p>No transactions selected</p>}
      {transaction && (
        <div className={styles.transactionWrapper}>
          <div className={styles.transactionTitle}>
            <p>{transaction.operation_type}</p>
            <p className={styles.subtitle}>{transactionDate}</p>
          </div>

          <TransactionCard transaction={transaction} />
        </div>
      )}
    </div>
  );
};
