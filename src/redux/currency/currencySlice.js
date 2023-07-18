import {createSlice} from "@reduxjs/toolkit";
import {handlePending, handleRejected} from "../auth/authSlice";
import {fetchCurrency} from "./currencyOperations";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from "redux-persist";


const initialState = {
    currency: [],
    isLoading: false,
    error: null,
};

const currencyPersistConfig = {
    key: "currency",
    storage,
    expires: 86400,
    whitelist: ["currency"]
};
const currencySlice = createSlice({
    name: "currency",
    initialState,
    extraReducers: builder => builder
        .addCase(fetchCurrency.pending, handlePending)
        .addCase(fetchCurrency.rejected, handleRejected)
        .addCase(fetchCurrency.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.error = null;
            state.currency = payload;
        })
})

export const currencyPersistReducer = persistReducer(currencyPersistConfig, currencySlice.reducer);