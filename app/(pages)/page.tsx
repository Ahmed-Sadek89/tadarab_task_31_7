import {
  BestSelling,
  Countdown,
  CourseCategories,
  Discover,
  FreeCourses,
  Hero,
  NewCourses,
  NextCourses,
  Subscribe,
  Testimonials
} from '@/components/sections'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Homepage',
  description: 'ماذا تريد ان تتعلم اليوم'
}
export default function Home () {
  return (
    <>
      <Hero />
      <BestSelling />
      <NewCourses />
      <NextCourses />
      <CourseCategories />
      <FreeCourses />
      <Testimonials />
      <Subscribe />
      <Countdown />
      <Discover />
      <div className='h-screen'>others</div>
    </>
  )
}
