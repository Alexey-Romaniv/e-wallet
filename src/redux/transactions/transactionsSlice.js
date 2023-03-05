import {createSlice} from "@reduxjs/toolkit";

import {addTransaction, deleteTransaction, fetchTransactions} from "./transactionsOperations";
import {handlePending, handleRejected} from "../auth/authSlice";
import {logout} from "../auth/authOperations";

const initialState = {
    transactions: [],
    isLoading: false,
    error: null,
};

const transactionsSlice = createSlice({
    name: "transactions",
    initialState,
    extraReducers: builder => builder
        .addCase(fetchTransactions.pending, handlePending)
        .addCase(addTransaction.pending, handlePending)
        .addCase(deleteTransaction.pending, handlePending)
        .addCase(fetchTransactions.rejected, handleRejected)
        .addCase(addTransaction.rejected, handleRejected)
        .addCase(deleteTransaction.rejected, handleRejected)
        .addCase(fetchTransactions.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.error = null;
            state.transactions = payload;
        }).addCase(addTransaction.fulfilled, (state, {payload}) =>{
            state.isLoading = false;
            state.error = null;
            state.transactions.push(payload)
        }).addCase(deleteTransaction.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.error = null;
            const index = state.transactions.findIndex(
                ({id}) => id === payload.id);
            state.transactions.splice(index, 1);
        }).addCase(logout.fulfilled, (state)=> {
            state.transactions = [];
            state.error = null;
            state.isLoading = false;
        })
})

export const  transactionsReducer = transactionsSlice.reducer;