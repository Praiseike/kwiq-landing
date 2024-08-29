import HeaderText from "../../../components/HeaderText/HeaderText";

function SecureTrades() {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-y-3 items-center px-4 sm:px-32 py-10 sm:py-20">
      <div>
        <HeaderText
          tag="OUR TRADES ARE SECURE 🔒"
          title={<span>Secure and <br />automated trades</span>}
          content="All our processes are fully automated which totally eliminates any possibility of slow transactions. Our platform is designed with world class security encryption that is routinely tested to ensure safety of users funds and data."
        />
        <div className="flex items-center sm:jusify-start justify-center gap-x-4 mt-5">
          <button className="px-7 rounded-lg py-2.5 bg-native font-[600] text-white">
            Download
          </button>
          <button className="px-10 rounded-lg py-2.5 border border-gray-400 font-[600] text-gray-800">
            Register
          </button>
        </div>
      </div>
      <div>
        <img src="/assets/images/secure-trades.png" alt="" />
      </div>
    </div>
  );
}

export default SecureTrades