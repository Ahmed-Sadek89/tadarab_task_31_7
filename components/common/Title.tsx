interface ITitle {
  firstTitle: string
  secondTitle?: string
}

const Title = ({ firstTitle, secondTitle = '' }: ITitle) => {
  return (
    <h2 className='font-[800] text-[32px] leading-[100%]'>
      {firstTitle}
      {secondTitle && <span className='text-custom-red'> {secondTitle}</span>}
    </h2>
  )
}

export default Title
