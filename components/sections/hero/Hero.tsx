import Image from 'next/image'
import HeroOverlays from './hero-overlays'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='relative flex justify-center items-center h-[820px] overflow-hidden'>
      <HeroOverlays />

      <div className='z-20 relative'>
        <div className='flex flex-col items-center gap-y-[16px] text-center'>
          <h1 className='bg-clip-text bg-gradient-to-br from-white to-zinc-500 font-extrabold text-[80px] text-transparent leading-[94px] tracking-[0.2px]'>
            30 <span className='font-[700]'>يومًا</span>
          </h1>

          <h4 className='bg-clip-text bg-gradient-to-br from-white to-zinc-500 font-bold text-[48px] text-transparent leading-[94px] tracking-[0.2px]'>
            كافية لتحقيق أهدافك
          </h4>
          <div className='flex justify-center items-center w-full'>
            <p className='opacity-80 w-[433px] font-[400] text-[18px] leading-[30px]'>
              منصة تدرب الرائدة في مجال التدريب في الخليج و الوطن العربي منذ
              أكثر من 10 سنوات في مجال التعلم عن بعد
            </p>
          </div>

          <Link href={'#'} className='flex justify-center items-center gap-[10px] bg-custom-red hover:bg-custom-black px-[40px] py-[12px] rounded-[12px] outline outline-transparent hover:outline-custom-red w-[210px] h-[55px] transition duration-300'>
            <span className='font-[800] text-[16px] leading-[24px]'>
              ابدأ التعلم الآن
            </span>
            <Image
              src={'/arrow-left.svg'}
              alt='arrow-left'
              width={18}
              height={18}
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
