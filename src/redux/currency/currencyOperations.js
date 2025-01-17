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
            const valuta = [{base: 'USD', quote: 'PLN'}, {base: 'UER', quote: 'PLN'}, {base: 'ETH', quote: 'PLN'}]
            for (let i = 0; i < valuta.length ; i++) {

            const response = await axios.get(`https://rest.coinapi.io/v1/exchangerate/${valuta[i].base}/${valuta[i].quote}`, {
                headers: {
                    "X-CoinAPI-Key": "a8e44055-3278-4e99-bc41-4b25819e8cf0"
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
