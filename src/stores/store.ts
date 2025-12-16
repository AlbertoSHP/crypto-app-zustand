import { create } from "zustand";
import { devtools } from 'zustand/middleware';
import { fetchCurrencyCryptoPrice, getCryptos } from "../services/CryptoService";
import type { CryptoCurrency, Pair, CryptoPrice } from "../types";

type CryptoStore = {
    cryptocurrencies: CryptoCurrency[];
    price: CryptoPrice;
    loading: boolean;
    fetchCryptos: () => Promise<void>;
    fetchData: (pair: Pair) => Promise<void>;
}


export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptocurrencies: [],
    price: {
        VALUE: 0,
        CURRENT_DAY_HIGH: 0,
        CURRENT_DAY_LOW: 0,
        VALUE_LAST_UPDATE_TS: 0,
        MOVING_24_HOUR_CHANGE: 0,
        INSTRUMENT: ''
    },
    loading: false,
    fetchCryptos: async () => {
        set(() => ({ 
            price: {
                VALUE: 0,
                CURRENT_DAY_HIGH: 0,
                CURRENT_DAY_LOW: 0,
                VALUE_LAST_UPDATE_TS: 0,
                MOVING_24_HOUR_CHANGE: 0,
                INSTRUMENT: ''
            }
        }));
        const cryptocurrencies = await getCryptos();
        set(() => ({ cryptocurrencies }));
    },
    fetchData: async (pair: Pair) => {
        set(() => ({ loading: true }));
        const price = await fetchCurrencyCryptoPrice(pair);
        set(() => ({ price, loading: false }));
    }
})));