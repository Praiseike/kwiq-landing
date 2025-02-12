import { links } from "../../../constants/links";
import { trackTwitterEvent } from "../../../utils/twitterEvents";
import "./style.css";

const CryptoPromoSection = () => {

  const downloadClick = (link: string) => {
    trackTwitterEvent("tw-ojgmg-p42c5", {
      contents: [
        // use this to pass an array of products or content
        // add all items to the array
        // use this for the first itemiknkjh
        {
          content_type: null,
          content_id: null,
          content_name: null,
          content_price: null,
          num_items: null,
          content_group_id: null,
        },

        {
          content_type: null,
          content_id: null,
          content_name: null,
          content_price: null,
          num_items: null,
          content_group_id: null,
        },
      ],
      conversion_id: null, 
      email_address: null,
      phone_number: null, 
    });

    window.open(link,"_blank");
  };

  return (
    <div className="promotion-bg">
      <div className="bg-gray-900/90 text-white py-16 px-4 md:px-28 lg:px-32 ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-y-5 justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 order-2 sm:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Start selling your crypto <br className="sm:block hidden" /> on
              KWIQ app today
            </h2>
            <p className="sm:text-lg mb-8">
              Download the KWIQ app today and start selling your{" "}
              <br className="sm:block hidden" />
              crypto in less than 5 minutes
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => downloadClick(links.store.google)}
                className="inline-block"
              >
                <img
                  src="/assets/images/google-button.svg"
                  alt="Get it on Google Play"
                  className="h-12"
                />
              </button>
              <button
                onClick={() => downloadClick(links.store.apple)}
                className="inline-block"
              >
                <img
                  src="/assets/images/apple-button.png"
                  alt="Download on the App Store"
                  className="h-12"
                />
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center order-1 sm:order-2">
            <div className="relative">
              <img
                src="/assets/images/promo-phones.png"
                alt="KWIQ App Portfolio"
                className="w-80 md:w-96 z-10 relative"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoPromoSection;
