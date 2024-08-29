
import btc from '../assets/coins/image 10.svg';
import ltc from '../assets/coins/image 20.svg';
import doge from '../assets/coins/image 21.svg';
import usdt from '../assets/coins/image 11.svg';
import eth from '../assets/coins/image 12.svg';
import bch from '../assets/coins/image 13.svg';
import bnb from '../assets/coins/image 14.svg';
import trx from '../assets/coins/image 15.svg';
import usdc from '../assets/coins/image 16.svg';
import busd from '../assets/coins/image 17.svg';
import sol from '../assets/coins/image 18.svg';
import aave from '../assets/coins/image 19.svg';
import { CoinProps } from '../hooks/useCryptoData';


export const coins: CoinProps[] = [
  { abbr: "btc", image: btc, name: "Bitcoin", symbol: "BTCUSDT" },
  { abbr: "ltc", image: ltc, name: "Litecoin", symbol: "LTCUSDT" },
  { abbr: "doge", image: doge, name: "Dogecoin", symbol: "DOGEUSDT" },
  { abbr: "usdt", image: usdt, name: "Tether USDT", symbol: "USDTUSD" },
  { abbr: "eth", image: eth, name: "Ethereum", symbol: "ETHUSDT" },
  { abbr: "bch", image: bch, name: "Bitcoin Cash", symbol: "BCHUSDT" },
  { abbr: "bnb", image: bnb, name: "BNB", symbol: "BNBUSDT" },
  { abbr: "trx", image: trx, name: "TRON", symbol: "TRXUSDT" },
  { abbr: "usdc", image: usdc, name: "USDC", symbol: "USDCUSDT" },
  { abbr: "busd", image: busd, name: "BUSD", symbol: "CRYPTO:BUSDUSD" },
  { abbr: "sol", image: sol, name: "Solana", symbol: "SOLUSDT" },
  { abbr: "aave", image: aave, name: "Avalanche", symbol: "AAVEUSDT" }
]

