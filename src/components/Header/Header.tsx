import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { NavBar } from "./NavBar/NavBar";
import { AppRoute } from "../Route/app-route.enum";

const Header = () => {

  const title="Travel App"

  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <Link
          data-test-id="header-logo"
          to={AppRoute.ROOT}
          className={styles.header__logo}
        >
          {title}
        </Link>
        <NavBar />
      </div>
    </header>
  );
};

export { Header };
