import { CoursesSlider, TitleAndLink } from '@/components/ui'
import BestSellingTabs from './best-selling-tabs'

const BestSelling = () => {
  return (
    <section className='space-y-[16px] pr-10'>
      <TitleAndLink firstTitle='الدورات' secondTitle=' الأكثر مبيعاً ' />
      <BestSellingTabs />
      <CoursesSlider id='best-selling'/>
    </section>
  )
}

export default BestSelling
