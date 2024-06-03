import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { useApi } from "../../hooks/useApi";
import { TableColumn, Transaction, TransactionResponse } from "../../types";
import { Loading } from "../../components/Loading/Loading";
import styles from "./Transactions.module.css";
import { Table } from "../../components/Table/Table";

export const Transactions = () => {
  const { transactionId } = useParams();
  const { data, isLoading, error } =
    useApi<TransactionResponse>("transactions");

  if (error || !data) {
    return <p>An error occured</p>;
  }

  const columns: TableColumn<Transaction>[] = [
    {
      label: "Counterparty",
      accessor: "counterparty_name",
      type: "text",
    },
    {
      label: "Method",
      accessor: "operation_type",
      type: "text",
    },
    {
      label: "Payment date",
      accessor: "created_at",
      type: "date",
    },
    {
      label: "Amount",
      accessor: "amount",
      type: "currency",
    },
  ];

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.main}>
        <Header title={"History"} />
        <div className={styles.content}>
          {isLoading ? (
            <Loading />
          ) : (
            <Table<Transaction> columns={columns} data={data.transactions} />
          )}
        </div>
      </div>
      <div className={styles.transactionSidebar}>
        {!transactionId && <p>No transactions selected</p>}
      </div>
    </div>
  );
};
