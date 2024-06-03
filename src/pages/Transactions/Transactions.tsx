import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { useApi } from "../../hooks/useApi";
import { Transaction } from "../../types";
import { Loading } from "../../components/Loading/Loading";
import styles from "./Transactions.module.css";

export const Transactions = () => {
  const { transactionId } = useParams();
  const { data, isLoading, error } = useApi<Transaction[]>("transactions");

  if (error) {
    return <p>An error occured</p>;
  }

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.main}>
        <Header title={"History"} />
        {isLoading ? <Loading /> : transactionId || "No id"}
      </div>
      <div className={styles.transactionSidebar}></div>
    </div>
  );
};
