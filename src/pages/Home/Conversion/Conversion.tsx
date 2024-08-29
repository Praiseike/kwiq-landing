import HeaderText from "../../../components/HeaderText/HeaderText";
import { Menu, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/zoom.css';
import { useState } from "react";
import useCryptoData, { CoinProps } from "../../../hooks/useCryptoData";

function Conversion() {
  return (
    <div className="px-4 sm:px-36 py-7 sm:py-20 flex flex-col sm:flex-row gap-y-3 items-center justify-between">
      <HeaderText
        title="Instant conversion"
        content="Whether you're buying, selling or swapping your assets, the transaction is carried out as soon as you click the button. No delays whatsoever."
        tag="BEST MARKET RATES 📈"
      />
      <div className="sm:w-[450px] w-full">
        <CryptoConverter />
      </div>
    </div>
  );
}

const currencies = [
  { name: "NGN", rate: 1560 },
  { name: "GCD", rate: 1560 },
  { name: "GBP", rate: 1960 },
]

interface CurrencyProps {
  name: string;
  rate: number;
}

const CryptoConverter = () => {

  const coins = useCryptoData();

  const [coin, setCoin] = useState(coins[0]);
  const [currency, setCurrency] = useState<CurrencyProps>(currencies[0]);
  const [coinAmount, setCoinAmount] = useState<any>();
  const [price, setPrice] = useState(0);

  const handleAmountChange = (e: any) => {
    const value = e.target.value;
    if (value == '0' || value == '')
      setCoinAmount(null);
    else
      setCoinAmount(Number(value.replace(/\D/g, '')))
  }

  const handleConvert = () => {
    if (coin && coin.price && currency) {
      const newPrice = coin.price  * currency?.rate;
      setPrice(newPrice);
    }
  }



  return (
    <div className="mx-auto bg-white radius-[24px] p-6 shadow-2xl">
      <div className="flex items-center mx-auto mb-4 bg-neutral-100 px-4 py-3 rounded-full w-fit">
        <img src="/assets/images/us-flag.svg" alt="US Flag" className="w-6 h-4 mr-2" />
        <span className="font-semibold">$1 = ₦1,542</span>
      </div>

      <h2 className="text-[26px] text-center font-[700] mb-4">Make a conversion</h2>

      <div className="mb-4">
        <Menu overflow="auto" viewScroll="auto" menuButton={

          <button className="flex items-center w-fit gap-x-1 mb-2">
            <img src={coin?.image} alt="" />
            <span className="font-semibold uppercase">{coin?.abbr}</span>
            <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        } transition>
          {coins.map((coin: CoinProps, index: number) => (
            <MenuItem onClick={() => setCoin(coin)} key={index}>{coin.name}</MenuItem>
          ))}
        </Menu>
        <input type="number" value={coinAmount} onChange={handleAmountChange} className="w-full p-2 outline-non py-2.5 bg-[#F2F0F0] px-2 mb-4 rounded-md " placeholder="" />
      </div>

      <div className="mb-6">
        <Menu overflow="auto" viewScroll="auto" transition menuButton={

          <button className="flex items-center w-fit gap-x-1 mb-2">
            <img src="/assets/icons/naira.svg" alt="" />
            <span className="font-semibold">{currency?.name}</span>
            <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        } >
          {currencies.map((currency: CurrencyProps, index: number) => (
            <MenuItem onClick={() => setCurrency(currency)} key={index}>{currency?.name}</MenuItem>
          ))}
        </Menu>
        <input type="number" value={price} className="w-full p-2 outline-non py-2.5 bg-[#F2F0F0] px-2 mb-4 rounded-md " placeholder="" />
      </div>

      <button onClick={handleConvert} className="w-full bg-[#4693EB] font-[600] text-white py-3 rounded-md hover:bg-blue-600 transition duration-300">
        Convert your Crypto
      </button>
    </div>
  );
};

export default Conversion;