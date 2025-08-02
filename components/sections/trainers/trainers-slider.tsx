'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'
import { Navigation, Grid } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/grid'
import TrainersSlidersArrows from './trainers-sliders-arrows'
import TrainerCard from './trainer-card'

const TrainersSlider = () => {
  return (
    <div
      className='relative flex justify-center items-center py-10 w-[99%]'
      dir='rtl'
    >
      <TrainersSlidersArrows />
      <Swiper
        modules={[Navigation, Grid]}
        slidesPerView={7}
        spaceBetween={20}
        dir='rtl'
        navigation={{
          prevEl: `.swiper-button-prev-custom-trainers`,
          nextEl: `.swiper-button-next-custom-trainers`
        }}
        className='w-[99%]'
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((topic, index) => (
          <SwiperSlide key={index} className='!w-auto'>
            <TrainerCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TrainersSlider
