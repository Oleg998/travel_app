import axios from "axios";
import { type User , type UserLogin } from "../components/auth/Auth";

import { type SignUpResponse } from "../store/auth/actions";

const API_BASE = "https://travel-app-api.up.railway.app/api/v1";

const axiosInstance = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

const setAuthToken = (token: string) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else 
  axiosInstance.defaults.headers.common["Authorization"] = "";
};

const signUp = async (userData: User): Promise<SignUpResponse> => {
  const res = await axiosInstance.post("/auth/sign-up", userData);
  setAuthToken(res.data.token);
  return res.data;
};

const signIn = async (userData: UserLogin): Promise<SignUpResponse> => {
  const res = await axiosInstance.post("/auth/sign-in", userData);
  
  setAuthToken(res.data.token);
  return res.data;
};

const getAuthenticatedUser = async (token: string): Promise<User> => {
  setAuthToken(token);
  try {
    const res = await axiosInstance.get("/auth/authenticated-user");
    return res.data;
  }
  catch(error){
    axiosInstance.defaults.headers.common["Authorization"] = "";
    throw error;
    
  }
 
};

export const authApi = { 
  axiosInstance,
  getAuthenticatedUser, 
  signIn, 
  signUp 
} as const;