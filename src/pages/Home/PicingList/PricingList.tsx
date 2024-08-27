import CryptoTicker from "../../../components/CryptoTicker/CryptoTicker";
import './PricingList.css'
export default function PriceList() {
  return (
    <div className="relative price-list-bg">
      {/* <img src="/assets/images/price-background.svg" alt="" /> */}
      <div className="items-center  inset-0 flex flex-col">
        <div className="sm:w-[50%] mx-auto text-center mt-16">
          <p className="text-[28px] sm:text-[33px] text-white font-[800] mb-5 leading-[40px]">Exchange your crypto like a <br /> boss on KWIQ</p>
          <p className="text-[16px] font-[500] text-[#EBEFF5]">Deposit, buy, sell, swap & send 50+ crypto seamlessly</p>
        </div>
        <div className="w-full">
          <CryptoTicker />
        </div>
      </div>
    </div>
  );
}