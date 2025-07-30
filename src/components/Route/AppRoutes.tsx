import { SharedLayout } from "../Shared Layout/SharedLayout";
import { Route, Routes } from "react-router-dom";
import { AppRoute } from "./app-route.enum";
import { Auth } from "../auth/Auth";
import { TripsSection } from "../Trips/TripsSection";
import { TripDetail } from "../TripDetail/Trip-detail";
import { Bookings } from "../Bookings/Bookings";
import { PrivateRoute } from "./PrivateRout/PrivateRoute";
import { PublicRoute } from "./PublicRoute/PublicRoute";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hook/use-app.selector.hooks";
const AppRoutes = () => {
   
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  return (
    <Routes>
      <Route
        path={AppRoute.ROOT}
        element={<SharedLayout />}
      >
        <Route element={<PublicRoute />}>
          <Route
            path={AppRoute.SIGN_IN}
            element={<Auth />}
          />
          <Route
            path={AppRoute.SIGN_UP}
            element={<Auth />}
          />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route
            index
            element={<TripsSection />}
          />
          <Route
            path={AppRoute.DETAIL}
            element={<TripDetail />}
          />
          <Route
            path={AppRoute.BOOKINGS}
            element={<Bookings />}
          />
        </Route>
        <Route
          path={AppRoute.ANY}
          element={
            isLoggedIn ? (
              <Navigate
                to={AppRoute.ROOT}
                replace
              />
            ) : (
              <Navigate
                to={AppRoute.SIGN_IN}
                replace
              />
            )
          }
        />
      </Route>
    </Routes>
  );
};

export { AppRoutes };
