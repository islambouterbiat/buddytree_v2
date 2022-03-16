import React from 'react'

const GreenButton = ({text,className}:any) => {
  return (
    <button className={`bg-Green px-5 py-2.5 text-sm font-medium rounded text-white whitespace-nowrap ${className}`}>{text}</button>
  )
}

export default GreenButton