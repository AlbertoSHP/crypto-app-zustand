import { useMemo } from 'react';
import { useCryptoStore } from '../stores/store';
import { currencies } from '../data';
import Spinner from './Spinner';

const CryptoPriceDisplay = () => {
    const { price, cryptocurrencies, loading } = useCryptoStore();
    const hasResult = useMemo(() => !Object.values(price).includes(0), [price]);

  return (
    <div className='result-wrapper'>
      { loading ? <Spinner /> : hasResult &&
        <>
            <h2>Quote</h2>
            <div className='result'>
                <img src={cryptocurrencies.find(c => c.SYMBOL === price.INSTRUMENT.split('-')[0])?.LOGO_URL} alt="Cryptocurrency Logo" />
                <div>
                    <p>Price is: <span>{price?.VALUE.toFixed(2)+currencies.find(c => c.code === price.INSTRUMENT.split('-')[1])?.symbol}</span></p>
                    <p>Highest price today: <span>{price?.CURRENT_DAY_HIGH.toFixed(2)+currencies.find(c => c.code === price.INSTRUMENT.split('-')[1])?.symbol}</span></p>
                    <p>Lowest price today: <span>{price?.CURRENT_DAY_LOW.toFixed(2)+currencies.find(c => c.code === price.INSTRUMENT.split('-')[1])?.symbol}</span></p>
                    <p>Last update: <span>{new Date(price?.VALUE_LAST_UPDATE_TS * 1000).toLocaleString()}</span></p>
                    <p>24 hour change: <span>{price?.MOVING_24_HOUR_CHANGE}</span></p>
                </div>
            </div>
        </>
    }
    </div>
  )
}

export default CryptoPriceDisplay
