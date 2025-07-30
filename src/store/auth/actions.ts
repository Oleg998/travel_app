import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { type AsyncThunkConfig } from "../types/async-thunk-config.type";
import type { User , UserLogin} from "../../components/auth/Auth";


type SignUpPayload = User;

export type CurrentResponse = {
  fullName: string;
  email: string;
};

export type SignUpResponse = {
  user: {
    fullName: string;
    email: string;
  };
  token: string;
};


const signUp = createAsyncThunk<
  SignUpResponse,
  SignUpPayload,
  AsyncThunkConfig
>(`auth/sign-up`, async (payload, { extra, rejectWithValue}) => {
  try {
    const data = await extra.authService.signUp(payload);
    return data;
  } catch (error) {
    const err = error as AxiosError;

    return rejectWithValue({
      status: err.response?.status || 500,
      message: err.message,
    });
  }
});


const signIn = createAsyncThunk<SignUpResponse, UserLogin, AsyncThunkConfig>(
  `auth/signIn`,
  async (payload, { extra, rejectWithValue }) => {
    try {
      const data = await extra.authService.signIn(payload);
      return data;
    } catch (error) {
      const err = error as AxiosError;

      return rejectWithValue({
        status: err.response?.status || 500,
        message: err.message,
      });
    }
  }
);


const current = createAsyncThunk<User, void, AsyncThunkConfig>(
  `auth/current`,
  async (_, { extra, getState, rejectWithValue }) => {
    const { auth } = getState();

    if (!auth.token) {
      return rejectWithValue({
        status: 401,
        message: "No token found",
      });
    }

    try {
      const data = await extra.authService.getAuthenticatedUser(auth.token);
      return data;
    } catch (error) {
      const err = error as AxiosError;

      return rejectWithValue({
        status: err.response?.status || 500,
        message: err.message,
      });
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      return !!auth.token;
    },
  }
);

export { signUp, signIn, current };
