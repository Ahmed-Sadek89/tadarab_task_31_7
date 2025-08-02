import {
  BestSelling,
  Contact,
  Countdown,
  CourseCategories,
  Discover,
  FreeCourses,
  Hero,
  NewCourses,
  NextCourses,
  Subscribe,
  Testimonials,
  Trainers
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
      <Trainers />
      <Contact />
      <div className='h-screen'>others</div>
    </>
  )
}
