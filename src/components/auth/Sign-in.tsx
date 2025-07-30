import styles from "./auth.module.css";
import { type UserLogin } from "./Auth";
import { useState } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/button";
import { Link ,useNavigate} from "react-router-dom";
import { AppRoute } from "../Route/app-route.enum";

interface SignInProps {
  onSubmit: (user: UserLogin) => void;
}

const INITIAL_STATE: UserLogin = {
  email: "",
  password: "",
};

const SignIn: React.FC<SignInProps> = ({ onSubmit }) => {
  const [state, setState] = useState<UserLogin>({ ...INITIAL_STATE });

  const navigate = useNavigate();

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...state });
    navigate("/");
  };

  return (
    <div className={styles["sign-in-page"]}>
      <h1 className={styles["visually-hidden"]}>Travel App</h1>
      <form
        onSubmit={handleSubmit}
        className={styles["sign-in-form"]}
        autoComplete="off"
      >
        <h2 className={styles["sign-in-form__title"]}>Sign In</h2>
        <Input
          label="Email"
          name="email"
          type="email"
          data-test-id="auth-email"
          value={state.email}
          required
          onChange={handleChange}
        />
        <Input
          label="Password"
          name="password"
          data-test-id="auth-password"
          type="password"
          autoComplete="new-password"
          minLength={3}
          maxLength={20}
          value={state.password}
          required
          onChange={handleChange}
        />
        <Button
          type="submit"
          data-test-id="auth-submit"
        >
          Sign In
        </Button>
      </form>
      <span>
        Don't have an account?
        <Link
          data-test-id="auth-sign-up-link"
          to={AppRoute.SIGN_UP}
          className={styles["sign-in-form__link"]}
        >
          Sign Up
        </Link>
      </span>
    </div>
  );
};

export { SignIn };
