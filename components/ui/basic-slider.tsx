'use client'
import type React from 'react'
import { Swiper } from 'swiper/react'
import { Navigation, Grid } from 'swiper/modules' 
import 'swiper/css/navigation'
import 'swiper/css/grid' 

interface IBasicSlider {
  slidesPerView?: number | 'auto' | undefined
  spaceBetween: number
  children: React.ReactNode
  uniqueId: string
  dimentionPagination: string
  rows?: number 
}

const BasicSlider = ({
  slidesPerView = 'auto',
  uniqueId,
  spaceBetween,
  dimentionPagination,
  children,
  rows = 1
}: IBasicSlider) => {
  return (
    <div
      className='relative flex justify-center items-center py-5 w-[99%]'
      dir='rtl'
    >
      <div
        className={`left-0 z-10 absolute flex justify-end items-center bg-[linear-gradient(90deg,#00040D_0%,rgba(0,4,13,0)_100%)] ${dimentionPagination}`}
      >
        <div
          className={`group flex justify-center items-center shadow-2xl backdrop-blur-[210px] bg-[#FFFFFF1A] rounded-full size-[60px] swiper-button-next-custom-${uniqueId}`}
        >
          <svg
            width='12'
            height='20'
            viewBox='0 0 12 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10 18L2 10L10 2'
              stroke='white'
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='group-hover:stroke-custom-red transition-all duration-300'
            />
          </svg>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Grid]}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        dir='rtl'
        grid={{
          rows: rows,
          fill: 'row'
        }}
        navigation={{
          prevEl: null,
          nextEl: `.swiper-button-next-custom-${uniqueId}`
        }}
        className='w-[99%]'
      >
        {children}
      </Swiper>
    </div>
  )
}

export default BasicSlider
