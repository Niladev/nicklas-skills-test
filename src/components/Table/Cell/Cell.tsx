import styles from "./Cell.module.css";

export const Cell = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      role="cell"
      onClick={onClick}
      className={[styles.cell, className].join(" ")}
    >
      {children}
    </div>
  );
};
