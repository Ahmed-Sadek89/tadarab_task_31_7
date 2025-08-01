import Link from 'next/link'
import { Title } from '../common'

interface ITitleAndLink {
  firstTitle: string
  secondTitle?: string
  linkTitle?: string
}
const TitleAndLink = ({
  firstTitle,
  secondTitle = '',
  linkTitle = 'المزيد'
}: ITitleAndLink) => {
  return (
    <div className='flex justify-between items-center pl-7 w-full'>
      <Title firstTitle={firstTitle} secondTitle={secondTitle} />

      <Link href={'#'} className='group flex items-center gap-x-[12px]'>
        <span className='font-[700] text-[24px] group-hover:text-custom-red leading-[100%] transition-all duration-300'>
          {linkTitle}
        </span>
        <svg
          width='12'
          height='20'
          viewBox='0 0 12 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10 18L2 10L10 2'
            stroke='white'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='group-hover:stroke-custom-red transition-all duration-300'
          />
        </svg>
      </Link>
    </div>
  )
}

export default TitleAndLink
