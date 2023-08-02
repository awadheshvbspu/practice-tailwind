import React from 'react'
import tree from '../assests/trees.jpg'

export default function Login3() {
  return (
    <>
        <div className='w-full h-screen flex'>
       <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
        <div className='w-full h-[550px] hidden md:block'>
            <img src={tree} alt='' className='h-full w-full object-cover' />
        </div>
        <div className='p-4 flex flex-col justify-around'>
            <form>
                <h2 className='text-4xl font-bold text-center mb-8'>WELCOME !</h2>
                <div>
                    <input type='text' className='border p-2 mr-2 ' />
                    <input type='password'  className='border p-2 '/>
                </div>
                <button className='w-full py-2 my-4 bg-green-400 hover:bg-green-500'>Sign In</button>
                <p className='text-center'>Forgot Username or Password</p>
            </form>
            <p className='text-center'>Sign Up</p>
        </div>
       </div>
        </div>
    </>
  )
}
