import React from 'react'

const Button = ({ text, type, className }) => {
   return (
      <button type={type} className={`min-w-[78px] h-12 bg-blue-600 text-white font-bold text-base rounded ${className}`}>{text}</button>
   )
}

export default Button