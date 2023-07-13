import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCurrency = createAsyncThunk(
    "currency",
    async (_, {rejectedWithValue}) => {
        try {

            const {data} = await axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
            return data;
        } catch (e) {
            rejectedWithValue(e.message)
        }
    }
)