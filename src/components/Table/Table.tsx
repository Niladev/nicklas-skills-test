import { TableColumn, Transaction } from "../../types";
import { TableBody } from "./TableBody/TableBody";
import { TableHeader } from "./TableHeader/TableHeader";
import styles from "./Table.module.css";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export const Table = ({
  data,
  columns,
  onRowClick,
}: {
  data: Transaction[];
  columns: TableColumn<Transaction>[];
  onRowClick: (rowId: string) => void;
}) => {
  const [searchParams] = useSearchParams();

  const rowData = useMemo(() => {
    if (
      searchParams &&
      searchParams.get("order") &&
      searchParams.get("sort_by")
    ) {
      const direction = searchParams.get("order");
      const sort: keyof Transaction | null = searchParams.get(
        "sort_by"
      ) as keyof Transaction;

      return data.sort((a, b) => {
        if (
          sort &&
          Object.keys(a).includes(sort) &&
          Object.keys(b).includes(sort)
        ) {
          const valueA = a[sort];
          const valueB = b[sort];
          if (direction === "desc") {
            if (
              typeof valueA === "string" &&
              typeof valueB === "string" &&
              !isNaN(Number(valueA)) &&
              !isNaN(Number(valueB))
            ) {
              return parseFloat(valueA) > parseFloat(valueB) ? -1 : 1;
            }
            return a[sort] > b[sort] ? -1 : 1;
          }

          if (direction === "asc") {
            if (
              typeof valueA === "string" &&
              typeof valueB === "string" &&
              !isNaN(Number(valueA)) &&
              !isNaN(Number(valueB))
            ) {
              return parseFloat(valueA) < parseFloat(valueB) ? -1 : 1;
            }
            return a[sort] < b[sort] ? -1 : 1;
          }
        }
        return -1;
      });
    }

    return data;
  }, [searchParams, data]);

  return (
    <div className={styles.table}>
      <TableHeader columns={columns} />
      <TableBody<Transaction>
        onRowClick={onRowClick}
        columns={columns}
        rows={rowData}
      />
    </div>
  );
};
