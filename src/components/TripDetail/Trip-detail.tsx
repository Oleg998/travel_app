import styles from "./trip-detail.module.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { TripDetailContainer } from "./Trip-detail-container";
import { useAppSelector } from "../../hook/use-app.selector.hooks";
import { useAppDispatch } from "../../hook/use-app-dispatch.hooks";
import { TripActions } from "../../store/actions";
import { Loader } from "../Loader/Louder";

const TripDetail = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

   const isLoading = useAppSelector((state) => state.trip.status === "pending");

  const trip = useAppSelector((state) => state.trip.selectedTrip);
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn && id) {
      dispatch(TripActions.getTripsByID(id));
    }
  }, [dispatch, isLoggedIn, id]);

  return (
    <main className={styles["trip-page"]}>
      <h1 className="visually-hidden">Travel App</h1>
      {isLoading ? <Loader/>: trip ? <TripDetailContainer {...trip} /> : <p>Trip not found</p>}
    </main>
  );
};

export { TripDetail };
