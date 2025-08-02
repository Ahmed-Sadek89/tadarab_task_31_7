import FirstSide from './first-side'
import MiddlePart from './middle-part'
import LastPart from './last-part'

const FooterData = () => {
  return (
    <div className='items-center gap-10 grid grid-cols-1 xl:grid-cols-4 p-3'>
      <FirstSide />
      <MiddlePart />
      <LastPart />
    </div>
  )
}

export default FooterData
