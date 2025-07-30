import { createAsyncThunk } from "@reduxjs/toolkit";
import { type AsyncThunkConfig } from "../types/async-thunk-config.type";

import { type Trip } from "../../components/Trips/TripsListItem";



const getTrips = createAsyncThunk<
  Trip[],void, 
  AsyncThunkConfig
>('trip/get-all', async  (_, { extra }) => {
  const data = await extra.tripService.getTrips();
  return data;
});

const getTripsByID = createAsyncThunk<
   Trip, 
  string , 
  AsyncThunkConfig
>('trip/get-one', async  (id ,{ extra }) => {
  const data = await extra.tripService.getTripById(id);
  return data;
});

export { getTrips,getTripsByID};