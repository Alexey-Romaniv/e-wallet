import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://e-wallet-backend.onrender.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const registration = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/register", userData);
      token.set(data.token);
      return data;
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/login", userData);
      token.set(data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/users/logout");
      token.unset();
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, { rejectWithValue, getState }) => {
    const tokenFromStorage = getState().auth.token;

    if (!tokenFromStorage) {
      return rejectWithValue("");
    }
    token.set(tokenFromStorage);
    try {
      const { data } = await axios("/users/current");
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
