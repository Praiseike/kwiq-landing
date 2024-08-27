
const Footer = () => {
  const footerSections = [
    {
      title: "Products",
      items: ["Airtime to Cash", "Sell Bitcoin", "Tether (USDT) Wallet", "Dogecoin", "Buy Cheap Airtime", "Buy Cheap Data", "Fund Betting Accounts", "Pay Electricity Bills", "Pay Cable TV Bills"]
    },
    {
      title: "Resources",
      items: ["Blog", "Support & FAQ", "Contact us", "Promo", "How to sell Bitcoin", "Bitcoin News", "Terms of Use", "Privacy Policy", "Platform Status"]
    },
    {
      title: "Quick Links",
      items: ["Sell Bitcoin", "Sell Ethereum", "Sell BCH", "Sell USDC", "Sell BUSD", "Sell BNB", "Sell Litecoin", "Sell Dogecoin", "Sell USDT", "Sell Tron", "Sell Solana", "Sell Avalanche"]
    },
    {
      title: "Company",
      items: ["About Us", "Contact & Support", "Career", "Success History", "Setting & Privacy"]
    }
  ];

  return (
    <footer className="text-gray-800 py-12 px-4 sm:px-20">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="col-span-2 lg:col-span-2 pr-7">
            <div className="mb-4">
              <img src="/assets/icons/logo.png" alt=""/>
            </div>
            <p className="mb-4">Imagine a world of seamless transactions. Open your eyes, sign up and live your dreams. KWIQ was created with you in mind 💙</p>
          </div>
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-primary mb-4">{section.title}</h3>
              <ul>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-2">
                    <a href="#" className="hover:text-blue-400">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p>© 2023 Kwiq by Kingcards. All Rights Reserved.</p>
          <div className="flex mt-4 md:mt-0">
            {/* Replace with actual social media icons */}
            <a href="#" className="mx-2">X</a>
            <a href="#" className="mx-2">IG</a>
            <a href="#" className="mx-2">In</a>
            <a href="#" className="mx-2">Fb</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;