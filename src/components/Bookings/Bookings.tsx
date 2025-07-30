import styles from "./bookings.module.css";
import { useEffect } from "react";
import { BookingsList } from "./BookingsList";
import { useAppDispatch } from "../../hook/use-app-dispatch.hooks";
import { useAppSelector } from "../../hook/use-app.selector.hooks";
import { BookingsActions } from "../../store/actions";
import { Loader } from "../Loader/Louder";
import Notiflix from "notiflix";

Notiflix.Notify.init({
  className: "notification",
});

const Bookings = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(BookingsActions.getBooking());
  }, [dispatch]);

  const bookings = useAppSelector((state) => state.booking.booking);
  const isLoading = useAppSelector(
    (state) => state.booking.status === "pending"
  );

 const onCancel = async (id: string) => {
  const resultAction = await dispatch(BookingsActions.deleteBooking(id));

  if (BookingsActions.deleteBooking.fulfilled.match(resultAction)) {
    dispatch(BookingsActions.getBooking());
    Notiflix.Notify.success('Booking was successfully canceled');
  } else {
    Notiflix.Notify.failure('Failed to cancel the booking');
  }
};


  return (
    <main className={styles["bookings-page"]}>
      <h1 className="visually-hidden">Travel App</h1>

      {isLoading ? (
        <Loader />
      ) : bookings.length ? (
        <BookingsList
          bookings={bookings}
          onCancel={onCancel}
        />
      ) : (
        <p>No Trip on Bookings</p>
      )}
    </main>
  );
};

export { Bookings };
