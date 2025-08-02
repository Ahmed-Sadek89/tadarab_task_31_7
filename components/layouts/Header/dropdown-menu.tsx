import Image from 'next/image'
import React, { useState } from 'react'

const DropdownMenu = ({
  isOpen,
  categories
}: {
  isOpen: boolean
  categories: any
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  if (isOpen) {
    return (
      <div className={`right-0 absolute flex gap-2 bg-[#272A32] shadow-lg mt-4 rounded-xl ${hoveredIndex !== null ? "w-[670px]": "w-[335px]"} h-[598px] overflow-hidden text-white`}>
        <div className='flex flex-col gap-y-[20px] bg-[#1A1B22] p-4 w-[335px] h-[598px]'>
          <h4 className='mb-3 font-semibold text-sm'>أقسام التعلم</h4>
          <ul className='flex flex-col gap-y-[20px]'>
            {categories.map((cat: any, index: number) => (
              <li
                key={index}
                className={`flex justify-between items-center px-3 py-2 cursor-pointer rounded-md hover:w-[341px] hover:pl-14 hover:bg-[#272A32] transition ${
                  hoveredIndex === index ? 'w-[341px] pl-14 bg-[#272A32]' : ''
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                {cat.title}
                <Image
                  src={'/arrow-left-2.svg'}
                  alt='arrow-left'
                  width={24}
                  height={24}
                />
              </li>
            ))}
          </ul>

          <button className='bg-white mt-6 py-2 rounded-md w-full font-semibold text-black text-sm'>
            استكشف جميع الدورات
          </button>
        </div>

        {hoveredIndex !== null && (
          <div className='flex flex-col gap-y-[20px] p-4 rounded-lg w-[220px] min-h-[300px]'>
            <h4 className='mb-3 font-semibold text-sm'>
              أهم مواضيع{' '}
              {hoveredIndex !== null ? categories[hoveredIndex].title : ''}
            </h4>
            <ul className='flex flex-col gap-y-[20px]'>
              {hoveredIndex !== null &&
                categories[hoveredIndex].subItems.map(
                  (sub: any, idx: number) => (
                    <li
                      key={idx}
                      className='text-white transition cursor-pointer'
                    >
                      {sub}
                    </li>
                  )
                )}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default DropdownMenu
