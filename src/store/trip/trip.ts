import { actions, reducer } from "./slice";
import { getTrips,getTripsByID } from "./actions";

const allActions = {
  ...actions,
  getTrips,
  getTripsByID,
};

export { allActions as actions, reducer };