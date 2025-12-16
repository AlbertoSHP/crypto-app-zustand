import z from "zod";

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string(),
  symbol: z.string(),
});

export const CryptoCurrenctResponseSchema = z.object({
  ID: z.number(),
  SYMBOL: z.string(),
  NAME: z.string(),
  LOGO_URL: z.string(),
});

export const CryptoCurrenciesResponseSchema = z.array(CryptoCurrenctResponseSchema);

export const PairSchema = z.object({
  currency: z.string(),
  cryptocurrency: z.string(),
});

export const CryptoPriceSchema = z.object({
  VALUE: z.number(),
  CURRENT_DAY_HIGH: z.number(),
  CURRENT_DAY_LOW: z.number(),
  VALUE_LAST_UPDATE_TS: z.number(),
  MOVING_24_HOUR_CHANGE: z.number(),
  INSTRUMENT: z.string(),
});