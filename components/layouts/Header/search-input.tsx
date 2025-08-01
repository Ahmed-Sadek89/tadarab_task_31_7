import Image from 'next/image'

const SearchInput = () => {
  return (
    <div className='relative w-[655px]'>
      <div className='top-[30%] right-7 absolute'>
        <Image src={'/search.svg'} alt='search' width={20} height={20} />
      </div>
      <input
        type='search'
        id='default-search'
        className='block bg-custom-gray py-2.5 pr-16 pl-12 rounded-[12px] w-full text-gray-900 placeholder:text-[#B0B0BA] placeholder:text-[15px]'
        placeholder='ماذا تريد ان تتعلم اليوم؟'
        required
      />
    </div>
  )
}

export default SearchInput
