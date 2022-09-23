import React from 'react'

const Input = ({type, id, placeholder, label, errorMessage, inputName}) => {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={id} className='text-[17px] font-bold text-zinc-800'>{label}</label>
      <input type={type} id={id} placeholder={placeholder} name={inputName}
      className='px-3 py-2 w-full border-2 border-gray-300 rounded 
      text-zinc-800 text-sm font-semibold transition-200 focus:border-gray-700 '/>
      <span className={`text-xs text-red-500 font-semibold mt-1 ${errorMessage ?? 'hidden'}`}>{errorMessage}</span>
    </div>
  )
}

export default Input