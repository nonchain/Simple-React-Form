import React from 'react';
import RegisterForm from './components/form/RegisterForm';
import LoginForm from './components/form/LoginForm';


function App() {

  return (
    <div className='w-80 md:w-96 bg-white flex flex-col'>
      <div className='mb-5 w-full grid grid-cols-2'>
        <span className='py-5 text-zinc-800 text-xl font-semibold flex items-center justify-center cursor-pointer active-form'>Login</span>
        <span className='py-5 text-zinc-800 text-xl font-semibold flex items-center justify-center cursor-pointer'>Register</span>
      </div>
      <div className='p-6 md:px-8'>
        <LoginForm />
        {/* <RegisterForm /> */}
      </div>
    </div>
  )
}

export default App
