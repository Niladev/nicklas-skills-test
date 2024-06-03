import { TableColumn } from "../../../types";
import { Cell } from "../Cell/Cell";
import { Row } from "../Row/Row";
import styles from "./TableHeader.module.css";

import chevron from "./../../../assets/chevron-up-down.svg";
import arrowDown from "./../../../assets/arrow-down.svg";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

export const TableHeader = <T,>({ columns }: { columns: TableColumn<T>[] }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const order = searchParams.get("order");
  const sortBy = searchParams.get("sort_by");
  const handleSearchParam = (accessor: string) => {
    navigate({
      pathname: "/transactions",
      search: createSearchParams({
        sort_by: accessor,
        order: order === "desc" ? "asc" : "desc",
      }).toString(),
    });
  };

  return (
    <Row className={styles.head}>
      {columns.map(({ accessor, label, sortable }) => {
        return (
          <Cell
            onClick={() => handleSearchParam(accessor as string)}
            className={styles.headCell}
            key={accessor as string}
          >
            {label}{" "}
            {sortable && sortBy !== accessor && (
              <img src={chevron} alt={"Chevron sort"} />
            )}
            {sortable && sortBy === accessor && (
              <img
                data-testid="sortIcon"
                className={order === "asc" ? styles.sortUp : ""}
                src={arrowDown}
                alt={order === "asc" ? "Sort ascending" : "Sort descending"}
              />
            )}
          </Cell>
        );
      })}
    </Row>
  );
};
