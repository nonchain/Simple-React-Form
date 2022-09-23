import React from 'react';
import Button from '../../UI/button/Button';
import Input from '../../UI/input/Input'

const LoginForm = () => {
   const onSubmitHandler = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);

      console.log(Object.fromEntries(formData.entries()));
   }

   return (
      <form className='w-full flex flex-col' onSubmit={onSubmitHandler}>
         <div className='w-full flex flex-col gap-4'>
            <Input placeholder='example@gamil.com' type='email' label='Email' inputName='email' id='email' errorMessage='Please enter a valid email'/>
            <Input placeholder='Enter your password' type='text' label='Password' inputName='password' id='password'/>
         </div>
         <Button text='Login' type='submit' className={'mt-20'} />
      </form>
   )
}

export default LoginForm