import {  createListenerMiddleware,  isRejectedWithValue,} from "@reduxjs/toolkit";

import { AuthActions } from "../actions";

import { Notify } from "notiflix/build/notiflix-notify-aio";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: isRejectedWithValue,
  effect: async (action, listenerApi) => {
    if (
      typeof action.payload === "object" &&
      action.payload !== null &&
      "status" in action.payload &&
      (action.payload as { status: number }).status === 401
    ) {
        Notify.failure("401 detected in type matcher");
      listenerApi.dispatch(AuthActions.logOut());
    }
  },
});
