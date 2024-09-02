import HeaderText from "../../../components/HeaderText/HeaderText";

const testimonials = [
  {
    rating: 5,
    text: "I'm very happy with the way the customer service lady helped me with my issue. KWIQ is the best place to trade in Nigeria, they always come through for me.",
    name: "Tega I",
    type: "Playstore Review",
    image: "/assets/images/testimonials/image 1.png",
  },
  {
    rating: 5,
    text: "I checked my balance and I saw that I got a bonus, that's why I'm dropping this review. Keep up the good work guys.",
    name: "Danjuma. M",
    type: "Playstore Review",
    image: "/assets/images/testimonials/image.png",
  },
  {
    rating: 4,
    text: "I had been looking for where to sell BNB, and a friend referred me to KWIQ. I had the coins for about a month and I traded it so easily. Now I do free P2P for them cos they deserve it!",
    name: "Olumide T",
    type: "Playstore Review",
    image: "/assets/images/testimonials/image-1.png",
  },
  {
    rating: 4,
    text: "Since I started trading on KWIQ, I haven’t used another exchange. I’m proud to say I’m their most loyal customer. Thanks for the bonuses and efficiency. Nice work 👍🏽",
    name: "Emeka O",
    type: "Playstore Review",
    image: "/assets/images/testimonials/image-2.png",
  }
];




const TestimonialCard = ({ testimonial }: any) => (
  <div className="bg-white sm:w-[400px] flex flex-col justify-between shadow-lg  h-[330px] p-6 rounded-[24px] border">
    <div className="flex text-yellow-400 mb-2">
      {[...Array(5)].map((_, i) => (
        <svg className="mr-2" width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 0.90332C11.2668 0.90332 11.5134 1.045 11.6478 1.27542L14.989 7.00317L21.1834 8.56541C21.4402 8.63016 21.6437 8.82547 21.719 9.0793C21.7943 9.33313 21.7302 9.60787 21.5504 9.80212L17.318 14.3737L18.9122 21.4893C18.9735 21.7629 18.8771 22.0479 18.6622 22.228C18.4473 22.4082 18.1499 22.4534 17.8912 22.3453L11 19.4661L4.10881 22.3453C3.85009 22.4534 3.55269 22.4082 3.33782 22.228C3.12295 22.0479 3.02652 21.7629 3.08782 21.4893L4.68203 14.3737L0.449659 9.80212C0.269789 9.60787 0.205679 9.33313 0.280999 9.0793C0.356309 8.82547 0.559879 8.63016 0.816609 8.56541L7.01099 7.00317L10.3522 1.27542C10.4866 1.045 10.7333 0.90332 11 0.90332Z" fill="#FF881B" />
        </svg>

      ))}
    </div>
    <p className="text-gray-800 text-[17px] mb-4">"{testimonial.text}"</p>
    <div className="flex items-center">
      <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 overflow-hidden">
        {testimonial.image && <img src={testimonial.image} alt="" />}
      </div>
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
        <div className="flex flex-col sm:flex-row sm:w-[130vw] gap-y-6 gap-x-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

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


export default Testimonials;