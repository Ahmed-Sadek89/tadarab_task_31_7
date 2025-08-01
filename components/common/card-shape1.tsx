import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardShape1 = () => {
  return (
    <div className='group bg-[#13141ECC] rounded-[12px] w-[380px] min-h-[350px] overflow-hidden'>
      <div className='relative w-full'>
        <Image
          src={'/course-card.jpg'}
          alt='course-title'
          width={335}
          height={180}
          className='w-full object-cover'
        />
        <span className='top-[12px] right-[12px] absolute bg-[#FFFFFF52] group-hover:bg-custom-red backdrop-blur-[16px] px-[6px] rounded-[6px] w-[75px] min-h-[18px] font-bold text-[10px] text-center leading-[16px] tracking-[-0.2%] transition duration-300'>
          الأكثر مشاهدة
        </span>
      </div>
      <div className='space-y-10 px-10 pt-7 pb-10'>
        <div className='space-y-[8px] w-[274px]'>
          <h3 className='font-extrabold text-[16px]'>
            نصائح هامة لتربية الأطفال الصغار
          </h3>
          <h5 className='text-[14px]'>عفاف الجاسم</h5>
          <div className='bg-white w-[20px] h-[4px]'></div>
          <div className='flex items-center gap-x-[20px] w-full'>
            <div className='flex items-center gap-x-[4px]'>
              <Image src={'/star.svg'} alt='star' width={14} height={14} />
              <span className='font-light text-[#B0B0BA] text-[12px]'>
                4.8 (1.238 تقييم)
              </span>
            </div>
            <div className='flex items-center gap-x-[4px]'>
              <Image src={'/hour.svg'} alt='hour' width={14} height={14} />
              <span className='font-light text-[#B0B0BA] text-[12px]'>
                3 س : 45 د
              </span>
            </div>
            <div className='flex items-center gap-x-[4px]'>
              <Image src={'/users.svg'} alt='users' width={14} height={14} />

              <span className='font-light text-[#B0B0BA] text-[12px]'>
                1,583 متعلم
              </span>
            </div>
          </div>
        </div>

        <Link
          href={'#'}
          className='flex justify-center items-center gap-x-[8px] bg-[#FFFFFF14] group-hover:bg-custom-red backdrop-blur-[16px] px-[16px] py-[2px] rounded-[12px] w-full h-[40px] transition duration-300'
        >
          <svg
            width='12'
            height='14'
            viewBox='0 0 12 14'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.5 5.26795C11.8333 6.03775 11.8333 7.96225 10.5 8.73205L3 13.0622C1.66666 13.832 -6.49976e-07 12.8697 -5.82678e-07 11.3301L-2.04126e-07 2.66987C-1.36828e-07 1.13027 1.66667 0.168021 3 0.937822L10.5 5.26795Z'
              fill='white'
            />
          </svg>

          <span className='font-bold text-[12px]'>شاهد اعلان الدورة</span>
        </Link>
      </div>
    </div>
  )
}

export default CardShape1
