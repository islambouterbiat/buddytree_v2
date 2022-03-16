import React from 'react'
import Image from 'next/image';

const StepCard = ({data}:any) => {
  return (
    <div className='text-center max-w-xs relative basis-1/3 green_line'>
      <Image src={data.imageUrl} width={120} height={120} alt="how buddytree works" className='object-cover' />
      <span className='absolute py-1 left-34 top-22 w-12 h-12 bg-Green rounded-full text-white text-center text-2xl font-semibold border-2 border-white'>{data.id}</span>
      <h1 className='text-center text-xl text-DarkBlue mt-8 md:whitespace-nowrap'>{data.title}</h1>
      <p className='text-center text-Grey mt-5 text-base font-light'>{data.desc}</p>
      {/* <div className='absolute top-28 -right-28 h-0.5 w-44 bg-Green last-of-type:hidden'></div> */}
    </div>
  )
}

export default StepCard