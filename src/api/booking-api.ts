import { authApi } from "./auth-api";
import { type Booking } from "../components/Bookings/BookingsList";

const createBooking = async (bookingData: {
  tripId: string;
  guests: number;
  date: string;
}): Promise<Booking> => {
  const res = await authApi.axiosInstance.post("/bookings", bookingData);
  return res.data;
};

const getBookings = async (): Promise<Booking[]> => {
  const res = await authApi.axiosInstance.get("/bookings");
  return res.data;
};

const cancelBooking = async (
  bookingId: string
): Promise<{ message:boolean}> => {
  const res = await authApi.axiosInstance.delete(`/bookings/${bookingId}`);
  return res.data;
};

export const bookingApi = {
createBooking,
getBookings,
cancelBooking
} as const;