import styles from "./trip-detail.module.css";
import { type Trip } from "../Trips/TripsListItem";
import { BookTripModal } from "../Modal/Modal";
import { Button } from "../Button/button";
import { useState } from "react";
import { useAppDispatch } from "../../hook/use-app-dispatch.hooks";
import { BookingsActions } from "../../store/actions";
import Notiflix from "notiflix";

export type BookingPayload = {
  tripId: string;
  date: string;
  guests: number;
};

Notiflix.Notify.init({
  className: "notification",
});

const TripDetailContainer: React.FC<Trip> = ({
  id,
  description,
  duration,
  image,
  title,
  level,
  price,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useAppDispatch();

  const handleBook = async ({
    date,
    guests,
  }: {
    date: string;
    guests: number;
  }) => {
    try {
      await dispatch(
        BookingsActions.addBooking({
          tripId: id,
          guests,
          date,
        })
      ).unwrap();

      Notiflix.Notify.success("Registration successful");
    } catch (error) {
      Notiflix.Notify.failure("Error while booking. Please try again.");
    }
  };

  return (
    <>
      <div className={styles.trip}>
        <img
          data-test-id="trip-details-image"
          src={image}
          className={styles.trip__img}
          alt={`${title} photo`}
        />
        <div className={styles["trip__content"]}>
          <div className={styles["trip-info"]}>
            <h3
              data-test-id="trip-details-title"
              className={styles["trip-info__title"]}
            >
              {title}
            </h3>
            <div className={styles["trip-info__content"]}>
              <span
                data-test-id="trip-details-duration"
                className={styles["trip-info__duration"]}
              >
                <strong>{duration}</strong> days
              </span>
              <span
                data-test-id="trip-details-level"
                className={styles["trip-info__level"]}
              >
                {level}
              </span>
            </div>
          </div>
          <div
            data-test-id="trip-details-description"
            className={styles.trip__description}
          >
            {description}
          </div>
          <div className={styles["trip-price"]}>
            <span>Price</span>
            <strong
              data-test-id="trip-details-price-value"
              className={styles["trip-price__value"]}
            >
              {price}
            </strong>
          </div>
          <Button
            data-test-id="trip-details-button"
            className="trip__button"
            onClick={() => setIsModalOpen(true)}
          >
            Book a trip
          </Button>
        </div>
      </div>
      <BookTripModal
        isModal={isModalOpen}
        title={title}
        duration={duration}
        level={level}
        price={price}
        image={image}
        onClose={() => setIsModalOpen(false)}
        onBook={handleBook}
        id={""}
      />
    </>
  );
};

export { TripDetailContainer };
