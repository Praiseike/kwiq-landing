import { useState } from "react";


const SubscriptionSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setEmail(''); 
  };

  return (
    <div className='px-4 sm:px-36 py-10 mx-auto '>
      <div className="bg-primary rounded-[24px] px-3 sm:px-0 py-16 mx-auto ">
        <h2 className="text-white text-2xl sm:text-[43px] font-bold text-center mb-4">
          Subscribe to get the latest
        </h2>
        <p className="text-white text-[15px] sm:text-[24px] text-center mb-8">
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
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-[12px]   transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

  );
};

export default SubscriptionSection;