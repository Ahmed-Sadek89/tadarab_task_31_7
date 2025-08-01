import HeaderAdv from './header-adv'
import MainHeader from './main-header'

const Header = () => {
  return (
    <header className='top-0 z-50 fixed w-full'>
      <HeaderAdv />
      <MainHeader />
    </header>
  )
}

export default Header
