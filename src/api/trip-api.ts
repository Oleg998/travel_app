import { authApi } from "./auth-api";
import { type Trip } from "../components/Trips/TripsListItem";

const getTrips = async (): Promise<Trip[]> => {
  const res = await authApi.axiosInstance.get("/trips");
  return res.data;
};

const getTripById = async (tripId: string): Promise<Trip> => {
  const res = await authApi.axiosInstance.get(`/trips/${tripId}`);
  return res.data;
};

export const tripApi = {
getTrips,
getTripById
} as const;