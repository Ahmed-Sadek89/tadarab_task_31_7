import React from 'react'

const TrainersSlidersArrows = () => {
  return (
    <>
      <div
        className={`left-0 z-10 absolute flex justify-end items-center bg-[linear-gradient(90deg,#00040D_0%,rgba(0,4,13,0)_100%)] w-[206px] h-[390px]`}
      >
        <div
          className={`group flex justify-center items-center shadow-2xl backdrop-blur-[19px] bg-[#FFFFFF1A] rounded-full size-[57px] swiper-button-next-custom-trainers`}
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
      <div className='right-0 z-10 absolute flex justify-start items-center bg-gradient-to-l from-[#00040D] to-transparent w-[206px] h-[390px]'>
        <div className='group flex justify-center items-center bg-[#FFFFFF1A] shadow-2xl backdrop-blur-[19px] rounded-full size-[57px] swiper-button-prev-custom-trainers'>
          <svg
            width='12'
            height='20'
            viewBox='0 0 12 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='rotate-180'
          >
            <path
              d='M10 18L2 10L10 2'
              stroke='white'
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='group-hover:stroke-custom-red transition-all duration-300 reverse'
            />
          </svg>
        </div>
      </div>
    </>
  )
}

export default TrainersSlidersArrows
