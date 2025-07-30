import { authApi as authService } from "../api/auth-api";
import { tripApi as tripService} from "../api/trip-api"; 
import { bookingApi as bookingService} from "../api/booking-api"; 

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { rootReducer } from "./root-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { listenerMiddleware } from "./middleware/listeners"

const extraArgument = {
  authService,
  tripService,
  bookingService
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      thunk: {
        extraArgument,
      },
    }).prepend(listenerMiddleware.middleware),
});

export const persistor = persistStore(store);

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export { store, extraArgument, type RootState, type AppDispatch };
