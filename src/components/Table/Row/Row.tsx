import { ReactNode } from "react";
import styles from "./Row.module.css";
import classNames from "classnames";
export const Row = ({
  children,
  className,
  onClick,
  active,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  active?: boolean;
}) => {
  return (
    <div
      role="row"
      onClick={onClick ? () => onClick() : undefined}
      className={classNames(styles.row, className, {
        [styles.active]: active,
      })}
    >
      {children}
    </div>
  );
};
