import React, { useState } from 'react';
import login from '../assets/images/login.png'
import { Button } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import { Flip, ToastContainer, toast } from 'react-toastify';
import instance from '../utils/axios';
import { userAuth } from '../redux/features/userAuthSlice';
import { useDispatch } from 'react-redux';
// import { Container } from 'flowbite-react';

const Login = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(
    {
        email: '',
        password: '',
    }
);
const [errors, setErrors] = useState({});
const navigate = useNavigate();
const validation = (values) => {
  const errors = {};
  const emailRe = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (values.email === "") {
      errors.email = "Email is required";
  } else if (!emailRe.test(values.email)) {
      errors.email = "Invalid email";
  }
  if (values.password === "") {
      errors.password = "Password is required";
  } else if (!passwordRe.test(values.password)) {
      errors.password = "Password must be at least 8 characters and include at least one lowercase letter, one uppercase letter, one digit, and one special character";
  }
  return errors;
}
const handleInput = (e) => {
  console.log("Field: ", e.target.name, " Value: ", e.target.value);
  console.log(formValues);
  setFormValues({ ...formValues, [e.target.name]: e.target.value })
}
const handleSubmit = async (e) => {
  e.preventDefault();
  // console.log('form is submitted');
  // console.log(validation(formValues))
  const validationErrors = validation(formValues);
  setErrors(validationErrors);
  if (Object.keys(validationErrors).length === 0) { 
      try {
        const res = await instance.post('/api/v1/user/login', {
          email: formValues.email,
          password: formValues.password
      },{
        withCredentials: true
      });
          if (res.data.success) {
            if(res.data.isAuthenticated) {
              dispatch(userAuth(
                {
                  user: res.data.user,
                  isAuthenticated: res.data.isAuthenticated,
                  token: res.data.accessToken
                }
              ))
            }
              toast.success(res.data.message);
              await new Promise((resolve) => setTimeout(resolve, 1000))
              setTimeout(() => {
                  navigate('/');
              }, 1000);
          }
      } catch (error) {
          toast.error(error.response.data.message)
      }
  }

}
  return (
    <>
      <section className='customHeight grid md:grid-cols-2 sm:px-0 px-5'>
        <div className='h-full w-full hidden md:flex justify-center items-center bg-[#8CB9BD]'>
          <img src={login} className='w-[98%] h-[80%]' alt="" />
        </div>
        <div className='my-auto'>
          <div className='text-center pb-5'>
            <h2 className='text-4xl font-medium'>Sign in to Exclusive</h2>
            <p className='text-sm' >Enter your details below</p>
          </div>
          <form action="" noValidate onSubmit={handleSubmit} className='grid gap-6 mx-auto w-[250px] sm:w-[300px] lg:w-[400px]'>
            <ToastContainer 
             position="top-center"
             autoClose={2000}
             hideProgressBar={false}
             newestOnTop={false}
             closeOnClick
             rtl={false}
             pauseOnFocusLoss
             draggable
             pauseOnHover
             theme="dark"
             transition={Flip}
            />
            <div className="relative z-0 w-full">
              <input type="email" id="email" name='email' onChange={handleInput} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
              {errors.email && <p className='text-red-600'>{errors.email}</p>}
            </div>
            <div className="relative z-0 w-full">
              <input type="password" id="password" name='password' onChange={handleInput} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label htmlFor="password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
              {errors.password && <p className='text-red-600'>{errors.password}</p>}
            </div>
            <div className="relative grid gap-10 grid-cols-2 z-0 w-full">
              <button className='bg-[#043E44] p-2 text-slate-200 rounded-md'>
                Sign In
              </button>
              <div className='bg-transparent p-2 cursor-pointer text-[#043E44] rounded-md'>
              Forget Password?
              </div>
            </div>
            <div className="relative z-0 w-full text-right">
              <p>Don't have account?<Link className='ps-2' to={'/signup'}>Sign up</Link></p>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login
