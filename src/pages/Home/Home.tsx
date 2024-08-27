import { useState } from 'react';
import HeaderText from '../../components/HeaderText/HeaderText';
import Hero from './Hero'
import FAQSection from './FAQ/FAQ';
import PriceList from './PicingList/PricingList';



/*
    Please I didn't have time to put them in their respecitve files
    Just incase you are the one working on it , thanks in advance

*/


const testimonials = [
  {
    rating: 5,
    text: "I'm very happy with the way the customer service lady helped me with my issue. KWIQ is the best place to trade in Nigeria, they always come through for me.",
    name: "Tega I",
    type: "Playstore Review"
  },
  {
    rating: 5,
    text: "I checked my balance and I saw that I got a bonus, that's why I'm dropping this review. Keep up the good work guys.",
    name: "Benjams M",
    type: "Playstore Review"
  },
  {
    rating: 4,
    text: "I had been looking for where to sell BNB, and a friend referred me to KWIQ. I had the coins for about a month and I traded it so easily. Now I do free P2P for them cos they deserve it!",
    name: "Olumide T",
    type: "Playstore Review"
  },
  {
    rating: 4,
    text: "I had been looking for where to sell BNB, and a friend referred me to KWIQ. I had the coins for about a month and I traded it so easily. Now I do free P2P for them cos they deserve it!",
    name: "Olumide T",
    type: "Playstore Review"
  },
  {
    rating: 4,
    text: "I had been looking for where to sell BNB, and a friend referred me to KWIQ. I had the coins for about a month and I traded it so easily. Now I do free P2P for them cos they deserve it!",
    name: "Olumide T",
    type: "Playstore Review"
  },
  // Add more testimonials as needed
];






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


