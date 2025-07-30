import styles from "./trip-section.module.css";
import { type Trip } from "./TripsListItem";
import { Link } from "react-router-dom";

interface TripCardProps extends Omit<Trip, "id"> {
  link: string;
}

const TripCard: React.FC<TripCardProps> = ({
  image,
  title,
  duration,
  level,
  price,
  link,
}) => {
  return (
    <li className={styles["trip-card"]}>
      <img
        src={image}
        alt={`${title} photo`}
      />
      <div className={styles["trip-card__content"]}>
        <div className={styles["trip-info"]}>
          <h3 className={styles["trip-info__title"]}>{title}</h3>
          <div className={styles["trip-info__content"]}>
            <span className={styles["trip-info__duration"]}>
              <strong>{duration}</strong> days
            </span>
            <span className={styles["trip-info__level"]}>{level}</span>
          </div>
        </div>
        <div className={styles["trip-price"]}>
          <span>Price</span>
          <strong className={styles["trip-price__value"]}>${price}</strong>
        </div>
      </div>
      <Link
        to={link}
        className={styles.button}
      >
        Discover a trip
      </Link>
    </li>
  );
};

export { TripCard };
