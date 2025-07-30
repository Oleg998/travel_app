import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../../hook/use-app.selector.hooks";
import { AppRoute } from "../app-route.enum";
import { Loader } from "../../Loader/Louder";

const PublicRoute = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const isToken = useAppSelector((state) => state.auth.token);
  if (!isLoggedIn && isToken) {
    return <Loader />;
  }

  if (isLoggedIn) {
    return <Navigate to={AppRoute.ROOT} />;
  }

  return <Outlet />;
};

export { PublicRoute };
