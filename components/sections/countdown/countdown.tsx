import Image from 'next/image'
import CountdownNumber from './countdown-number'

const Countdown = () => {
  return (
    <section className='flex justify-center items-center w-full'>
      <div className='relative w-[1018px] h-[578px]'>
        <Image
          src='/arab-map.svg'
          alt='map'
          width={1018}
          height={578}
          className='top-0 left-0 z-0 absolute w-full h-full object-center object-cover'
        />
        <div className='z-20 relative flex flex-col justify-evenly items-center gap-y-[44px] w-full h-full'>
          <div className='flex flex-col items-center gap-y-[8px] text-center'>
            <h5 className='font-extrabold text-[40px]'>أكثر من</h5>
            <h3 className='font-extrabold text-[60px] text-custom-red'>
              300,000 متعلم
            </h3>
            <h4 className='font-extrabold text-[40px]'>في الوطن العربي</h4>
          </div>
          <p className='text-[#FFFFFF99] text-[16px]'>
            منصة تدرب الرائدة في مجال التدريب في الخليج والوطن العربي منذ أكثر
            من 10 سنوات في مجال التعلم من بعد{' '}
          </p>
          <div className='flex justify-between items-center w-full'>
            <CountdownNumber number='+4 ألاف' title='ساعة تدريبية' />
            <CountdownNumber number='1100+' title='دورة تدريبية' />
            <CountdownNumber number='600+' title='خبير ومدرب' />
            <CountdownNumber number='10+' title='سنوات خبرة' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Countdown
