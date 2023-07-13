import {createSlice} from "@reduxjs/toolkit";
import {handlePending, handleRejected} from "../auth/authSlice";
import {fetchCurrency} from "./currencyOperations";

const initialState = {
    currency: [],
    isLoading: false,
    error: null,
};

const currencySlice = createSlice({
    name: "transactions",
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

export const currencyReducer = currencySlice.reducer;