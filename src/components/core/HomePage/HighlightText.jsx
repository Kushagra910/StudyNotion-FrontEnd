import React from 'react'

const HighlightText = ({text}) => {
  return (
    <span className='font-bold bg-gradient-to-r from-custom-gradient-0 via-custom-gradient-50 to-custom-gradient-100 bg-clip-text text-transparent '>
    {" "}
      {text}
    </span>
  )
}

export default HighlightText