import { Title } from '@/components/common'
import AccordionContainer from './AccordionContainer'

const FAQ = () => {
  return (
    <section className='space-y-10 px-20'>
        <Title firstTitle='أكثر الأسئلة الشائعة' />
        <AccordionContainer />
    </section>
  )
}

export default FAQ