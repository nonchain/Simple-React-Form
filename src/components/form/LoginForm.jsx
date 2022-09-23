import React from 'react'
import Input from '../../UI/input/Input'

const LoginForm = () => {
  return (
    <div className='w-full'>
      <Input placeholder='username' type='text' label='Username' id='username'/>
      <Input placeholder='...' type='text' label='Password' id='password'/>
      
    </div>
  )
}

export default LoginForm