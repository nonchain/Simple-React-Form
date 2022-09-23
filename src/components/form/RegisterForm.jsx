import React from 'react';
import Button from '../../UI/button/Button';
import Input from '../../UI/input/Input'

const RegisterForm = () => {

   const onSubmitHandler = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);

      console.log(Object.fromEntries(formData.entries()));
   }

   return (
      <form className='w-full flex flex-col' onSubmit={onSubmitHandler}>
         <div className='w-full flex flex-col gap-4'>
            <div className="flex gap-2 items-center">
               <Input placeholder='John' type='text' label='Forename' inputName='forename' id='forename' />
               <Input placeholder='Deco' type='text' label='Surname' inputName='surname' id='surname' /> 
            </div>
            <Input placeholder='example@gamil.com' type='email' label='Email' inputName='email' id='email' />
            <Input placeholder='At least 3 characters' type='text' label='Username' inputName='username' id='username' />
            <Input placeholder='At least 8 characters' type='text' label='Password' inputName='password' id='password' />
         </div>

         <Button text='Register' type='submit' className={'mt-20'} />
      </form>
   )
}

export default RegisterForm