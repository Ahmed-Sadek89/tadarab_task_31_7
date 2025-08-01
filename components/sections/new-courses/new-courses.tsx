import { CoursesSlider, TitleAndLink } from '@/components/ui'
import React from 'react'

const NewCourses = () => {
  return (
    <section className='space-y-[16px] pr-10'>
      <TitleAndLink firstTitle='الدورات' secondTitle=' الجديدة' />
      <CoursesSlider id='new-courses' />
    </section>
  )
}

export default NewCourses
