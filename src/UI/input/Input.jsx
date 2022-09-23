import React from 'react'

const Input = ({type, id, placeholder, label, pattern, required, errorMessage, inputName}) => {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={id} className='text-[17px] font-bold text-zinc-800'>{label}</label>
      <input type={type} id={id} placeholder={placeholder} name={inputName} pattern={pattern} required={required}
      className='px-3 py-2 w-full border-2 border-gray-300 rounded 
      text-zinc-800 text-sm font-semibold transition-200 focus:border-gray-700 input'/>
      {errorMessage && <span className={`text-xs text-[#fc4343] font-semibold mt-1 hidden `}>{errorMessage}</span>}
    </div>
  )
}

export default Input