import React from 'react'
import Image from 'next/image'

import logo from "../../assets/images/logo.png"

const NavBar = () => {
  return (
    <nav className='px-8 md:px-24 bg-Blue w-full'>
      <div className='relative h-20 flex items-center justify-between border-b border-gray-50/20 max-w-7xl mx-auto z-30 gap-4 md:gap-0'>
        {/* <h1 className='text-xl text-white font-bold'>Buddytree</h1> */}
        <Image src={logo} height={26} width={152} alt='logo' className='object-cover'/>
        <button className='bg-transparent text-xs px-5 py-2 border border-white rounded text-white z-30 whitespace-nowrap'>GET STARTED FOR FREE</button>
      </div>
    </nav>
  )
}

export default NavBar