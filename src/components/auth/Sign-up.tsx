
import styles from "./auth.module.css";
import { useState } from "react";
import { Button } from "../Button/button";
import { Link ,useNavigate} from "react-router-dom";
import { Input } from "../Input/Input";
import { AppRoute } from "../Route/app-route.enum";
import { type User } from "./Auth";


const INITIAL_STATE: User = {
  fullName: "",
  email: "",
  password: "",
};

interface SignUpProps {
  onSubmit: (user: User) => void;
}

const SignUp: React.FC<SignUpProps> = ({ onSubmit }) => {
  const navigate = useNavigate();

  const [state, setState] = useState<User>({ ...INITIAL_STATE });

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    if (name === "full-name") {
      setState({ ...state, fullName: value });
    } else if (name === "email") {
      setState({ ...state, email: value });
    } else if (name === "password") {
      setState({ ...state, password: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...state });
    navigate("/");
  };

  return (
    <div className={styles["sign-up-page"]}>
      <h1 className={styles["visually-hidden"]}>Travel App</h1>
      <form
        onSubmit={handleSubmit}
        className={styles["sign-up-form"]}
        autoComplete="off"
      >
        <h2 className="sign-up-form__title">Sign Up</h2>

        <Input
          label="Full name"
          name="full-name"
          data-test-id="auth-full-name"
          required
          onChange={handleChange}
          value={state.fullName}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          data-test-id="auth-email"
          required
          onChange={handleChange}
          value={state.email}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          data-test-id="auth-password"
          minLength={3}
          maxLength={20}
          required
          onChange={handleChange}
        />
        <Button
          type="submit"
          data-test-id="auth-submit"
        >
          Sign Up
        </Button>
      </form>
      <span>
        Already have an account?{" "}
        <Link
          data-test-id="auth-sign-in-link"
          to={AppRoute.SIGN_IN}
          className={styles["sign-up-form__link"]}
        >
          Sign In
        </Link>
      </span>
    </div>
  );
};


export {SignUp}