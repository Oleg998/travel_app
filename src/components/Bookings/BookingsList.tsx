import styles from "./bookings.module.css";

export interface Booking {
  id: string;
  userId?: string;
  tripId: string;
  guests: number;
  date: string;
  trip: {
    title: string;
    duration: number;
    price: number;
  };
  totalPrice: number;
  createdAt?: string;
}

interface BookingsListProps {
  bookings: Booking[];
  onCancel?: (id: string) => void;
}
const BookingsList: React.FC<BookingsListProps> = ({ bookings, onCancel }) => {
  return (
    <ul className={styles.bookings__list}>
      {bookings.map(({ id, trip, date, totalPrice, guests }) => (
        <li
          data-test-id="booking"
          className={styles.booking}
          key={id}
        >
          <h3
            data-test-id="booking-title"
            className={styles.booking__title}
          >
            {trip.title}
          </h3>
          <span
            data-test-id="booking-guests"
            className={styles.booking__guests}
          >
            {guests} guests
          </span>
          <span
            data-test-id="booking-date"
            className={styles.booking__date}
          >
            {date}
          </span>
          <span
            data-test-id="booking-total"
            className={styles.booking__total}
          >
            ${totalPrice}
          </span>
          <button
            data-test-id="booking-cancel"
            className={styles.booking__cancel}
            title="Cancel booking"
            onClick={() => onCancel?.(id)}
          >
            <span className="visually-hidden">Cancel booking</span>×
          </button>
        </li>
      ))}
    </ul>
  );
};

export { BookingsList };
