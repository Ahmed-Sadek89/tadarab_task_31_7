import React from 'react'

const CountdownNumber = ({
  number,
  title
}: {
  number: string
  title: string
}) => {
  return (
    <div className='flex flex-col gap-y-[4px] text-center'>
      <h5 className='font-extrabold text-[32px] text-custom-red'>{number}</h5>
      <h5 className='text-[20px]'>{title}</h5>
    </div>
  )
}

export default CountdownNumber
