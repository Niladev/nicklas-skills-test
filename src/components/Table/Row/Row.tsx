import { ReactNode } from "react";
import styles from "./Row.module.css";
export const Row = ({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={() => onClick()}
      className={[styles.row, className].join(" ")}
    >
      {children}
    </div>
  );
};
