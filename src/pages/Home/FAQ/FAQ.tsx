import { useState } from "react";
import './style.css'

const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${isOpen? "color-shadow" : "" } bg-white relative mb-4 border-2 rounded-[16px] `}>
      <button
        className="flex justify-between items-center font-[600] w-full p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-[600] text-[19px] text-gray-900">{question}</span>
        <span className="text-black text-3xl">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="mt-2 p-4 rounded-lg">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};



const FAQSection = () => {
  const faqs = [
    {
      question: "How long does a transaction take?",
      answer: "Transaction times can vary depending on network congestion and the cryptocurrency being used. Typically, it can take anywhere from a few minutes to an hour."
    },
    {
      question: "Can I use one wallet address for different crypto?",
      answer: "Generally, no. Different cryptocurrencies often require different wallet addresses. However, some multi-currency wallets can manage multiple cryptocurrencies."
    },
    {
      question: "How can I copy my wallet address?",
      answer: "Most wallet applications have a 'Copy' button next to your wallet address. Click this button to copy the address to your clipboard."
    },
    {
      question: "How do I create my KWIQ wallet address?",
      answer: "To create a KWIQ wallet address, you typically need to sign up on the KWIQ platform or download their wallet app. Follow the registration process to generate your unique wallet address."
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="gap-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <div className="mt-8">
        <button className="bg-native font-[600] text-white px-6 py-2.5 rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Load More
        </button>
      </div>
    </div>
  );
};

export default FAQSection;