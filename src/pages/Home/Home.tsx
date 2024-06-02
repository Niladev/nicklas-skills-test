import { Header } from "../../components/Header/Header";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div>
      <Header title={"Home"} />
      <div className={styles.content}>
        <h2>Welcome to Qonto</h2>
      </div>
    </div>
  );
};
