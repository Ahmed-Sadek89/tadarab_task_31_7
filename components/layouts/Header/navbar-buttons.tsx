import BgLink from './bg-link'
import Link from 'next/link'
import Image from 'next/image'

const NavbarButtons = () => {
  return (
    <div className='flex items-center gap-x-[12px]'>
      <Link href='#' className='font-[700]'>
        انضم كمدرب
      </Link>
      <Link href='#' className='font-[700]'>
        تدرب للأعمال
      </Link>
      <BgLink
        background='bg-[#292951]'
        image={'/unlimited.svg'}
        text='تدرب بلا حدود'
        width={'w-[165px]'}
      />

      <BgLink
        background='bg-custom-gray'
        text='تسجيل الدخول'
        width={'w-[145px]'}
      />
      <Link href={'#'}>
        <Image
          src={'/cart.svg'}
          alt='cart'
          width={24}
          height={24}
          className='cursor-pointer'
        />
      </Link>
    </div>
  )
}

export default NavbarButtons
