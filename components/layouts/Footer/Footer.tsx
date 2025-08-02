import Image from 'next/image'
import FooterData from './footer-data'

const Footer = () => {
  const social = [
    'facebook',
    'insta',
    'tictak',
    'snapchat',
    'linkedin',
    'youtube'
  ]
  return (
    <footer className='flex flex-col gap-y-[43px] mt-10 px-[20px] lg:px-[100px] py-[24px]'>
      <FooterData />
      <hr className='hidden md:block bg-[#FFFFFF1A] w-full h-[1px]' />
      <div className='flex flex-wrap justify-center lg:justify-between items-center gap-y-[34px] lg:gap-y-0 w-full'>
        <p className='text-[#B0B0BA] text-[14px]'>
          جميع الحقوق محفوظة. منصة تدرب. © 2024
        </p>
        <div className='flex items-center gap-x-[30px]'>
          {social.map(soc => (
            <Image src={`/${soc}.svg`} alt={soc} width={30} height={30} className='w-[30px] h-[30px] object-fill cursor-pointer' />
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
