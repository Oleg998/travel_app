import React, { useState } from "react";
import styles from "./modal.module.css";
import { type Trip } from "../Trips/TripsListItem";
import { Button } from "../Button/button";
import { Input } from "../Input/Input";

interface BookTripModalProps extends Trip {
  isModal: boolean;
  onClose: () => void;
  onBook: (booking: {
    date: string;
    guests: number;
  }) => void;
}

const BookTripModal: React.FC<BookTripModalProps> = ({
  title,
  duration,
  level,
  price,
  isModal,
  onClose,
  onBook,
  
}) => {
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState("");

  const total = price * guests;

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    const booking = { date, guests};
    onBook(booking);
    setGuests(1);
    setDate("");
    onClose();
  };

  const tomorrowDateFormatted = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const tomorrowYear = today.getFullYear();
    const tomorrowMonth = (today.getMonth() + 1).toString().padStart(2, "0");
    const tomorrowDay = today.getDate().toString().padStart(2, "0");
    return `${tomorrowYear}-${tomorrowMonth}-${tomorrowDay}`;
  };

  return (
    <dialog open={isModal}>
      <div className={styles.modal}>
        <div
          className={styles["book-trip-popup"]}
          data-test-id="book-trip-popup"
        >
          <button
            className={styles["book-trip-popup__close"]}
            data-test-id="book-trip-popup-close"
            onClick={onClose}
          >
            ×
          </button>
          <form
            className={styles["book-trip-popup__form"]}
            autoComplete="off"
            onSubmit={handleBook}
          >
            <div className={styles["trip-info"]}>
              <h3
                className={styles["trip-info__title"]}
                data-test-id="book-trip-popup-title"
              >
                {title}
              </h3>
              <div className={styles["trip-info__content"]}>
                <span
                  className={styles["trip-info__duration"]}
                  data-test-id="book-trip-popup-duration"
                >
                  <strong>{duration}</strong> days
                </span>
                <span
                  className={styles["trip-info__level"]}
                  data-test-id="book-trip-popup-level"
                >
                  {level}
                </span>
              </div>
            </div>

            <Input
              label="Date"
              data-test-id="book-trip-popup-date"
              name="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={tomorrowDateFormatted()}
              required
            />

            <Input
              label="Number of guests"
              data-test-id="book-trip-popup-guests"
              name="guests"
              type="number"
              min="1"
              max="10"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              required
            />

            <span className={styles["book-trip-popup__total"]}>
              Total:
              <output
                data-test-id="book-trip-popup-total-value"
                className={styles["book-trip-popup__total-value"]}
              >
                ${total}
              </output>
            </span>

            <Button
              data-test-id="book-trip-popup-submit"
              type="submit"
            >
              Book a trip
            </Button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export { BookTripModal };
