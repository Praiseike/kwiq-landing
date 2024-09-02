
import HeaderText from '../../components/HeaderText/HeaderText';
import Hero from './Hero'
import FAQSection from './FAQ/FAQ';
import PriceList from './PicingList/PricingList';
import Conversion from './Conversion/Conversion';
import SecureTrades from './SecureTrades/SecureTrades';
import Benefits from './Benefits/Benefits';
import Testimonials from './Testimonial/Testimonial';
import HowItWorks from './HowItWorks/HowItWorks';
import SubscriptionSection from './Subscriptions/Subscription';
import ContactSection from './Contact/Contact';
import CryptoPromoSection from './Promotion/Promotion';
import { Link } from 'react-router-dom';
import { links } from '../../constants/links';







function BGDivider() {
  return (
    <div className="hidden sm:block ">
      <img src="/assets/images/bg-divider.svg" className="h-[70px]" alt="" />
    </div>
  )
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



function Partners() {
  return (
    <div className="flex justify-center flex-col items-center  px-4 py-10 sm:py-20">
      <p className="text-[26px] sm:text-[38px] font-[700] leading=[46px] my-4 text-[#202939]">
        KWIQ is <span className="text-native border-b border-native rounded-lg inline-block">featured</span> on
      </p>
      <div className='flex items-center py-10 flex-wrap justify-center gap-y-6 gap-x-6'>
        <Link target="_blank" to={links.partners.guardian}>
          <img src="/assets/images/guardian.png" alt="" className="" />
        </Link>
        <Link target="_blank" to={links.partners.vanguard}>
          <img src="/assets/images/vanguard.png" alt="" className="" />
        </Link>
        <Link target="_blank" to={links.partners.tribune}>
          <img src="/assets/images/tribune.png" alt="" className="" />
        </Link>

      </div>
    </div>
  );
}




function Demo() {
  return (
    <>
      <img className="hidden sm:block" src="/assets/images/video.png" />
      <img className="sm:hidden" src="/assets/images/demo-mobile.png" />
    </>
  );
}





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
      <ContactSection />
      <SubscriptionSection />
      <CryptoPromoSection />
    </div>
  )
}
