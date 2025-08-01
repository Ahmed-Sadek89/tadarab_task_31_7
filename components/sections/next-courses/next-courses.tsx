import { Title } from '@/components/common'
import React from 'react'
import NextCoursesSlider from './next-courses-slider'

const NextCourses = () => {
  return (
    <section className='pr-10'>
      <Title firstTitle='دورات و ورش ' secondTitle='تدريبية قادمة' />
      <NextCoursesSlider />
    </section>
  )
}

export default NextCourses
