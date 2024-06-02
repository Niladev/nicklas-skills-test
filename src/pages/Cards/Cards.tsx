import { Header } from "../../components/Header/Header";
import styles from "./Cards.module.css";
import cardsImg from "./../../assets/cards.svg";

export const Cards = () => {
  return (
    <>
      <Header title={"Cards"} />
      <div className={styles.content}>
        <div className={styles.leftWrapper}>
          <h2>Order a card that fits your needs!</h2>
          <p>
            Define limits and permissions for your Qonto card. It will follow
            you everywhere and pay for all your purchases. Order your first card
            now!
          </p>
        </div>
        <div className={styles.rightWrapper}>
          <img src={cardsImg} alt="Qonto card" />
        </div>
      </div>
    </>
  );
};
