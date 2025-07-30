import { useLocation } from "react-router-dom";
import { AppRoute } from "../Route/app-route.enum";
import { SignIn } from "./Sign-in";
import { SignUp } from "./Sign-up";
import { useAppDispatch } from "../../hook/use-app-dispatch.hooks";
import { AuthActions } from "../../store/actions";
import Notiflix from "notiflix";

export interface User {
  fullName: string;
  email: string;
  password: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

Notiflix.Notify.init({
  className: "notification",
});

const Auth = () => {
  const dispatch = useAppDispatch();

  const handleSignup = async (data: User) => {
    try {
      await dispatch(AuthActions.signUp(data)).unwrap();
      Notiflix.Notify.success("Registration successful");
    } catch (error: unknown) {
      const message =
        error && typeof error === "object" && "message" in error
          ? (error as { message: string }).message
          : "Registration error";
      Notiflix.Notify.failure(message);
    }
  };

  const handleSignIn = async (data: UserLogin) => {
    try {
      await dispatch(AuthActions.signIn(data)).unwrap();
      Notiflix.Notify.success("Login successful");
    } catch (error: unknown) {
      const message =
        error && typeof error === "object" && "message" in error
          ? (error as { message: string }).message
          : "Login error";
      Notiflix.Notify.failure(message);
    }
  };


  const { pathname } = useLocation();

  switch (pathname) {
    case AppRoute.SIGN_IN:
      return <SignIn onSubmit={handleSignIn} />;
    case AppRoute.SIGN_UP:
      return <SignUp onSubmit={handleSignup} />;
    default:
      return null;
  }
};

export { Auth };
