import React from 'react'

const GreenButton = ({text,className}:any) => {
  return (
    <button className={`bg-Green px-5 py-2 text-xs font-medium rounded text-white ${className}`}>{text}</button>
  )
}

export default GreenButton