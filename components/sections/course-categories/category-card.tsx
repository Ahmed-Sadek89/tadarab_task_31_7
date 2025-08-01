import Image from 'next/image'
import type React from 'react'

interface CategoryCardProps {
  icon: React.ReactNode
  title: string
}

const CategoryCard = ({ icon, title }: CategoryCardProps) => {
  return (
    <button className='relative flex justify-center items-center gap-x-[16px] bg-[#272A31] hover:bg-custom-red px-[26px] py-[13px] rounded-[26px] h-[96px] transition duration-300'>
      <Image src={'/category.svg'} alt='category' width={80} height={70} />
      <span className='font-extrabold text-[31px] text-white whitespace-nowrap'>
        {title}
      </span>
    </button>
  )
}

export default CategoryCard
