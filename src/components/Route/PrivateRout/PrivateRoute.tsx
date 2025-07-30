import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../../hook/use-app.selector.hooks";
import { AppRoute } from "../app-route.enum";
import { Loader } from "../../Loader/Louder";

const PrivateRoute = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const isToken = useAppSelector((state) => state.auth.token);
  if (!isLoggedIn && isToken) {
    return <Loader/>
  }
  
  if (!isLoggedIn && !isToken) {
    return <Navigate to={AppRoute.SIGN_IN} />;
  }

  return <Outlet/>
};

export { PrivateRoute };
