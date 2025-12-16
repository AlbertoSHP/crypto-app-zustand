import { useState } from "react";
import { currencies } from "../data"
import { useCryptoStore } from "../stores/store"
import type { Pair } from "../types";
import ErrorMessage from "./ErrorMessage";

const CryptoSearchForm = () => {
    const { cryptocurrencies, fetchData } = useCryptoStore();
    const [pair, setPair] = useState<Pair>({
        currency: '',
        cryptocurrency: ''
    });
    const [error, setError] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Object.values(pair).includes('')) {
            setError('Both fields are required');
            return;
        }
        setError('');
        fetchData(pair);
    }

  return (
    <form className="form" onSubmit={handleSubmit}>
        { error && <ErrorMessage>{error}</ErrorMessage> }
      <div className="field">
        <label className="label" htmlFor="currency">Select Cryptocurrency</label>
        <select
            name='currency'
            id='currency'
            onChange={handleChange}
            value={pair.currency}
        >
            <option value="">-- Choose a currency --</option>
            {
                currencies.map( currency => (
                    <option
                        key={currency.code}
                        value={currency.code}
                    >
                        {currency.name}
                    </option>
                ))
            }
        </select>
      </div>

      <div className="field">
        <label className="label" htmlFor="cryptocurrency">Select Cryptocurrency</label>
        <select
            name='cryptocurrency'
            id='cryptocurrency'
            onChange={handleChange}
            value={pair.cryptocurrency}
        >
            <option value="">-- Choose a cryptocurrency --</option>
            {
                cryptocurrencies.map( crypto => (
                    <option
                        key={crypto.ID}
                        value={crypto.SYMBOL}
                    >
                        {crypto.SYMBOL} - {crypto.NAME}
                    </option>
                ))
            }
        </select>
      </div>

      <input
          type="submit"
          value="Get Quote"
          className="btn"
      />
    </form>
  )
}

export default CryptoSearchForm
