import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Subscribe = () => {
  return (
    <section className='flex justify-center items-center w-full'>
      <div className='relative rounded-[20px] w-[1240px] h-[500px] overflow-hidden'>
        <Image
          src='/subscribe.png'
          alt='subscribe'
          width={1240}
          height={500}
          className='top-0 left-0 z-0 absolute w-full h-full object-center object-cover'
        />
        <div className='top-0 left-0 z-10 absolute bg-[#25D5AB1A] w-full h-full'></div>

        <div className='z-20 relative flex flex-col justify-evenly items-center w-full h-full'>
          <div className='flex flex-col items-center gap-y-[24px] w-[487px] text-center'>
            <h4 className='font-bold text-[32px]'>ابدأ رحلة التعلم مع</h4>
            <Image
              src={'/tadarab-green.svg'}
              alt='tadarab-green'
              width={364}
              height={44}
            />
            <p className='text-[20px] leading-[33px]'>
              تعلم مع أكثر من 1000 دورة تدريبية في مختلف المجالات باشتراك واحد
              فقط{' '}
            </p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <p className='text-[16px]'>اشتراكات بتبدأ من 10.000 د.ك شهرياً</p>

            <Link
              href={'#'}
              className='group flex justify-center items-center bg-[#60D2B4] hover:bg-custom-red mt-5 px-[10px] py-[16px] rounded-[12px] w-[295px] h-[50px] transition duration-300'
            >
              <span className='font-bold text-custom-black group-hover:text-white transition duration-300'>
                أشترك الآن
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
