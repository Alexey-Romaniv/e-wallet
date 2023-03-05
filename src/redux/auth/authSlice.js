import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  registration,
  login,
  logout,
  fetchCurrentUser,
} from "./authOperations";

const initialState = {
  user: {
    name: "",
    email: "",
    avatarUrl: "",
  },
  token: null,
  isLoading: false,
  error: null,
  isFetching: false,
  isAuth: false,
};

const authPersistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

export const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(registration.pending, handlePending)
      .addCase(login.pending, handlePending)
      .addCase(logout.pending, handlePending)
      .addCase(registration.rejected, handleRejected)
      .addCase(login.rejected, handleRejected)
      .addCase(logout.rejected, handleRejected)
      .addCase(registration.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isAuth = true;

        state.isLoading = false;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.user;
        state.isAuth = true;

        state.isLoading = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.token = "";
        state.isAuth = false;
        state.isLoading = false;
        state.user = {
          name: "",
          email: "",
          avatarUrl: "",
        };
      })
      .addCase(fetchCurrentUser.pending, (state) => {
        state.isFetchingCurrentUser = true;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isAuth = true;

        state.isLoading = false;
        state.isFetchingCurrentUser = false;
      })
      .addCase(fetchCurrentUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isFetchingCurrentUser = false;
        state.isAuth = false;
        state.isLoading = false;
      }),
});

export const authPersistReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);
