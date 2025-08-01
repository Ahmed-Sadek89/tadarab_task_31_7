'use client'
import { SwiperSlide } from 'swiper/react'
import { BasicSlider } from '@/components/ui'
import CategoryCard from './category-card'

const CategoriesSlider = () => {
  const services = [
    {
      id: 1,
      title: 'العلوم واللغات'
    },
    {
      id: 2,
      title: 'نظم المعلومات'
    },
    {
      id: 3,
      title: 'تربية الأبناء'
    },
    {
      id: 4,
      title: 'ريادة الأعمال'
    },
    {
      id: 5,
      title: 'تنسيق المنزل والتصميم الداخلي'
    },
    {
      id: 6,
      title: 'الفنون وتنمية المواهب'
    },
    {
      id: 7,
      title: 'تطوير الذات'
    },
    {
      id: 8,
      title: 'التسويق الرقمي'
    },
    {
      id: 9,
      title: 'الصحة واللياقة البدنية'
    },
    {
      id: 10,
      title: 'المالية والاستثمار'
    },
    {
      id: 11,
      title: 'الطبخ وفن الأكل'
    },
    {
      id: 12,
      title: 'التصوير الفوتوغرافي الاحترافي' 
    }
  ]

  return (
    <div className='py-3 w-full'>
      <BasicSlider
        slidesPerView={'auto'}
        spaceBetween={0}
        uniqueId='categories'
        dimentionPagination='w-20 h-full'
        rows={2}
      >
        {services.map(service => (
          <SwiperSlide key={service.id} className='pb-4 pl-4 !w-auto h-full'>
            <CategoryCard
              icon={null}
              title={service.title}
            />
          </SwiperSlide>
        ))}
      </BasicSlider>
    </div>
  )
}

export default CategoriesSlider
