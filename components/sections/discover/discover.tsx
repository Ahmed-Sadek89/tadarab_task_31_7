import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Discover = () => {
  return (
    <section className='relative flex justify-center items-center w-full h-[628px]'>
      <Image
        src='/discover.png'
        alt='discover'
        width={1440}
        height={628}
        className='top-0 z-0 absolute w-full h-[628px] object-center object-cover scale-x-[-1]'
      />

      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 mix-blend-multiply'></div>
      <div className='z-20 relative flex flex-col justify-center items-start gap-y-[44px] px-20 w-full h-full'>
        <div className='flex flex-col gap-y-[19px]'>
          <Image
            src={'/tadarab-business.svg'}
            alt='business'
            width={365}
            height={42}
          />
          <h2 className='font-extrabold text-[40px] leading-[46px]'>
            اكتشف عالم تدرب للأعمال
          </h2>

          <p className='opacity-80 w-[541px] font-bold text-[20px] leading-[31px]'>
            تحديات سوق العمل لا تنتهي! طور مهارات مُوظفيك لتتناسب مع اقتصاد
            اليوم، اختر الخطة التدريبية التي تناسب أهداف عملك وتواصل معنا الآن.
          </p>
          <Link
            href={'#'}
            className='flex justify-center items-center gap-[10px] bg-custom-red hover:bg-custom-black px-[40px] py-[12px] rounded-[12px] outline outline-transparent hover:outline-custom-red w-[210px] h-[55px] transition duration-300'
          >
            <span className='font-[800] text-[16px] leading-[24px]'>
              اعرف المزيد
            </span>
            <Image
              src={'/arrow-left.svg'}
              alt='arrow-left'
              width={18}
              height={18}
            />
          </Link>
        </div>
        <div className='flex flex-col gap-y-[16px] w-full'>
          <h6 className='font-extrabold text-[24px] leading-[37px]'>
            شركاء النجاح في تدرب للأعمال
          </h6>
          <div className='flex justify-between items-center w-full'>
            <Image
              src={'/p1.svg'}
              alt='p1'
              width={146}
              height={56}
              className='opacity-60'
            />
            <Image
              src={'/p2.svg'}
              alt='p2'
              width={95}
              height={56}
              className='opacity-40'
            />

            <Image src={'/p3.png'} alt='p3' width={101} height={101} />

            <Image
              src={'/p4.svg'}
              alt='p4'
              width={168}
              height={66}
              className='opacity-60'
            />

            <Image
              src={'/p5.png'}
              alt='p5'
              width={146}
              height={56}
              className='opacity-50'
            />

            <Image
              src={'/p6.svg'}
              alt='p6'
              width={100}
              height={42}
              className='opacity-60'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Discover
