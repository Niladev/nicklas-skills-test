import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import logo from "/qonto.svg";

const navigation = [
  {
    title: "History",
    path: "/transations",
  },
  {
    title: "Cards",
    path: "/cards",
  },
];

export const Sidebar = () => {
  return (
    <nav className={styles.navigation}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="Qonto logo" />
      </Link>

      <ul className={styles.navigationMenu}>
        {navigation.map((navItem) => {
          return (
            <Link
              key={navItem.title}
              className={styles.navItem}
              to={navItem.path}
            >
              {navItem.title}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};
