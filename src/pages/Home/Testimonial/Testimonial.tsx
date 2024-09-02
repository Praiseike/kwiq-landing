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
        <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <p className="text-gray-800 text-[17px] mb-4">"{testimonial.text}"</p>
    <div className="flex items-center">
      <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 overflow-hidden">
       { testimonial.image && <img src={testimonial.image} alt=""/> }
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