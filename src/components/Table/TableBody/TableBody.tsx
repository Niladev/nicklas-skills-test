import { TableColumn } from "../../../types";
import { Row } from "../Row/Row";
import { CurrencyCell } from "../TableCells/Currency";
import { DateCell } from "../TableCells/Date";
import { TextCell } from "../TableCells/Text";
import styles from "./TableBody.module.css";

export const TableBody = <T extends Record<keyof T | "id", unknown>>({
  rows,
  columns,
}: {
  rows: T[];
  columns: TableColumn<T>[];
}) => {
  return (
    <div className={styles.body}>
      {rows.map((row) => {
        return (
          <Row key={row.id as string}>
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
