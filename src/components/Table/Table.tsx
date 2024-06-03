import { TableColumn } from "../../types";
import { TableBody } from "./TableBody/TableBody";
import { TableHeader } from "./TableHeader/TableHeader";
import styles from "./Table.module.css";

export const Table = <T extends Record<string, unknown>>({
  data,
  columns,
  onRowClick,
}: {
  data: T[];
  columns: TableColumn<T>[];
  onRowClick: (rowId: string) => void;
}) => {
  return (
    <div className={styles.table}>
      <TableHeader columns={columns} />
      <TableBody<T> onRowClick={onRowClick} columns={columns} rows={data} />
    </div>
  );
};
