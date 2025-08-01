import Image from 'next/image'
import Link from 'next/link'

interface IBgLink {
  image?: string
  text: string
  background: string,
  width: string
}
const BgLink = ({ image = '', text, background ,width}: IBgLink) => {
  return (
    <Link
      href='#'
      className={`flex justify-center items-center gap-x-[8px] ${background} px-[20px] rounded-[12px] ${width} h-[43px]`}
    >
      {image && <Image src={image} alt={image} width={20} height={20} />}
      <span className='text-bold text-white'>{text}</span>
    </Link>
  )
}

export default BgLink
