'use client'
import React from 'react'
import { SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'
import { BasicSlider } from '@/components/ui'
import TestimonialCard from './testimonial-card'
import TestimonialCardVideo from './testimonial-card-video'

const TestimonalsSlider = () => {
  return (
    <BasicSlider
      uniqueId='testimonials'
      slidesPerView={3.1}
      spaceBetween={24}
      dimentionPagination='w-[236px] h-[389px]'
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((topic, index) => (
        <SwiperSlide key={index} className='!w-auto'>
          {index % 2 === 0 ? <TestimonialCardVideo /> : <TestimonialCard />}
        </SwiperSlide>
      ))}
    </BasicSlider>
  )
}

export default TestimonalsSlider
