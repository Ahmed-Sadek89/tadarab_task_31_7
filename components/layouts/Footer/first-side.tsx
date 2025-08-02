import Image from 'next/image'

const FirstSide = () => {
  const payments = [
    '/master.svg',
    '/visa.png',
    '/k.svg',
    '/paypal.svg',
    '/mda.svg',
    '/a-pay.svg'
  ]
  return (
    <div className='flex flex-col gap-y-10 p-3'>
      <div className='flex flex-col gap-y-[20px]'>
        <Image
          src={'/tadarab-white.svg'}
          alt='tadarab-white'
          width={110}
          height={20}
        />
        <p className='text-[16px]'>
          منصة تدرب التعليمية للدورات الأون لاين في الوطن العربي
        </p>
      </div>
      <div className='flex flex-col gap-y-[20px]'>
        <p className='text-[#B0B0BA] text-[16px]'>وسائل الدفع عبر تدرب</p>
        <div className='flex flex-wrap items-center gap-5'>
          {payments.map((pay, index) => (
            <Image
              key={index}
              src={pay}
              alt={`tadarab-payment-${index}`}
              width={50}
              height={20}
            />
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-y-[20px]'>
        <p className='text-[#B0B0BA] text-[16px]'>قريباً تطبيق تدرب</p>
        <div className='flex items-center gap-x-5'>
          <p className='text-[16px]'>على الأيفون والأندرويد</p>
          <Image src={'/apple.svg'} alt='apple' width={20} height={20} />
          <Image src={'/android.svg'} alt='android' width={20} height={20} />
        </div>
      </div>
    </div>
  )
}

export default FirstSide
