import styles from "./Cell.module.css";

export const Cell = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={[styles.cell, className].join(" ")}>{children}</div>;
};
