import styles from "./trip-section.module.css";
import { type Trip } from "./TripsListItem";
import { useState, useEffect } from "react";
import { TripsList } from "./TripsList";
import { Filter } from "../Filter/Filter";

import { useAppSelector } from "../../hook/use-app.selector.hooks";
import { useAppDispatch } from "../../hook/use-app-dispatch.hooks";
import { TripActions } from "../../store/actions";
import { Loader } from "../Loader/Louder";

const TripsSection = () => {
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("");
  const [duration, setDuration] = useState("");

  const isLoading = useAppSelector((state) => state.trip.status === "pending");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(TripActions.getTrips());
  }, [dispatch]);

  const trips = useAppSelector((state) => state.trip.trips);

  const tripsFilter = trips.filter((trip: Trip) => {
    const searchFilter = trip.title
      .toLocaleLowerCase()
      .includes(search.trim().toLocaleLowerCase());
    const searchLevel = level ? trip.level === level : true;
    const searchDuration =
      duration === "0_x_5"
        ? trip.duration >= 1 && trip.duration <= 5
        : duration === "5_x_10"
        ? trip.duration >= 6 && trip.duration <= 10
        : duration === "10"
        ? trip.duration >= 11
        : true;
    return searchFilter && searchLevel && searchDuration;
  });

  return (
    <main>
      <Filter
        search={search}
        level={level}
        duration={duration}
        onSearchChange={setSearch}
        onLevelChange={setLevel}
        onDurationChange={setDuration}
      />
      <section className={styles.trips}>
        <h2 className={styles["visually-hidden"]}>Trips List</h2>
        {isLoading ? (
          <Loader />
        ) : tripsFilter.length > 0 ? (
          <TripsList trips={tripsFilter} />
        ) : (
          <h2>No trips found</h2>
        )}
      </section>
    </main>
  );
};

export { TripsSection };
