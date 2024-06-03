import { TableColumn } from "../../../types";
import { Cell } from "../Cell/Cell";
import { Row } from "../Row/Row";
import styles from "./TableHeader.module.css";
export const TableHeader = <T,>({ columns }: { columns: TableColumn<T>[] }) => {
  return (
    <Row className={styles.head}>
      {columns.map(({ accessor, label }) => {
        return (
          <Cell className={styles.headCell} key={accessor as string}>
            {label}
          </Cell>
        );
      })}
    </Row>
  );
};
