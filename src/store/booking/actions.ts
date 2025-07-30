import { createAsyncThunk } from "@reduxjs/toolkit";
import { type AsyncThunkConfig } from "../types/async-thunk-config.type";
import { type BookingPayload } from "../../components/TripDetail/Trip-detail-container";
import { type Booking } from "../../components/Bookings/BookingsList";

const getBooking = createAsyncThunk<Booking[], void, AsyncThunkConfig>(
  "booking/get-all",
  async (_, { extra }) => {
    const data = await extra.bookingService.getBookings();
    return data;
  }
);

const addBooking = createAsyncThunk<Booking, BookingPayload, AsyncThunkConfig>(
  "booking/add-booking",
  async (payload, { extra }) => {
    const data = await extra.bookingService.createBooking(payload);
    return data;
  }
);

const deleteBooking = createAsyncThunk<boolean, string, AsyncThunkConfig>(
  "booking/delete-booking",
  async (id, { extra }) => {
    const { message } = await extra.bookingService.cancelBooking(id);
    return message;
  }
);

export { getBooking, addBooking, deleteBooking };
