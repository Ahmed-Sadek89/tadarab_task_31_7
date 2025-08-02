import Image from 'next/image'

const TrainerCard = () => {
  return (
    <div className='group relative rounded-[12px] w-[273px] h-[400px] overflow-hidden cursor-pointer'>
      <Image
        src='/trainer1.png'
        alt='Portrait of a woman wearing a white hijab looking to the side'
        fill
        className='object-cover'
        priority
      />
      <div className='absolute inset-0 bg-gradient-to-b from-transparent to-[#13141E]'></div>

      <div className='right-5 bottom-5 z-10 absolute flex flex-col gap-y-[12px] p-4 group-hover:text-custom-red transition duration-300'>
        <p className='font-bold text-[24px]'>عايض القحطاني</p>
        <p className='text-[16px]'>دكتور جامعي</p>
      </div>
    </div>
  )
}

export default TrainerCard
