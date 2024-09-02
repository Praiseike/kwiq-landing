import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="relative bg-primary sm:h-auto flex flex-col sm:flex-row justify-between">
      <p></p>
      <img className="hidden sm:block" src="/assets/images/contact-bg.png" alt="" />
      <div className="sm:absolute sm:inset-0 w-full sm:h-full flex flex-col sm:flex-row gap-y-12 text-white py-12 sm:py-20 sm:px-32 px-4 justify-between items-center ">
        {/* Left Column */}
        <div className="w-full sm:w-1/2 sm:pr-8">
          <h2 className="text-4xl font-bold mb-4">Don't hesitate to <br className="sm:hidden" />  reach <br className="hidden sm:block" /> out to us</h2>
          <p className="text-lg mb-8">For any questions complaints or enquiries</p>

          <div className="space-y-4 text-black w-full">
            <div className="flex items-center bg-white rounded-lg w-fit py-3 px-4">
              <Mail className="mr-2" size={20} fill="#323232" stroke="white" />
              <span>help@kwiq.app</span>
            </div>
            <div className="flex items-center bg-white rounded-lg w-fit py-3 px-4">
              <Phone className="mr-2" stroke="" fill="#323232" size={20} />
              <span>+2348098460000</span>
            </div>
            <div className="flex items-center bg-white rounded-lg w-full sm:w-fit py-3 px-4">
              <MapPin className="mr-2" size={20} fill='#323232' stroke='white' />
              <span>No. 2, Turnbull Road, Jabita CI, Ikoyi, Lagos</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full sm:w-[45%] bg-white text-gray-800 rounded-2xl p-4 py-5 z-[100] sm:z-auto">
          <h3 className="text-3xl font-bold mb-2">Contact us</h3>
          <p className="text-gray-600 font-[500] mb-6">Our friendly team would love to hear from you.</p>

          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                <input type="text" id="firstName" className="w-full p-2 bg-gray-100 rounded-md" />
              </div>
              <div className="w-full sm:w-1/2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" className="w-full p-2 bg-gray-100 rounded-md" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea id="message" rows={4} className="w-full p-2 bg-gray-100 rounded-md"></textarea>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="privacy" className="mr-2" />
              <label htmlFor="privacy" className="text-[15px]">
                You agree to our friendly <a href="#" className="text-blue-600 underline">privacy policy</a>.
              </label>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md font-[600] hover:bg-blue-600 transition duration-300">
              Send a Message
            </button>
          </form>
        </div>
      </div>
      <img className="sm:hidden" src="/assets/images/contact-mobile-bg.png" alt="" />
    </div >
  );
};

export default ContactSection;