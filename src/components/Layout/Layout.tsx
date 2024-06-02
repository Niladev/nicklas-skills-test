import { Sidebar } from "../Sidebar/Sidebar";
import styles from "./Layout.module.css";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>{children}</div>
    </div>
  );
};
