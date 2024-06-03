import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { useApi } from "../../hooks/useApi";
import { TableColumn, Transaction, TransactionResponse } from "../../types";
import { Loading } from "../../components/Loading/Loading";
import styles from "./Transactions.module.css";
import { Table } from "../../components/Table/Table";
import { useMemo } from "react";
import { TransactionSidebar } from "../../components/TransactionSidebar/TransactionSidebar";

export const Transactions = () => {
  const { transactionId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } =
    useApi<TransactionResponse>("transactions");
  const selectedTransaction = useMemo(() => {
    return data?.transactions.find(
      (transaction) => transaction.id === transactionId
    );
  }, [transactionId, data]);

  if (error) {
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

  const handleClick = (transactionId: string) => {
    console.log("selected ");
    navigate(`/transactions/${transactionId}`);
  };

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.main}>
        <Header title={"History"} />
        <div className={styles.content}>
          {isLoading || !data ? (
            <Loading />
          ) : (
            <Table<Transaction>
              onRowClick={handleClick}
              columns={columns}
              data={data.transactions}
            />
          )}
        </div>
      </div>
      <TransactionSidebar transaction={selectedTransaction} />
    </div>
  );
};
