import Link from 'next/link'
import React from 'react'

const HeaderAdv = () => {
  return (
    <div className='flex justify-center items-center bg-[#29295199] backdrop-blur-[100px] w-full h-[54px]'>
      <p className='flex items-center gap-x-[30px] font-extrabold text-[14.5px] leading-[22.4px]'>
        <span className=''>خصم 80% بمناسبة شهر رمضان الكريم لفترة محدودة</span>
        <Link href='#' className='underline'>اشترك الآن</Link>
      </p>
    </div>
  )
}

export default HeaderAdv
