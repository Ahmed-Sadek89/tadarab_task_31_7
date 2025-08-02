import Image from 'next/image'
import React from 'react'

const TestimonialCard = () => {
  return (
    <div className='flex flex-col justify-between bg-gradient-to-tr from-transparent via-[#CCCCCC05] to-transparent px-[24px] py-[40px] border border-[#FFFFFF33] rounded-[24px] w-[400px] h-[400px]'>
      <div className='flex flex-col gap-y-[16px]'>
        <Image src={'/quote.svg'} alt='quote' width={20} height={14} />
        <p className='font-bold text-[#FFFFFFE5] text-[18px] leading-[26px]'>
          "دورة وافية وشاملة تعلمك على روتين يساعدك على إبقاء بيتك نظيف عن طريق
          خطوات بسيطة قد تغير نمط حياتك داخل المنزل، وتحتوي على جداول تنظم
          أعمالك المنزلية"
        </p>
      </div>

      <div className='flex flex-col gap-y-[8px] opacity-80 w-[304px] text-[#FFFFFFE5]'>
        <h3 className='font-extrabold text-[20px]'>فاطمة</h3>
        <div className='w-[20px] h-[3px]'></div>
        <h6 className='w-[202px] font-bold text-[16px]'>دورة أساسيات التنظيف في المنزل</h6>
        <span className='text-[14px]'>فاطمة القلاف</span>
      </div>
    </div>
  )
}

export default TestimonialCard
