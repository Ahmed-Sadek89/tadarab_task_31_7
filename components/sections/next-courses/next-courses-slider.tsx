'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css/pagination'
import NextCourseSliderImageOverlay from './next-course-slider-image-overlay'

interface SlideData {
  id: number
  image: string
  title: string
  subtitle: string
  description: string
}

const slides: SlideData[] = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  image: `/slide-${index + 1}.jpg`,
  title: 'نصائج هامة للشباب',
  subtitle: `الجزء ${index + 1}`,
  description: 'سالم عبدالله'
}))

export default function SwiperCarousel () {
  return (
    <div className='relative w-full h-[80vh]'>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet custom-bullet',
          bulletActiveClass:
            'swiper-pagination-bullet-active custom-bullet-active'
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        loop={true}
        className='w-full h-full'
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className='items-center grid grid-cols-2 pr-5 h-[559px]'>
              <div className='flex flex-col justify-center items-start gap-y-[16px] w-[410px]'>
                <h6 className='flex justify-center items-center bg-white backdrop-blur-[16px] px-[12px] py-[8px] rounded-[8px] w-[60px] h-[32px]'>
                  <span className='font-bold text-[18px] text-black leading-[16px]'>
                    قريباً
                  </span>
                </h6>

                <h2 className='font-bold text-[48px] leading-[72px]'>
                  نصائح هامة للشباب قبل الزواج
                </h2>
                <div className='bg-white w-[20px] h-[3px]'></div>
                <h5 className='font-normal text-[30px]'>سالم عبدالله </h5>
              </div>
              <div className='relative flex justify-end'>
                <NextCourseSliderImageOverlay />
                <Image
                  src={'/course-card.jpg'}
                  alt='client'
                  width={673}
                  height={500}
                  className='w-[673px] h-[500] object-cover'
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
