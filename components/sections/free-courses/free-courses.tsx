import { CoursesSlider, TitleAndLink } from '@/components/ui'
import React from 'react'

const FreeCourses = () => {
  return (
    <section className='space-y-[16px] pr-10'>
      <TitleAndLink firstTitle='الدورات' secondTitle=' المجانية' />
      <CoursesSlider id='free-courses' />
    </section>
  )
}

export default FreeCourses
