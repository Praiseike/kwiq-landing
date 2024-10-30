import HeaderText from "../../../components/HeaderText/HeaderText";
import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";
import { useEffect, useState } from "react";
import useCryptoData, { CoinProps } from "../../../hooks/useCryptoData";
import useCurrencyRate from "../../../hooks/useCurrencyRate";

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
  {
    name: "NGN",
    symbol: "₦",
  },
  {
    name: "USD",
    symbol: "$",
  },
];

const CryptoConverter = () => {
  const coins = useCryptoData();
  const [coin, setCoin] = useState<CoinProps | null>(null);
  const [currency, setCurrency] = useState(currencies[0]);
  const [coinAmount, setCoinAmount] = useState<string>("");
  const [price, setPrice] = useState<number | null>(null);

  const currencyRate = useCurrencyRate(currency.name);

  useEffect(() => {
    if (!coin?.price) setCoin(coins[0]);
  }, [coins]);

  const handleAmountChange = (e: any) => {
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, "");
    setCoinAmount(numericValue);
  };

  const handleConvert = () => {
    if (coin && coin.price && currencyRate) {
      const newPrice = Number(coinAmount) * coin.price * currencyRate;
      setPrice(newPrice);
    }
  };

  return (
    <div className="mx-auto bg-white rounded-[24px] p-6 shadow-2xl">
      <div className="flex items-center mx-auto mb-4 bg-neutral-100 px-4 py-3 rounded-full w-fit">
        <img
          src="/assets/images/us-flag.svg"
          alt="US Flag"
          className="w-6 h-4 mr-2"
        />
        <span className="font-semibold">
          $1 = {currency.symbol}
          {currencyRate ?? "..."}
        </span>
      </div>

      <h2 className="text-[26px] text-center font-[700] mb-4">
        Make a conversion
      </h2>

      <div className="mb-4">
        <Menu
          overflow="auto"
          viewScroll="auto"
          menuButton={
            <button className="flex items-center w-fit gap-x-1 mb-2">
              <img src={coin?.image} alt={coin?.name} />
              <span className="font-semibold uppercase">{coin?.abbr}</span>
              <svg
                className="w-4 h-4 ml-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          }
          transition
        >
          {coins.map((coin, index) => (
            <MenuItem onClick={() => setCoin(coin)} key={index}>
              {coin.name}
            </MenuItem>
          ))}
        </Menu>
        <input
          type="number"
          disabled={!currencyRate}
          value={coinAmount ?? ""}
          onChange={handleAmountChange}
          className="w-full p-2 bg-gray-100 rounded-md"
        />
      </div>

      <div className="mb-6">
        <Menu
          overflow="auto"
          viewScroll="auto"
          transition
          menuButton={
            <button className="flex items-center w-fit gap-x-1 mb-2">
              <div className="w-7 h-7 font-[500] rounded-full bg-green-500 text-white flex items-center justify-center">
                {currency.symbol[0]}
              </div>
              <span className="font-semibold">{currency.name}</span>
              <svg
                className="w-4 h-4 ml-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          }
        >
          {currencies.map((currency, index) => (
            <MenuItem onClick={() => setCurrency(currency)} key={index}>
              {currency.name}
            </MenuItem>
          ))}
        </Menu>
        <input
          type="number"
          value={price ?? ""}
          readOnly
          className="w-full p-2 bg-gray-100 rounded-md"
        />
      </div>

      <button
        onClick={handleConvert}
        className="w-full bg-[#4693EB] font-[600] text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Convert your Crypto
      </button>
    </div>
  );
};

export default Conversion;
