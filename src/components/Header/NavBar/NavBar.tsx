import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { AppRoute } from "../../Route/app-route.enum";
import { ProfileMenu } from "./ProfileMenu";

const NavBar = () => {
  return (
    <nav
      className={styles.header__nav}
      data-test-id="header-nav"
    >
      <ul className={styles["nav-header__list"]}>
        <li
          className={styles["nav-header__item"]}
          title="Bookings"
        >
          <Link
            to={AppRoute.BOOKINGS}
            data-test-id="header-bookings-link"
            className={styles["nav-header__inner"]}
          >
            <span className="visually-hidden">Bookings</span>
            <img
              src="./images/briefcase.svg"
              alt="bookings"
            />
          </Link>
        </li>

        <li
          className={styles["nav-header__item"]}
          title="Profile"
        >
          <ProfileMenu />
        </li>
      </ul>
    </nav>
  );
};

export { NavBar };
