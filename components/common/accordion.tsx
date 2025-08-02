
interface IAccordion {
  index: number
  toggleAccordion: (index: number) => void
  item: any
  openIndexes: number[]
}
const Accordion = ({
  index,
  toggleAccordion,
  item,
  openIndexes
}: IAccordion) => {
  return (
    <div
      key={index}
      className='flex flex-col bg-[#FFFFFF12] backdrop-blur-[16px] p-[24px] rounded-[12px] overflow-hidden'
    >
      <button
        className='flex justify-between items-center w-full'
        onClick={() => toggleAccordion(index)}
      >
        <span className='font-extrabold text-[20px] text-white'>
          {item.question}
        </span>
        <svg
          className={`w-5 h-5 transition-transform ${
            openIndexes.includes(index) ? 'rotate-180' : ''
          }`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>

      {openIndexes.includes(index) && (
        <div className='mt-4 text-[#FFFFFFD9] text-[16px]'>
          تعلم مع أكثر من 1000 دورة تدريبية في مختلف المجالات ناطقة باللغة
          العربية، لك باشتراك واحد فقط، شاهدها الآن عبر تدرب بلا حدود وأحصل على
          شهادة إتمام للدورة التدريبية فور الانتهاء منها، مئات من الشهادات
          التعليمية بانتظارك. شاهد جميع الدورات المضافة حديثًا دون مصاريف
          إضافية. تعلم مع أكثر من 1000 دورة تدريبية في مختلف المجالات ناطقة
          باللغة العربية، لك باشتراك واحد فقط، شاهدها الآن عبر تدرب بلا حدود
          وأحصل على شهادة إتمام للدورة التدريبية فور الانتهاء منها، مئات من
          الشهادات التعليمية.
        </div>
      )}
    </div>
  )
}

export default Accordion
