
import { useEffect, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import useCryptoData from '../../hooks/useCryptoData';


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
    <div className="tradingview-widget-container border-0" ref={containerRef}>
      <div className="tradingview-widget-container__widget border-0"></div>
    </div>
  );
};


const CryptoTicker = () => {
  const processed = useCryptoData();

  return (
    <div className="mx-auto w-full md:w-[60%]">
      <div className="text-black w-full rounded-t-xl pb-12 bg-white overflow-hidden">
        <div className="bg-white overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="border-b mb-4 border-blue-500">
              <tr>
                <th className="px-6 py-6 text-[14px] font-medium text-gray-500 capitalize">Cryptocurrencies</th>
                <th className="px-6 py-6 text-[14px] font-medium text-gray-500 capitalize">Last Price</th>
                <th className="px-6 py-6 text-[14px] font-medium text-gray-500 capitalize">24hr% Change</th>
                <th className="px-9 py-6 text-[14px] font-medium text-gray-500 capitalize sm:block hidden">Last 24hours</th>
              </tr>
            </thead>
            <tbody className="mb-4">
              {processed.map((coin, index) => (
                <tr key={index} className="bg-transparent font-[500] border-gray-200">
                  <td className="px-6 py-3 flex items-center space-x-2">
                    <img src={coin.image} alt={coin.name} className="crypto-icon w-8 h-8 rounded-full" />
                    <span>{coin.name || <Skeleton />}</span>
                  </td>
                  <td className="px-6 py-3 text-gray-600">
                    {coin.price ? `$${Number(coin.price).toLocaleString()}` : <Skeleton />}
                  </td>
                  <td className={`px-6 py-3 ${coin && coin.percentage && (Number(coin?.percentage) >= 0) ? 'text-green-500' : 'text-red-600'}`}>
                    {coin.percentage !== (null || undefined) ? `${Math.abs(coin.percentage)}%` : <Skeleton />}
                  </td>
                  <td className="px-6 py-3 hidden sm:block ">
                    <div className="h-8  rounded-sm w-[12rem]" >
                      {<TradingViewWidget symbol={coin.symbol} />}
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
