import Image from 'next/image'

const DropdownNav = () => {
  return (
    <div className='flex items-center gap-x-[7px] cursor-pointer'>
      <span className='font-[700] text-[14px]'>استكشف الأقسام</span>
      <Image src='/arrow-down.svg' alt='arrow-down' width={20} height={20} />
    </div>
  )
}

export default DropdownNav
