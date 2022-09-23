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
               <Input placeholder='John' type='text' label='Forename' inputName='forename' id='forename' required={true}/>
               <Input placeholder='Deco' type='text' label='Surname' inputName='surname' id='surname' required={true}/> 
            </div>
            <Input placeholder='example@gamil.com' type='email' label='Email' inputName='email' id='email' errorMessage='Please enter a valid email' required={true}/>
            <Input placeholder='At least 3 characters' type='text' label='Username' inputName='username' id='username' errorMessage="Username should include '@' and should be 3-16 characters and shouldn't include any special character" required={true} pattern='^[A-Za-z0-9@]{3,16}$'/>
            <Input placeholder='At least 8 characters' type='text' label='Password' inputName='password' id='password' errorMessage='Password must be 8-20 characters and include at least 1 letter' required={true} pattern='^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{8,20}$'/>
         </div>

         <Button text='Register' type='submit' className={'mt-20'} />
      </form>
   )
}

export default RegisterForm