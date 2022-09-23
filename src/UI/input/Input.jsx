import React from 'react'

const Input = ({type, id, placeholder, label, refer}) => {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={id} className='text-lg font-bold text-zinc-800'>{label}</label>
      <input type={type} id={id} placeholder={placeholder} ref={refer}
      className='px-3 py-2 w-full border-2 border-gray-300 rounded 
      text-zinc-800 text-sm font-semibold transition-200 focus:border-gray-700 '/>
    </div>
  )
}

export default Input