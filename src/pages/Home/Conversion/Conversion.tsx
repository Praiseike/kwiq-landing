import HeaderText from "../../../components/HeaderText/HeaderText";
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/zoom.css';
import { useState } from "react";

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


const CryptoConverter = ({ coins: any}) => {

  const [coin, setCoin] = useState();
  const [price, setPrice] = useState();

  const currencies = [
    { name: "NGN",rage: 1560},
    { name: "GCD",rage: 1560},
    { name: "GBP",rage: 1960},
  ]
  return (
    <div className="mx-auto bg-white radius-[24px] p-6 shadow-2xl">
      <div className="flex items-center mx-auto mb-4 bg-neutral-100 px-4 py-3 rounded-full w-fit">
        <img src="/assets/images/us-flag.svg" alt="US Flag" className="w-6 h-4 mr-2" />
        <span className="font-semibold">$1 = ₦1,542</span>
      </div>

      <h2 className="text-[26px] text-center font-[700] mb-4">Make a conversion</h2>

      <div className="mb-4">
        <div className="flex items-center w-fit gap-x-1 mb-2">
          <img src="/assets/icons/bitcoin.svg" alt="" />
          <span className="font-semibold">BTC</span>
          <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <input type="text" className="w-full p-2 outline-non py-2.5 bg-[#F2F0F0] px-2 mb-4 rounded-md " placeholder="" />
      </div>

      <div className="mb-6">
        <div className="flex items-center w-fit gap-x-1 mb-2">
          <img src="/assets/icons/naira.svg" alt="" />
          <span className="font-semibold">NGN</span>
          <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <input type="text" className="w-full p-2 outline-non py-2.5 bg-[#F2F0F0] px-2 mb-4 rounded-md " placeholder="" />
      </div>

      <button className="w-full bg-[#4693EB] font-[600] text-white py-3 rounded-md hover:bg-blue-600 transition duration-300">
        Convert your Crypto
      </button>
    </div>
  );
};

export default Conversion;