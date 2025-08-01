import { TitleAndLink } from '@/components/ui'
import React from 'react'
import CategoriesSlider from './categories-slider'

const CourseCategories = () => {
  return (
    <section className='space-y-[16px] pr-10'>
      <TitleAndLink
        firstTitle='جميع'
        secondTitle=' الدورات'
        linkTitle='أقسام الدورات'
      />
      <CategoriesSlider />
    </section>
  )
}

export default CourseCategories
