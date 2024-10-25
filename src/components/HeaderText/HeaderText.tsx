
export default function HeaderText({ title, content, tag, className}: any) {
  return (
    <div className={ className ?? "sm:w-[500px]"}>
      { tag && <p data-aos="fade-up" className="uppercase  bg-[#E4F1FF] font-[600] flex items-center  px-2 py-1 rounded-full w-fit text-[14px] text-[#1775E1]">{tag}</p> }
      { title && <p data-aos="fade-up" className="text-[24px] sm:text-[38px] font-[700] leading=[46px] my-4 text-[#202939]">{title}</p> }
      { content && <p data-aos="fade-up" className="text-[14px] sm:text-[17px] font-[500] text-[#403F3F]">{content}</p> }
    </div>
  )
}
