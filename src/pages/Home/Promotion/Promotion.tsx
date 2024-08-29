
const CryptoPromoSection = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-4 md:px-28 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start selling your crypto <br className="sm:block hidden" /> on KWIQ app today
          </h2>
          <p className="text-lg mb-8">
            Download the KWIQ app today and start selling your <br className="sm:block hidden" />crypto in less than 5 minutes
          </p>
          <div className="flex space-x-4">
            <button>
              <img src="/assets/images/google-button.svg" alt="Get it on Google Play" className="h-12" />
            </button>
            <button>
              <img src="/assets/images/apple-button.png" alt="Download on the App Store" className="h-12" />
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <img src="/assets/images/promo-phones.png" alt="KWIQ App Portfolio" className="w-64 md:w-96 z-10 relative" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoPromoSection;