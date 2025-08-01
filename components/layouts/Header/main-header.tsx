import Image from 'next/image'
import Link from 'next/link'
import SearchInput from './search-input'
import DropdownNav from './dropdown-nav'
import NavbarButtons from './navbar-buttons'

const MainHeader = () => {
  return (
    <div className='flex justify-center items-center bg-custom-black backdrop-blur-[100px] px-[35px] w-full h-[64px] whitespace-nowrap'>
      <div className='flex items-center gap-x-[24px] w-full'>
        <Link href={'/'}>
          <Image
            src={'/logo.svg'}
            alt='logo'
            width={100}
            height={25}
            className='w-[100px] h-[25px]'
          />
        </Link>

        <DropdownNav />
        <SearchInput />
        <NavbarButtons />
      </div>
    </div>
  )
}

export default MainHeader
