import React from 'react';
import login from '../assets/images/login.png'
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
// import { Container } from 'flowbite-react';

const Login = () => {
  return (
    <>
      <section className='customHeight grid md:grid-cols-2 sm:px-0 px-5'>
        <div className='h-full w-full hidden md:flex justify-center items-center bg-[#8CB9BD]'>
          <img src={login} className='w-[98%] h-[80%]' alt="" />
        </div>
        <div className='my-auto'>
          <div className='text-center pb-5'>
            <h2 className='text-4xl font-medium'>Log in to Exclusive</h2>
            <p className='text-sm' >Enter your details below</p>
          </div>
          <form action="" className='grid gap-10 mx-auto w-[250px] sm:w-[300px] lg:w-[400px]'>
            <div class="relative z-0 w-full">
              <input type="email" id="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label for="email" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
            </div>
            <div class="relative z-0 w-full">
              <input type="password" id="password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label for="password" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
            </div>
            <div class="relative grid gap-10 grid-cols-2 z-0 w-full">
              <Button color="info">
                Log In
              </Button>
              <Button color="gray" className='text-[#043E44]'>
                Forget Password?
              </Button>
            </div>
            <div class="relative z-0 w-full text-right">
              <p>Don't have account?<Link className='ps-2'>Sign up</Link></p>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login
