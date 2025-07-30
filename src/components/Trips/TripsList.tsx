import { type Trip } from "./TripsListItem";
import styles from "./trip-section.module.css";
import { TripsListItem } from "./TripsListItem";

interface TripCardsListProps {
  trips: Trip[];
}

const TripsList: React.FC<TripCardsListProps> = ({ trips }) => {
  const elements = trips.map((trip) => (
    <TripsListItem
      key={trip.id}
      trip={trip}
    />
  ));

  return <ul className={styles["trip-list"]}>{elements}</ul>;
};

export { TripsList };
