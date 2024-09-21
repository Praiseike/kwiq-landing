const HowItWorks = () => {
  const steps = [
    {
      icon: 'download.svg',
      title: 'Download the KWIQ App',
      description: 'Download our amazing app from Playstore or App Store'
    },
    {
      icon: 'user.svg',
      title: 'Sign Up',
      description: 'Create an account in under a minute and get ready to experience seamless transactions like never before.'
    },
    {
      icon: 'blue-bitcoin.svg',
      title: 'Start Trading Crypto',
      description: 'Join thousands of satisfied customers and trade happily ever after.'
    }
  ];

  return (
    <div className="" data-aos="fade-up">
      <img className="hidden sm:block" src="/assets/images/full-divider.png" alt="" />
      <img className="sm:hidden" src="/assets/images/full-divider-mobile.png" alt="" />
      <div className="bg-[#E0EFFF] py-16 px-4 sm:px-20 ">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">How it works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 py-10 rounded-[24px]">
              <div className="flex justify-center mb-4">
                <img src={`/assets/icons/${step.icon}`} alt="" />
              </div>
              <h3 className="text-[23px] text-gray-800 font-bold text-center mb-2">{step.title}</h3>
              <p className="text-gray-700 text-[15px] font-[500] text-center">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 ext-[500]">
            Don't hesitate to reach out to us if you have trouble<br className="hidden sm:block"/>
            downloading the app or signing up
          </p>
          <div className="flex items-center gap-x-4 mt-5 mx-auto w-full sm:w-fit">
            <button className="px-7 rounded-lg py-2.5 w-full sm:w-fit bg-native font-[600] text-white">
              Contact Us
            </button>
            <button className="px-8 rounded-lg py-2.5 w-full sm:w-fit bg-white border-2 border-gray-300 font-[600] text-gray-800">
              Live chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default HowItWorks;