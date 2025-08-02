import Link from 'next/link'
import React from 'react'

const MiddlePart = () => {
  const navItemsFirst = [
    'تدرب بلا حدود',
    'الدورات التدريبية',
    'الدورات المجانية',
    'المدربين',
    'المدونة'
  ]
  const navItemsSecond = [
    'انضم كمدرب',
    'الشروط والأحكام',
    'الشروط والأحكام للمدرب',
    'سياسات الخصوصية',
    'سياسة ملفات تعريف الارتباط'
  ]
  return (
    <div className='justify-center items-start gap-y-4 sm:gap-y-0 grid grid-cols-1 sm:grid-cols-2 col-span-2 w-full'>
      <div className='flex flex-col gap-y-[20px]'>
        <h5 className='text-[#B0B0BA]'>روابط هامة</h5>
        {navItemsFirst.map((item, index) => (
          <Link
            href={'#'}
            key={index}
            className='font-bold text-[14px] hover:text-custom-red transition duration-300'
          >
            {item}
          </Link>
        ))}
      </div>
      <div className='flex flex-col gap-y-[20px]'>
        <h5 className='text-[#B0B0BA]'>عن تدرب</h5>
        {navItemsSecond.map((item, index) => (
          <Link
            href={'#'}
            key={index}
            className='font-bold text-[14px] hover:text-custom-red transition duration-300'
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MiddlePart
