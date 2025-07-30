import { createSlice } from "@reduxjs/toolkit";
import { DataStatus } from "../data-status.enum";
import { getTrips, getTripsByID } from "./actions";
import { type Trip } from "../../components/Trips/TripsListItem";
import { type DataStatusType } from "../auth/slice";

type State = {
  trips: Trip[];
  selectedTrip: Trip | null;
  status: DataStatusType;
};

const initialState: State = {
  trips: [],
  selectedTrip: null,
  status: DataStatus.IDLE,
};

const { reducer, actions } = createSlice({
  name: "trip",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTrips.pending, (state) => {
      state.status = DataStatus.PENDING;
    });
    builder.addCase(getTrips.fulfilled, (state, action) => {
      state.trips = action.payload;

      state.status = DataStatus.SUCCESS;
    });
    builder.addCase(getTrips.rejected, (state) => {
      state.status = DataStatus.ERROR;
    });
    builder.addCase(getTripsByID.pending, (state) => {
      state.status = DataStatus.PENDING;
    });
    builder.addCase(getTripsByID.fulfilled, (state, action) => {
      state.selectedTrip = action.payload;

      state.status = DataStatus.SUCCESS;
    });
    builder.addCase(getTripsByID.rejected, (state) => {
      state.status = DataStatus.ERROR;
    });
  },
});

export { reducer, actions };
