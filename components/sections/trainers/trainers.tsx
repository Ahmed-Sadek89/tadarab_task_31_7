import { TitleAndLink } from '@/components/ui'
import React from 'react'
import TrainersSlider from './trainers-slider'
import Link from 'next/link'
import Image from 'next/image'

const Trainers = () => {
  return (
    <section className='flex flex-col items-center gap-y-[16px] pr-10'>
      <TitleAndLink firstTitle='نخبة من مدربي' secondTitle=' الوطن العربي' />
      <TrainersSlider />
      <p className='text-[#FFFFFF99] text-[16px] text-center'>
        هل تريد الإنضمام إلى منصة تدرب التعليمية كمدرب؟
      </p>
      <Link
        href={'#'}
        className='flex justify-center items-center gap-[8px] bg-[#FFFFFF1A] hover:bg-custom-black px-[40px] py-[14px] rounded-[12px] outline outline-transparent hover:outline-custom-red w-[220px] h-[55px] transition duration-300'
      >
        <span className='font-bold text-[16px]'>
          قدم كمدرب الآن
        </span>
        <Image
          src={'/arrow-left.svg'}
          alt='arrow-left'
          width={18}
          height={18}
        />
      </Link>
    </section>
  )
}

export default Trainers
