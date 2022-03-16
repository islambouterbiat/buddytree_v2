import React from 'react'
import Image from 'next/image'

const StepCard = ({ data }: any) => {
  return (
    <div className="green_line relative max-w-xs basis-1/3 text-center">
      <Image
        src={data.imageUrl}
        width={120}
        height={120}
        alt="how buddytree works"
        className="object-cover"
      />
      <span className="absolute left-34 top-22 h-12 w-12 rounded-full border-2 border-white bg-Green py-1 text-center text-2xl font-semibold text-white">
        {data.id}
      </span>
      <h1 className="mt-8 text-center text-xl font-bold text-DarkBlue md:whitespace-nowrap">
        {data.title}
      </h1>
      <p
        className={
          `mt-5 text-center text-base font-light text-Grey` +
          `${data.bold && 'font-bold'}`
        }
      >
        {data.desc}
      </p>
      {/* <div className='absolute top-28 -right-28 h-0.5 w-44 bg-Green last-of-type:hidden'></div> */}
    </div>
  )
}

export default StepCard
