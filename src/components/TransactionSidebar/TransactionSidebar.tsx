import { Transaction } from "../../types";
import { TransactionCard } from "./TransactionCard/TransactionCard";
import styles from "./TransactionSidebar.module.css";

export const TransactionSidebar = ({
  transaction,
}: {
  transaction?: Transaction;
}) => {
  return (
    <div className={styles.transactionSidebar}>
      {!transaction && <p>No transactions selected</p>}
      {transaction && (
        <div className={styles.transactionWrapper}>
          <div className={styles.transactionTitle}>
            <p>{transaction.operation_type}</p>
            <p className={styles.subtitle}>{transaction.created_at}</p>
          </div>

          <TransactionCard transaction={transaction} />
        </div>
      )}
    </div>
  );
};
