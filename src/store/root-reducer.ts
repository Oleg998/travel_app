import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import { reducer as userReducer } from "./auth/auth.ts";
import { reducer as tripReducer } from "./trip/trip.ts";
import { reducer as bookingReducer } from "./booking/booking.ts";


const persistConfig = {
  key: "root",
  storage,
  whitelist:["token"]
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const rootReducer = combineReducers({
  auth: persistedReducer,
  trip: tripReducer,
  booking: bookingReducer,
});

export { rootReducer };
