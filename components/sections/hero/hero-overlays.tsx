import Image from 'next/image'
import React from 'react'

const HeroOverlays = () => {
  return (
    <>
      <Image
        src='/hero/hero-section-background.png'
        alt='hero background'
        width={803}
        height={1676}
        className='top-[-428px] left-[9px] z-0 absolute opacity-100 w-[802.9px] h-[1676px] object-contain object-left'
      />
      <div className='absolute inset-0 bg-gradient-to-b from-black to-black/40'></div>

      <div className='top-[0px] absolute'>
        <Image
          src={'/hero/ellipse.svg'}
          alt='ellipse'
          width={1311}
          height={949}
        />
      </div>
      <div className='right-[10px] bottom-0 z-20 absolute'>
        <Image
          src={'/hero/hero-section-person.png'}
          alt='ellipse'
          width={511}
          height={575}
        />
      </div>
      <div className='bottom-0 absolute bg-gradient-to-t from-[#00040D] to-[#00040D00] w-full h-[200px]'></div>
    </>
  )
}

export default HeroOverlays
