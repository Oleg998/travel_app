import { Link ,useNavigate} from "react-router-dom";
import { useAppSelector } from "../../../hook/use-app.selector.hooks";
import styles from "./navbar.module.css";
import { AppRoute } from "../../Route/app-route.enum";
import { Button } from "../../Button/button";
import { Confirm } from "notiflix";
import { useAppDispatch } from "../../../hook/use-app-dispatch.hooks";
import { AuthActions } from "../../../store/actions";

const ProfileMenu = () => {
  const isLogin = useAppSelector((state) => state.auth.isLoggedIn);
  const fullName = useAppSelector((state) => state.auth.user?.fullName);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    Confirm.show(
      "Log out",
      `Are you sure you want to log out?`,
      "Yes",
      "No",
      () => {
        dispatch(AuthActions.logOut());
        navigate(AppRoute.SIGN_IN);
      }
    );
  };

  return (
    <div
      className={`${styles["nav-header__inner"]} ${styles["profile-nav"]}`}
      tabIndex={0}
      data-test-id="header-profile-nav"
    >
      <span className={styles["visually-hidden"]}>Profile</span>
      <img
        src="/images/user.svg"
        alt="profile"
      />
      <ul
        data-test-id="header-profile-nav-list"
        className={styles["profile-nav__list"]}
      >
        {isLogin ? (
          <>
            <li
              data-test-id="header-profile-nav-username"
              className={styles["profile-nav__item"]}
            >
              {fullName || "Guest"}
            </li>
            <li className={styles["profile-nav__item"]}>
              <Button
                data-test-id="header-profile-nav-sign-out"
                className="profile-nav__sign-out"
                onClick={handleLogout}
              >
                Sign Out
              </Button>
            </li>
          </>
        ) : (
          <>
            <li className={styles["profile-nav__item"]}>
              <Link
                to={AppRoute.SIGN_IN}
                data-test-id="header-profile-nav-sign-in"
                className={`${styles["profile-nav__sign-in"]} ${styles["button"]}`}
              >
                Sign In
              </Link>
            </li>
            <li className={styles["profile-nav__item"]}>
              <Link
                to={AppRoute.SIGN_UP}
                data-test-id="header-profile-nav-sign-up"
                className={`${styles["profile-nav__sign-up"]} ${styles["button"]}`}
              >
                Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export { ProfileMenu };
