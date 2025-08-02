'use client'

import { useState } from 'react'
import Image from 'next/image'
import DropdownMenu from './dropdown-menu'

const categories = [
  {
    title: 'تربية الأبناء',
    subItems: [
      'تربية الأطفال',
      'الزربية في سن المراهقة',
      'التربية الإيجابية للأطفال',
      'تحسين سلوكيات الطفل',
      'التربية الحديثة'
    ]
  },
  {
    title: 'علوم الحاسب والتكنولوجيا',
    subItems: [
      'برمجة للأطفال',
      'الذكاء الاصطناعي المبسط',
      'الأمن السيبراني للأطفال'
    ]
  },
  {
    title: 'الفنون والمهارات',
    subItems: ['الرسم', 'الموسيقى', 'الحرف اليدوية']
  },
  {
    title: 'ديكور المنزل',
    subItems: ['تصميم داخلي', 'ترتيب المساحات']
  },
  {
    title: 'الاقتصاد والأعمال',
    subItems: ['ريادة الأعمال', 'التسويق الرقمي']
  },
  {
    title: 'الاقتصاد والأعمال',
    subItems: ['ريادة الأعمال', 'التسويق الرقمي']
  },
  {
    title: 'ديكور المنزل',
    subItems: ['تصميم داخلي', 'ترتيب المساحات']
  }
]

const DropdownNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='z-50 relative'>
      <div
        className='flex items-center gap-x-[7px] cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='font-extrabold text-[16px]'>
          استكشف الأقسام
        </span>
        <Image src='/arrow-down.svg' alt='arrow-down' width={20} height={20} />
      </div>

      <DropdownMenu categories={categories} isOpen={isOpen}/>
    </div>
  )
}

export default DropdownNav
