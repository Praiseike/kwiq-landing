import { useState, useEffect } from 'react';
import axios from 'axios';

import { coins } from '../constants/coins';

export interface CoinProps {
  abbr: string;
  name: string;
  price?: number;
  image: string;
  symbol?: string;
  percentage?: number;
}


const transformData = (coinData: any) => {
  if (coinData) {
    const { open, last } = coinData;
    return {
      price: Number(last),
      percentage: Number(((last - open) / last) * 100).toFixed(2),
    };
  }
  return { price: 1, percentage: 0.00 };
};

const useCryptoData = () => {
  const [processed, setProcessed] = useState<CoinProps[]>(coins);

  const fetchPrices = async () => {
    try {
      const response = await axios.get('https://test-api.kwiq.app/api/v1/quidax/markets/tickers/');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };

  const updatePrices = async () => {
    const data = await fetchPrices();
    if (data) {
      const prices: any = coins.map((coin) => {
        const key = `${coin.abbr}usdt`;
        const priceData = data[key] ? data[key]?.ticker : null;
        return { ...coin, ...transformData(priceData) };
      });
      setProcessed(prices);
    }
  };

  useEffect(() => {
    updatePrices();
    const interval = setInterval(() => {
      updatePrices();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return processed;
};

export default useCryptoData;