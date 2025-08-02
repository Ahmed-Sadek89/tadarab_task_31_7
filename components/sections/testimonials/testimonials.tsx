import { Title } from '@/components/common'
import TestimonalsSlider from './testimonals-slider'

const Testimonials = () => {
  return (
    <section className='space-y-[16px] pr-10'>
      <Title firstTitle='أراء المتعلمين' secondTitle=' في تدرب' />
      <TestimonalsSlider />
    </section>
  )
}

export default Testimonials
