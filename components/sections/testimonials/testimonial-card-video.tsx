import Image from 'next/image'
import React from 'react'

const TestimonialCardVideo = () => {
  return (
    <div className='group relative rounded-[24px] w-[400px] h-[400] overflow-hidden cursor-pointer'>
      <Image
        src='/t1.jpg'
        alt='hero background'
        width={400}
        height={401}
        className='z-0 absolute opacity-100 object-center object-cover'
      />
      <div className='absolute inset-0 bg-[#00000033]'></div>
      <Image
        src='/play.svg'
        alt='hero background'
        width={54}
        height={54}
        className='top-[173px] left-[149px] z-1 absolute rounded-[24px]'
      />

      <div className='top-[221px] z-10 absolute bg-gradient-to-t from-[#13141E] to-transparent rounded-tl-[12px] rounded-tr-[12px] w-[400px] h-[180px]'></div>

      <div className='top-[315px] left-[75px] z-20 absolute w-[253px] h-[55px]'>
        <div className='flex flex-col gap-y-[8px] group-hover:text-custom-red transition duration-300'>
          <h2>دورة أسراري في تربية الأبناء</h2>
          <div className='bg-white group-hover:bg-custom-red w-[20px] h-[4px] transition duration-300'></div>
          <h5>عفاف الجاسم</h5>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCardVideo
