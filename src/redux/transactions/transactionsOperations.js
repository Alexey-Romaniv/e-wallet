import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {toast} from "react-toastify";

export const fetchTransactions = createAsyncThunk(
    "transactions/fetchAll",
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await axios.get("/transactions");
            return data
        } catch (e) {
            rejectedWithValue(e.message);
        }
    }
);
export const fetchStatistic = createAsyncThunk(
    "transactions/fetchStatistic",
    async (date, {rejectedWithValue}) => {
        try {
            const response = await axios.get(`/transactions/filtered?month=${date?.selectedMonth || ''}&year=${date?.selectedYear || ''}`);
            const {data} = response;
            return data;
        } catch (e) {
            toast.error(e.response.data.message)
            rejectedWithValue(e.response.data.message);
        }
    }
);

export const addTransaction = createAsyncThunk(
    "transactions/add",
    async (transactionData, {rejectedWithValue}) => {
        try {
            console.log(transactionData)
            const response = await axios.post("/transactions", transactionData);
            const {data} = response;
            return data;
        } catch (e) {
            toast.error(e.response.data.message)
            rejectedWithValue(e.response.data.message);
        }
    }
);

export const deleteTransaction = createAsyncThunk(
    "transactions/delete",
    async (transactionId, {rejectedWithValue}) => {
        try {
            const response = axios.delete(`/transactions/${transactionId}`)
            const {data} = response;
            return data;
        } catch (e) {
            toast.error(e.response.data.message)
            rejectedWithValue(e.response.data.message);
        }
    }
)
