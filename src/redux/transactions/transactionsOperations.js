import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTransactions = createAsyncThunk(
    "transactions/fetchAll",
    async (_ , {rejectedWithValue}) => {
        try{
            const {data} = await axios.get("/transactions");
            return data
        }
        catch (e){
            rejectedWithValue(e.message);
        }
    }
);

export const addTransaction = createAsyncThunk(
    "transactions/add",
    async (transactionData, {rejectedWithValue})=>{
        try {
            console.log(transactionData)
            const {data} = await axios.post("/transactions", transactionData);

            return data;
        }
        catch (e){
            rejectedWithValue(e.message);
        }
    }
);

export const deleteTransaction = createAsyncThunk(
    "transactions/delete",
    async (transactionId, {rejectedWithValue}) => {
        try {
            const {data} = axios.delete(`/transactions/${transactionId}`)
            return data;
        }catch (e) {
            rejectedWithValue(e.message)
        }
    }
)
