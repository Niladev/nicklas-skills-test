import { Transaction } from "../../../types";
import styles from "./TransactionCard.module.css";
export const TransactionCard = ({
  transaction,
}: {
  transaction: Transaction;
}) => {
  return (
    <div className={styles.card}>
      <h2
        className={styles.amount}
      >{`${transaction.currency} ${transaction.amount}`}</h2>
      <p className={styles.counterparty}>{transaction.counterparty_name}</p>
      <p className={styles.exchange}>{`USD ${(
        parseFloat(transaction.amount) * 1.13
      ).toFixed(2)}`}</p>
    </div>
  );
};
