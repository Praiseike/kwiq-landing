import HeaderText from "../../../components/HeaderText/HeaderText";

function BenefitCard({ icon, title, content }: any) {
  return (
    <div data-aos="fade-up" className="w-full bg-white sm:w-[350px] overflow-hidden rounded-[24px]">
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
    { icon: '/assets/icons/wallet.svg', title: "20+ Crypto Wallets", content: "KWIQ provides all its users with more than fifty different wallets to deposit, buy, sell, store, swap and send crypto instantly." },
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
            benefits.map((benefit: any, index: number) => {
              return <BenefitCard key={index} {...benefit} />
            })
          }
        </div>
      </div>
    </div>
  );
}


export default Benefits;