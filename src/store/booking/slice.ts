import { createSlice } from "@reduxjs/toolkit";
import { DataStatus } from "../data-status.enum";
import { getBooking, addBooking, deleteBooking } from "./actions";
import { type Booking } from "../../components/Bookings/BookingsList";
import { type DataStatusType } from "../auth/slice";

type State = {
  booking: Booking[];
  status: DataStatusType;
  isLoading:boolean
};

const initialState: State = {
  booking: [],
  status: DataStatus.IDLE,
  isLoading:false,
};

const { reducer, actions } = createSlice({
  name: "booking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooking.pending, (state) => {
      state.status = DataStatus.PENDING;
    });
    builder.addCase(getBooking.fulfilled, (state, action) => {
      state.booking = action.payload;
      state.status = DataStatus.SUCCESS;
    });
    builder.addCase(getBooking.rejected, (state) => {
      state.status = DataStatus.ERROR;
    });
    builder.addCase(addBooking.pending, (state) => {
      state.status = DataStatus.PENDING;
    });
    builder.addCase(addBooking.fulfilled, (state) => {
      state.status = DataStatus.SUCCESS;
    });
    builder.addCase(addBooking.rejected, (state) => {
      state.status = DataStatus.ERROR;
    });
    builder.addCase(deleteBooking.pending, (state) => {
      state.status = DataStatus.PENDING;
    });
    builder.addCase(deleteBooking.fulfilled, (state) => {
      state.status = DataStatus.SUCCESS;
    });
    builder.addCase(deleteBooking.rejected, (state) => {
      state.status = DataStatus.ERROR;
    });
  },
});

export { reducer, actions };
