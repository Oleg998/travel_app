import { DataStatus } from "../data-status.enum";
import { createSlice } from "@reduxjs/toolkit";
import { signUp, signIn, current } from "./actions";

export type DataStatusType = (typeof DataStatus)[keyof typeof DataStatus];

type User = {
  fullName: string;
  email: string;
};

type State = {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
  status: DataStatusType;
};

const initialState: State = {
  user: null,
  token: null,
  isLoggedIn: false,
  status: DataStatus.IDLE,
};

const { reducer, actions } = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.token = null;
      state.user = null;
      state.isLoggedIn = false;
      state.status=DataStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      state.status = DataStatus.PENDING;
      state.isLoggedIn = false;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.status = DataStatus.SUCCESS;
    });
    builder.addCase(signUp.rejected, (state) => {
      state.isLoggedIn = false;
      state.status = DataStatus.ERROR;
    });
    builder.addCase(signIn.pending, (state) => {
      state.status = DataStatus.PENDING;
      state.isLoggedIn = false;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.status = DataStatus.SUCCESS;
    });
    builder.addCase(signIn.rejected, (state) => {
      state.isLoggedIn = false;
      state.status = DataStatus.ERROR;
    });
    builder.addCase(current.pending, (state) => {
      state.status = DataStatus.PENDING;
      state.isLoggedIn = false;
    });
    builder.addCase(current.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.status = DataStatus.SUCCESS;
    });
    builder.addCase(current.rejected, (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.status = DataStatus.ERROR;
    });
  },
});

export { reducer, actions };
