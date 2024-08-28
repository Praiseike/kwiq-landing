
import { useEffect, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import axios from 'axios';
import btc from '../../assets/coins/image 10.svg';
import ltc from '../../assets/coins/image 20.svg';
import doge from '../../assets/coins/image 21.svg';
import usdt from '../../assets/coins/image 11.svg';
import eth from '../../assets/coins/image 12.svg';
import bch from '../../assets/coins/image 13.svg';
import bnb from '../../assets/coins/image 14.svg';
import trx from '../../assets/coins/image 15.svg';
import usdc from '../../assets/coins/image 16.svg';
import busd from '../../assets/coins/image 17.svg';
import sol from '../../assets/coins/image 18.svg';
import aave from '../../assets/coins/image 19.svg';



interface CoinProps {
  abbr: string;
  name: string;
  price?: number;
  image: string;
  symbol?: string;
  percentage?: number;
}

const coins: CoinProps[] = [
  { abbr: "btc", image: btc, name: "Bitcoin", symbol: "BINANCE:BTCUSDT" },
  { abbr: "ltc", image: ltc, name: "Litecoin", symbol: "BINANCE:LTCUSDT" },
  { abbr: "doge", image: doge, name: "Dogecoin", symbol: "BINANCE:DOGEUSDT" },
  { abbr: "usdt", image: usdt, name: "Tether USDT", symbol: "BINANCE:USDT" },
  { abbr: "eth", image: eth, name: "Ethereum", symbol: "BINANCE:ETHUSDT" },
  { abbr: "bch", image: bch, name: "Bitcoin Cash", symbol: "BINANCE:BCHUSDT" },
  { abbr: "bnb", image: bnb, name: "BNB", symbol: "BINANCE:BNBUSDT" },
  { abbr: "trx", image: trx, name: "TRON", symbol: "BINANCE:TRXUSDT" },
  { abbr: "usdc", image: usdc, name: "USDC", symbol: "BINANCE:USDCUSDT" },
  { abbr: "busd", image: busd, name: "BUSD", symbol: "CRYPTO:BUSDUSD" },
  { abbr: "sol", image: sol, name: "Solana", symbol: "BINANCE:SOLUSDT" },
  { abbr: "aave", image: aave, name: "Avalanche", symbol: "BINANCE:AAVEUSDT" }
]


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





const TradingViewWidget = ({ symbol = 'BINANCE:BTCUSDT' }) => {
  const containerRef = useRef<any>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.src = '/js/trading-hack.js';
    script.async = true;
    script.onload = () => setLoaded(true)

    // Set the script's innerHTML with the configuration object
    script.innerHTML = JSON.stringify({
      symbol,
      width: '100%',
      height: '100%',
      locale: 'en',
      dateRange: '1D',
      colorTheme: 'light',
      isTransparent: false,
      autosize: true,
      largeChartUrl: '',
      chartOnly: true,
      noTimeScale: true,
    });


    // Append the script to the container div
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    // Clean up the script on component unmount
    return () => {
      if (containerRef.current) {

        containerRef.current.innerHTML = '';
      }
    };
  }, [symbol]);



  useEffect(() => {

  }, [loaded]);


  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};


const CryptoTicker = () => {
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
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto w-full md:w-[70%]">
      <div className="text-black w-full rounded-t-xl pb-12 bg-white overflow-hidden">
        <div className="bg-white overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="border-b mb-4 border-blue-500">
              <tr>
                <th className="px-6 py-6 text-[14px] font-medium text-gray-500 capitalize">Cryptocurrencies</th>
                <th className="px-6 py-6 text-[14px] font-medium text-gray-500 capitalize">Last Price</th>
                <th className="px-6 py-6 text-[14px] font-medium text-gray-500 capitalize">24hr% Change</th>
                <th className="px-6 py-6 text-[14px] font-medium text-gray-500 capitalize sm:block hidden">Last 24hours</th>
              </tr>
            </thead>
            <tbody className="mb-4">
              {processed.map((coin, index) => (
                <tr key={index} className="bg-white font-[500] border-gray-200">
                  <td className="px-6 py-3 flex items-center space-x-2">
                    <img src={coin.image} alt={coin.name} className="crypto-icon w-8 h-8 rounded-full" />
                    <span>{coin.name || <Skeleton />}</span>
                  </td>
                  <td className="px-6 py-3 text-gray-600">
                    {coin.price ? `$${Number(coin.price).toLocaleString()}` : <Skeleton />}
                  </td>
                  <td className={`px-6 py-3 ${coin && coin.percentage && (Number(coin?.percentage) > 0) ? 'text-green-500' : 'text-red-600'}`}>
                    {coin.percentage !== (null || undefined) ? `${coin.percentage}%` : <Skeleton />}
                  </td>
                  <td className="px-6 py-3 hidden sm:block ">
                    <div className="h-8 bg-gray-200 rounded-sm w-[12rem]" >
                      <TradingViewWidget symbol={coin.symbol} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CryptoTicker;
