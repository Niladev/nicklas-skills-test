import { Link, NavLink } from "react-router-dom";
import classnames from "classnames";
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
            <NavLink
              key={navItem.title}
              className={({ isActive }) =>
                classnames(styles.navItem, {
                  [styles.active]: isActive,
                })
              }
              to={navItem.path}
            >
              {navItem.title}
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
};
