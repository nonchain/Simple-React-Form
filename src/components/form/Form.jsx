import React from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const Form = () => {
  return (
    <div className='p-6 w-80 bg-white md:px-8 md:w-96'>
      {/* <LoginForm /> */}
      <RegisterForm />
    </div>
  )
}

export default Form