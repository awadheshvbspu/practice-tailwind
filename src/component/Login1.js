import React from 'react';
import loginimg from '../assests/login.jpg'

export default function Login1() {
  return (
    <>
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
         <div className='hidden sm:block'>
            <img src={loginimg} alt='' className='w-full h-full object-cover' />
         </div>
         <div className='bg-gray-300 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
                <h2 className='text-4xl font-bold text-center py-6'>BRAND.</h2>
                <div className='flex flex-col py-2'>
                    <label>Username</label>
                    <input type='text' className='border p-2' />
                </div>
                <div className='flex flex-col py-2'>
                    <label>Password</label>
                    <input type='password'  className='border p-2'/>
                </div>
                <button type='submit' className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>Sign In</button>
                <div className='flex justify-between'>
                    <p className='flex items-center'><input className='mr-2' type='checkbox'/>Remeber Me</p>
                    <p>Create an Account</p>
                </div>
            </form>
         </div>
        </div>
    </>
  )
}
