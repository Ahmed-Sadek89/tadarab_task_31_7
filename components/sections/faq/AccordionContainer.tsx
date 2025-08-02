import AccordionContent from './accordion-content'

const AccordionContainer = () => {
  const accordionData = [
    {
      section: 'تدرب بلا حدود',
      items: [
        {
          question: 'ما هو اشتراك تدرب بلا حدود؟'
        },
        {
          question: 'هل يمكنني مشاهدة كل الدورات باشتراك تدرب بلا حدود؟'
        },
        {
          question: 'كيف اشتراك في نظام تدرب بلا حدود؟'
        }
      ]
    },
    {
      section: 'نظام الدفع',
      items: [
        {
          question: 'ما هو اشتراك تدرب بلا حدود؟'
        },
        {
          question: 'هل يمكنني مشاهدة كل الدورات باشتراك تدرب بلا حدود؟'
        },
        {
          question: 'كيف اشتراك في نظام تدرب بلا حدود؟'
        }
      ]
    },
    {
      section: 'الشهادات التدريبية',
      items: [
        {
          question: 'ما هو اشتراك تدرب بلا حدود؟'
        },
        {
          question: 'هل يمكنني مشاهدة كل الدورات باشتراك تدرب بلا حدود؟'
        },
        {
          question: 'كيف اشتراك في نظام تدرب بلا حدود؟'
        }
      ]
    }
  ]

  return (
    <div className='space-y-7'>
      <AccordionContent data={accordionData[0]}/>
      <AccordionContent data={accordionData[1]}/>
      <AccordionContent data={accordionData[2]}/>
    </div>
  )
}

export default AccordionContainer
