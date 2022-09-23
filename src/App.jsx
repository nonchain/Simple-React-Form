import React, { useState } from 'react';
import RegisterForm from './components/form/RegisterForm';
import LoginForm from './components/form/LoginForm';


function App() {
  const [showLoginForm, setShowForm] = useState(true);

  const onShowFormHandler = () => {
    setShowForm(!showLoginForm);
  }

  return (
    <div className='w-80 md:w-96 bg-white flex flex-col'>
      <div className='mb-5 w-full grid grid-cols-2'>
        <span className={`py-5 text-zinc-800 text-xl font-semibold flex items-center justify-center cursor-pointer ${showLoginForm && 'active-form'}`} onClick={onShowFormHandler}>Login</span>
        <span className={`py-5 text-zinc-800 text-xl font-semibold flex items-center justify-center cursor-pointer ${!showLoginForm && 'active-form'}`} onClick={onShowFormHandler}>Register</span>
      </div>
      <div className='p-6 md:px-8'>
        <div className={!showLoginForm && 'hidden'}>
          <LoginForm />
        </div>
        <div className={showLoginForm && 'hidden'}>
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}

export default App
