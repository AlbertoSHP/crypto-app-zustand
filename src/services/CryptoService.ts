import axios from "axios";
import { CryptoCurrenciesResponseSchema, CryptoPriceSchema } from "../schema/crypto-schema";
import type { Pair } from "../types";

export async function getCryptos() {
    const url = 'https://data-api.coindesk.com/asset/v1/top/list?page=1&page_size=20&sort_by=CIRCULATING_MKT_CAP_USD&sort_direction=DESC&groups=ID,BASIC,SUPPLY,PRICE,MKT_CAP,VOLUME,CHANGE,TOPLIST_RANK&toplist_quote_asset=USD'
    const {data : {Data}} = await axios.get(url);
    const result = CryptoCurrenciesResponseSchema.safeParse(Data.LIST);
    if(!result.success) {
        console.error("Error fetching cryptocurrencies:", result.error);
        return [];
    } else {
        return result.data;
    }
}

export async function fetchCurrencyCryptoPrice(pair: Pair) {
    const url = `https://data-api.coindesk.com/index/cc/v1/latest/tick?market=cadli&instruments=${pair.cryptocurrency}-${pair.currency}&apply_mapping=true`;
    const { data: Data } = await axios.get(url);

    const result = CryptoPriceSchema.safeParse(Data.Data[pair.cryptocurrency + '-' + pair.currency]);
    if(result.success) {
        return result.data;
    }
}