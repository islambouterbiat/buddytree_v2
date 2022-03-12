import React from 'react'
import Image from 'next/image';

const StepCard = ({data}:any) => {
  return (
    <div className='text-center max-w-xs relative basis-1/3'>
      <Image src={data.imageUrl} width={120} height={120} alt="how buddytree works" className='object-cover' />
      <span className='absolute py-1 left-34 top-22 w-12 h-12 bg-Green rounded-full text-white text-center text-3xl font-semibold border-2 border-white'>{data.id}</span>
      <h1 className='text-center text-lg text-DarkBlue mt-8'>{data.title}</h1>
      <p className='text-center text-Grey mt-5 text-sm font-light'>{data.desc}</p>
      {/* <span className='absolute top-28 -right-20 h-1 w-36 bg-Green'></span> */}
    </div>
  )
}

export default StepCard