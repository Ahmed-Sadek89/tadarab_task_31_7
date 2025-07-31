import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Homepage',
  description: 'ماذا تريد ان تتعلم اليوم'
}
export default function Home () {
  return (
    <>
      <h1 className='text-custom-red'>اخمد صادق</h1>
    </>
  )
}
