import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {toast} from "react-toastify";

export const fetchCurrency = createAsyncThunk(
    "currency",
    async (_, {rejectWithValue, getState}) => {
        try {
            const currencyFromStorage = getState().currency.currency;
            if (currencyFromStorage.length) {
                return currencyFromStorage;
            }
            let currencies = [];
            const valuta = ['USD', 'EUR', 'PLN']
            for (let i = 0; i < valuta.length ; i++) {

            const response = await axios.get(`https://rest.coinapi.io/v1/exchangerate/${valuta[i]}/UAH`, {
                headers: {
                    "X-CoinAPI-Key": "831F3FFF-5A48-49D6-81FB-7B491AA8A272"
                }
            })
                const {data} = response;
             currencies.push(data);
            }
            return currencies;
        } catch (e) {
            toast.error(e.response.data.message);
            rejectWithValue(e.response.data.message)
        }
    }
)