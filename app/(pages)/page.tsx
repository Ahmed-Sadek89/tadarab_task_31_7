import { BestSelling, Hero } from '@/components/sections'
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
      <div className='h-screen'>others</div>
    </>
  )
}
