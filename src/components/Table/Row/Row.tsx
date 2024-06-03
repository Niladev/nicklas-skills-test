import { ReactNode } from "react";
import styles from "./Row.module.css";
export const Row = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={[styles.row, className].join(" ")}>{children}</div>;
};
