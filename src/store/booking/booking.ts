import { actions, reducer } from "./slice";
import { getBooking, addBooking, deleteBooking } from "./actions";

const allActions = {
  ...actions,
  getBooking,
  addBooking,
  deleteBooking,
};

export { allActions as actions, reducer };
