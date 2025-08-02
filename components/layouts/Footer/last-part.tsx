import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LastPart = () => {
  return (
    <div className='flex flex-col gap-y-[8px] bg-[#FFFFFF0A] px-[32px] py-[36px] rounded-[30px] w-full'>
      <div className='flex items-center gap-x-[12px]'>
        <Image
          src={'/chat.png'}
          alt='chat'
          width={60}
          height={60}
          className='rounded-full'
        />
        <div className='flex flex-col gap-y-[5px]'>
          <div className='flex items-center gap-x-[4px] bg-white px-[12px] py-[8px] rounded-tl-[20px] rounded-tr-[4px] rounded-bl-[20px] rounded-br-[20px] w-[81px] h-[28px]'>
            <span className='font-bold text-[12px] text-custom-black'>
              أهلاً بك
            </span>
            <Image src={'/hand.png'} alt='hand' width={14} height={14} />
          </div>
          <div className='flex items-center gap-x-[4px] bg-white px-[12px] py-[8px] rounded-tl-[20px] rounded-tr-[4px] rounded-bl-[20px] rounded-br-[20px] w-[112px] h-[28px]'>
            <span className='font-bold text-[12px] text-custom-black'>
              هل لديك سؤال؟
            </span>
          </div>
        </div>
      </div>
      <p className='opacity-80 text-[16px] leading-[30px]'>
        تحتاج مساعدة أو استفسار؟
      </p>
      <Link
        href={'#'}
        className='flex justify-center items-center gap-[10px] bg-[#FFFFFF14] hover:bg-custom-red px-[22px] py-[14px] rounded-[16px] outline outline-transparent hover:outline-custom-red w-[163px] h-[52px] whitespace-nowrap transition duration-300'
      >
        <Image src={'/whatsapp.svg'} alt='whatsapp' width={24} height={24} />
        <span className='font-bold text-[16px]'>تواصل معنا</span>
      </Link>
    </div>
  )
}

export default LastPart
