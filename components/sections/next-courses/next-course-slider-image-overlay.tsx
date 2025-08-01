import React from 'react'

const NextCourseSliderImageOverlay = () => {
  return (
    <>
      <div className='top-0 left-0 z-10 absolute bg-gradient-to-b from-[#00040D] to-[#00040D]/0 opacity-100 w-full h-[98px]'></div>
      <div className='bottom-0 left-0 z-10 absolute bg-gradient-to-t from-[#00040D] to-[#00040D]/0 opacity-100 w-full h-[98px]'></div>
      <div className='top-0 right-0 z-10 absolute bg-gradient-to-l from-[#00040D] to-[#00040D]/0 opacity-100 w-[98px] h-full'></div>
      <div className='top-0 left-0 z-10 absolute bg-gradient-to-r from-[#00040D] to-[#00040D]/0 opacity-100 w-[98px] h-full'></div>
    </>
  )
}

export default NextCourseSliderImageOverlay
