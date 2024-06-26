import { useParams } from "react-router-dom";
import { TableColumn } from "../../../types";
import { Row } from "../Row/Row";
import { CurrencyCell } from "../TableCells/Currency";
import { DateCell } from "../TableCells/Date";
import { TextCell } from "../TableCells/Text";
import styles from "./TableBody.module.css";

export const TableBody = <T,>({
  rows,
  columns,
  onRowClick,
}: {
  rows: ({ id: string; currency?: string } & T)[];
  columns: TableColumn<T>[];
  onRowClick: (rowId: string) => void;
}) => {
  const { transactionId } = useParams();
  return (
    <div className={styles.body}>
      {rows.map((row) => {
        return (
          <Row
            active={row.id === transactionId}
            onClick={() => onRowClick(row.id as string)}
            key={row.id as string}
          >
            {columns.map(({ accessor, type }) => {
              const cellData = row[accessor] ? row[accessor] : null;

              switch (type) {
                case "date":
                  return (
                    <DateCell
                      key={accessor as string}
                      data={cellData as string}
                    />
                  );
                case "text":
                  return (
                    <TextCell
                      key={accessor as string}
                      data={cellData as string}
                    />
                  );
                case "currency":
                  return (
                    <CurrencyCell
                      key={accessor as string}
                      data={cellData as string}
                      currency={row?.currency || ""}
                    />
                  );
                default:
                  return (
                    <TextCell
                      key={accessor as string}
                      data={cellData?.toString() as string}
                    />
                  );
              }
            })}
          </Row>
        );
      })}
    </div>
  );
};
