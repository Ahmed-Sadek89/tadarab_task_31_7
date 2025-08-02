import Image from 'next/image'
import Link from 'next/link'

const Contact = () => {
  return (
    <section className='relative flex justify-center items-center bg-[#0D1119] w-full h-[459px]'>
      <div className='items-center grid grid-cols-2'>
        <div className='flex justify-center items-center w-full'>
          <Image
            src={'/contact.png'}
            alt='contact'
            width={519}
            height={560}
            className='translate-y-[-49px]'
          />
        </div>
        <div className='flex justify-center items-center w-full'>
          <div className='flex flex-col gap-y-[24px]'>
            <h2 className='font-extrabold text-[32px]'>
              تحتاج مساعدة أو استفسار؟
            </h2>
            <p className='text-[#FFFFFFD9] text-[16px]'>
              قم بالتواصل معنا عبر WhatsApp
            </p>
            <Link
              href={'#'}
              className='flex justify-center items-center gap-[10px] bg-custom-red hover:bg-custom-black px-[40px] py-[12px] rounded-[12px] outline outline-transparent hover:outline-custom-red w-[193px] h-[48px] whitespace-nowrap transition duration-300'
            >
              <Image
                src={'/whatsapp.svg'}
                alt='whatsapp'
                width={24}
                height={24}
              />
              <span className='font-bold text-[16px]'>تواصل معنا</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