const CryptoConverter = () => {
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


function BGDivider() {
  return (
    <div className="hidden sm:block ">
      <img src="/assets/images/bg-divider.svg" className="h-[70px]" alt="" />
    </div>
  )
}


function SecureTrades() {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-y-3 items-center px-4 sm:px-32 py-10 sm:py-20">
      <div>
        <HeaderText
          tag="OUR TRADES ARE SECURE 🔒"
          title={<span>Secure and <br />automated trades</span>}
          content="All our processes are fully automated which totally eliminates any possibility of slow transactions. Our platform is designed with world class security encryption that is routinely tested to ensure safety of users funds and data."
        />
        <div className="flex items-center gap-x-4 mt-5">
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

function SupportSection() {
  return (
    <div className="flex flex-col sm:flex-row gap-y-4 justify-between items-center px-4 sm:px-32 py-20 sm:py-28">
      <div className="order-2 sm:order-1">
        <img src="/assets/images/support-pic.png" alt="" />
      </div>
      <div className="order-1 sm:order-2">
        <HeaderText
          tag="OUR SUPPORT TEAM IS ALWAYS AVAILABLE 📞"
          title={<span>24/7 Customer Support</span>}
          content="With KWIQ, you are never alone. Whatever your questions or challenges are, our well trained and competent staff are available round the clock to fulfill your
crypto needs."
        />
      </div>
    </div>
  );
}


function BenefitCard({ icon, title, content }: any) {
  return (
    <div className="w-full bg-white sm:w-[350px] overflow-hidden rounded-[24px]">
      <div className="px-6 py-5 h-[250px] ">
        <img src={icon} alt="" />
        <div className='mt-4'>
          <p className='font-[600] mb-3 text-[23px]'>{title}</p>
          <p className="text-[17px] text-[#757575]">{content}</p>
        </div>
      </div>
      <img src="/assets/images/benefit-img.svg" className="w-full sm:h-[170px]" alt="" />
    </div>
  );
}



function Benefits() {

  const benefits = [
    { icon: '/assets/icons/wallet.svg', title: "50+ Crypto Wallets", content: "KWIQ provides all its users with more than fifty different wallets to deposit, buy, sell, store, swap and send crypto instantly." },
    { icon: '/assets/icons/dollar.svg', title: "No hidden fees", content: "Make maximum profits when you trade with us. Swaps from crypto to naira have zero fees while crypto to crypto swaps attract a 2% fee." },
    { icon: '/assets/icons/rates.svg', title: "Unbeatable rates", content: "We know every exchange says they have the best rates, let us show you. You lose money whenever you don't trade with us." }
  ];

  return (
    <div className='px-3 sm:px-32 py-10 sm:py-20 bg-[#F9F6F6]'>
      <HeaderText
        title="Our Product Benefits"
      />
      <div className="mt-10">
        <div className="flex flex-col sm:flex-row gap-x-5 gap-y-9">
          {
            benefits.map((benefit: any) => {
              return <BenefitCard {...benefit} />
            })
          }
        </div>
      </div>
    </div>
  );
}





function PassiveIncome() {
  return (
    <div className="flex flex-col bg-[#F9F6F6] sm:flex-row gap-y-4 justify-between items-center px-4 sm:px-24 py-20 sm:py-28">
      <div className="sm:pl-16">
        <img src="/assets/images/passive-img.png" alt="" />
      </div>
      <div className="">
        <HeaderText
          title={<span className='text-nowrap'>Earn passive income on KWIQ</span>}
          className="sm:w-[520px] "
          content="Start earning cash as soon as you sign up once you complete tasks. Not just that, earn 0.5% of transactions your friends make on KWIQ for life, just because you referred them!"
        />
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="px-4 sm:px-0 py-16 sm:py-20 bg-white">
      <HeaderText
        className="text-center flex items-center flex-col"
        tag="What customers say"
        title="Why thousands of users love KWIQ"
      />

      <div className='mt-16 flex items-center '>
        <TestimonialCarousel />
      </div>
    </div>
  );
}

const TestimonialCard = ({ testimonial }: any) => (
  <div className="bg-white sm:w-[400px] flex flex-col justify-between shadow-lg  h-[330px] p-6 rounded-[24px] border">
    <div className="flex text-yellow-400 mb-2">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <p className="text-gray-800 text-[17px] mb-4">"{testimonial.text}"</p>
    <div className="flex items-center">
      <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
      <div>
        <p className="font-semibold">{testimonial.name}</p>
        <p className="text-sm text-gray-500">{testimonial.type}</p>
      </div>
    </div>
  </div>
);

const TestimonialCarousel = () => {

  return (
    <div className="py-5 px-4 sm:px-20 overflow-hidden sm:overflow-x-auto no-scrollbar relative">
      <div className="relative">
        <div className="flex flex-col sm:flex-row sm:w-[140vw] gap-y-6 gap-x-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};


function Partners() {
  return (
    <div className="flex justify-center flex-col items-center  px-4 py-20">
      <p className="text-[26px] sm:text-[38px] font-[700] leading=[46px] my-4 text-[#202939]">
        KWIQ is <span className="text-native border-b border-native rounded-lg inline-block">featured</span> on
      </p>
      <div className='flex items-center py-10 flex-wrap justify-center gap-x-6'>
        <img src="/assets/images/guardian.png" alt="" className="" />
        <img src="/assets/images/vanguard.png" alt="" className="" />
        <img src="/assets/images/tribune.png" alt="" className="" />

      </div>
    </div>
  );
}

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
    <div className="">
      <img src="/assets/images/full-divider.png" alt="" />
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
          <p className="text-gray-600">
            Don't hesitate to reach out to us if you have trouble<br />
            downloading the app or signing up
          </p>
          <div className="flex items-center gap-x-4 mt-5 mx-auto w-fit">
            <button className="px-7 rounded-lg py-2.5 bg-native font-[600] text-white">
              Contact Us
            </button>
            <button className="px-8 rounded-lg py-2.5 bg-white border-2 border-gray-300 font-[600] text-gray-800">
              Live chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



function Demo() {
  return (
    <img src="/assets/images/video.png" />
  );
}





const SubscriptionSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setEmail(''); 
  };

  return (
    <div className='px-4 sm:px-36 py-10 mx-auto '>
      <div className="bg-primary rounded-[24px] px-3 sm:px-0 py-16 mx-auto ">
        <h2 className="text-white text-3xl sm:text-[43px] font-bold text-center mb-4">
          Subscribe to get the latest
        </h2>
        <p className="text-white text-[18px] sm:text-[24px] text-center mb-8">
          Join our mailing list to receive up to date information about products <br/>
          and incredible offers
        </p>
        <form onSubmit={handleSubmit} className="flex w-full sm:w-fit mx-auto bg-white px-2 rounded-[12px] py-2 mb-4 md:mb-0 md:flex-row justify-center items-center gap-x-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full focus:outline-none md:w-[400px] px-2 py-2 text-[18px]"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-6 rounded-[12px]   transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

  );
};



export default function Home() {
  return (
    <div>
      <Hero />
      <PriceList />
      <Conversion />
      <BGDivider />
      <SecureTrades />
      <SupportSection />
      <Benefits />
      <PassiveIncome />
      <Testimonials />
      <Partners />
      <HowItWorks />
      <Demo />
      <FAQSection />
      <SubscriptionSection />
    </div>
  )
}
