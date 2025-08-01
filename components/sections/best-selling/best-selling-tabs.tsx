'use client'
import { SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'
import { BasicSlider } from '@/components/ui'

const topics = [
  'التربية الذاتية',
  'تربية الأبناء',
  'الصحة النفسية',
  'الثقة بالنفس',
  'التربية الإيجابية',
  'السعادة الأسرية',
  'ريادة الأعمال',
  'إدارة الذات',
  'تنمية بشرية',
  'كل المواضيع',
  'التربية الذاتية',
  'تربية الأبناء',
  'الصحة النفسية',
  'الثقة بالنفس',
  'التربية الإيجابية',
  'السعادة الأسرية',
  'ريادة الأعمال',
  'إدارة الذات',
  'تنمية بشرية',
  'التربية الذاتية',
  'تربية الأبناء',
  'الصحة النفسية',
  'الثقة بالنفس',
  'التربية الإيجابية',
  'السعادة الأسرية',
  'ريادة الأعمال',
  'إدارة الذات',
  'تنمية بشرية'
]

const BestSellingTabs = () => {
  return (
    <BasicSlider spaceBetween={16} uniqueId={"tabs1"} dimentionPagination="w-[209px] h-[84px]">
      {topics.map((topic, index) => (
        <SwiperSlide key={index} className='!w-auto'>
          <button
            className={` px-[16px] h-[40px] rounded-[12px] border-[#333A47] text-[14px] font-bold border transition duration-300 whitespace-nowrap
                ${
                  index === 0
                    ? 'bg-white text-custom-black  '
                    : 'bg-[#191D2500]  text-white hover:bg-white hover:text-custom-black'
                }
              `}
          >
            {topic}
          </button>
        </SwiperSlide>
      ))}
    </BasicSlider>
  )
}

export default BestSellingTabs
