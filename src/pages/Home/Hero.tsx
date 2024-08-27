
export default function Hero() {
  return (
    <div className="sm:container px-4 sm:h-[115vh] mx-auto flex items-end mt-24">
      <div className=" flex justify-between w-full sm:pl-12 sm:ml-3 flex-col sm:flex-row gap-y-10">
        <div className="sm:w-[520px]">
          <p className="font-[700] leading-[40px] sm:leading-[66px] text-[#0B5CBA] text-center text-[34px] sm:text-[53px] sm:text-start">
            Trade over 20<br /> Crypto Instantly in<br /> Nigeria
          </p>
          <p className="text-[15px] sm:text-[17px] font-[500] text-sub my-7 text-center sm:text-start">
            Welcome to KWIQ, the ultimate crypto exchange for all your digital asset needs. Effortlessly receive, buy, sell, store, swap and send over 20 cryptocurrencies. Enjoy secure, fast transactions and a user-friendly experience. Start trading smarter with KWIQ <br className="hidden sm:block"/>now!
          </p>
          <div className="flex items-center gap-x-4">
            <button>
              <img src="/assets/images/google-button.svg"/>
            </button>
            <button>
              <img src="/assets/images/apple-button.svg"/>
            </button>
          </div>
        </div>
        <div className="w-fit ">
          <img src="/assets/images/splash1.png" alt="" className="w-[620px]" />
        </div>

      </div>
    </div>
  )
}