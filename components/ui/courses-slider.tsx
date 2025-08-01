'use client'
import React from 'react'
import BasicSlider from './basic-slider'
import { SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'
import { CardShape1 } from '../common'

const CoursesSlider = ({id}: {id: string}) => {
  return (
    <BasicSlider uniqueId={id} slidesPerView={3.8} spaceBetween={24} dimentionPagination="w-[200px] h-[368px]">
      {[1,2,3,4,5,6,7,8,9].map((topic, index) => (
        <SwiperSlide key={index} className='!w-auto'>
          <CardShape1 />
        </SwiperSlide>
      ))}
    </BasicSlider>
  )
}

export default CoursesSlider