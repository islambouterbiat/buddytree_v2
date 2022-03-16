import React from 'react'
import Image from 'next/image'

const HangoutCard = ({hangout}:any) => {
  return (
    <div className='w-56 rounded flex-none flex flex-col relative cursor-pointer hover:scale-[1.01] transition ease-in-out duiration-600'>
      <Image src={hangout.imageUrl} height={180} width={300} className="rounded-t" />
      <div className='py-4 px-5 bg-white'>
        <span className='text-Blue text-xs font-semibold'>SAT, MAR 5 @ 7:00 PM GMT+1</span>
        <h1 className='text-DarkBlue text-lg font-bold my-2'>{hangout.title}</h1>
        <div className='flex mt-2'>
          {hangout.users.map((user:any,index:any)=>(
            <div className="">
              <Image key={index} height={25} width={25} src={user} />
            </div>
          ))}
          <span className='text-sm text-LightGrey font-semibold ml-3'>54</span>
        </div>
        <button className='mt-4 text-Green text-sm font-semibold bg-transparent outline-none'>Join This Hangout</button>
      </div>
    </div>
  )
}

export default HangoutCard