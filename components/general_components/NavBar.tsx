import React from 'react'

const NavBar = () => {
  return (
    <nav className='px-24 bg-Blue w-full fixed '>
      <div className='h-20 flex items-center justify-between border-b border-gray-50/20 max-w-7xl mx-auto'>
        <h1 className='text-xl text-white font-bold'>Buddytree</h1>
        <button className='bg-transparent text-xs px-5 py-2 border border-white rounded text-white'>GET STARTED FOR FREE</button>
      </div>
    </nav>
  )
}

export default NavBar