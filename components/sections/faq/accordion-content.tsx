'use client'
import { Accordion } from '@/components/common'
import { useState } from 'react'

const AccordionContent = ({ data }: { data: any }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([])

  const toggleAccordion = (index: number) => {
    setOpenIndexes(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    )
  }

  return (
    <div className='space-y-2'>
      <h6 className='font-extrabold text-[20px] leading-[20px]'>
        {data.section}
      </h6>

      <div className='flex flex-col gap-y-[20px]'>
        {data.items.map((item: any, index: number) => (
          <Accordion
            index={index}
            key={index}
            item={item}
            openIndexes={openIndexes}
            toggleAccordion={toggleAccordion}
          />
        ))}
      </div>
    </div>
  )
}

export default AccordionContent
