import React from 'react';
import Button from '../../UI/button/Button';
import Input from '../../UI/input/Input'

const LoginForm = () => {
   const onSubmitHandler = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      console.log(formData);
      const {email, password} = Object.fromEntries(formData.entries());
      alert(`${email} \n ${password}`);
   }

   return (
      <form className='w-full flex flex-col' onSubmit={onSubmitHandler}>
         <div className='w-full flex flex-col gap-4'>
            <Input placeholder='example@gamil.com' type='email' label='Email' inputName='email' id='email' errorMessage='Please enter a valid email' required={true}/>
            <Input placeholder='Enter your password' type='text' label='Password' inputName='password' id='password' errorMessage='Password must be 8-20 characters and include at least 1 letter' required={true} pattern='^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{8,20}$'/>
         </div>
         <Button text='Login' type='submit' className={'mt-20'} />
      </form>
   )
}

export default LoginForm