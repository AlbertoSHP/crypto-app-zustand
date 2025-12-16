import z from "zod";
import type { CurrencySchema, CryptoCurrenctResponseSchema, PairSchema, CryptoPriceSchema } from "../schema/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>;
export type CryptoCurrency = z.infer<typeof CryptoCurrenctResponseSchema>;
export type Pair = z.infer<typeof PairSchema>;
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>;