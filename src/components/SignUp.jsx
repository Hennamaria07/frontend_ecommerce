import React, { useState } from 'react'
import login from '../assets/images/login.png'
import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom';
import userPhoto from '../assets/images/user.png';

const SignUp = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const [photoName, setPhotoName] = useState(null);
    const [photoPreview, setPhotoPreview] = useState(null);
    // console.log(photoName, photoPreview);

    // Password
    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }
    const toggleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible((prevState) => !prevState);
    }

    // avatar
    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          setPhotoName(file.name);
          const reader = new FileReader();
          reader.onloadend = () => {
            setPhotoPreview(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };
    return (
        <>
            <section className='customSignupHeight grid md:grid-cols-2 sm:px-0 px-5'>
                <div className='h-full w-full hidden md:flex justify-center items-center bg-[#8CB9BD]'>
                    <img src={login} className='w-[98%] h-[80%]' alt="" />
                </div>
                <div className='my-auto py-5'>
                    <div className='text-center pb-5'>
                        <h2 className='text-4xl font-medium'>Create an account</h2>
                        <p className='text-sm' >Enter your details below</p>
                    </div>
                    <form action="" className='grid gap-5 mx-auto w-[250px] sm:w-[300px] lg:w-[400px]'>
                        <div class="py-3 center mx-auto">
                            <div class="text-center w-48">
                            <input
        type="file"
        className="hidden"
        onChange={handlePhotoChange}
        style={{ display: 'none' }}
        id="photo"
      />

      <label className="block text-gray-700 text-sm font-bold mb-2 text-center" htmlFor="photo">
        Profile Photo <span className="text-red-600"></span>
      </label>

      <div className="text-center">
        <div className="mt-2" style={{ display: photoPreview ? 'none' : 'block' }}>
          <img src={userPhoto} className="w-40 h-40 m-auto rounded-full shadow" alt="Current Profile" />
        </div>

        {photoPreview && (
          <div className="mt-2">
            <img src={photoPreview} className="w-40 h-40 rounded-full m-auto shadow" alt="Profile Preview" />
          </div>
        )}

        <label htmlFor="photo" className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-400 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150 mt-2 ml-3 cursor-pointer">
          Select New Photo
        </label>
        </div>
                            </div>
                        </div>
                        <div className="relative z-0 w-full">
                            <input type="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Full Name</label>
                        </div>
                        <div className="relative z-0 w-full">
                            <input type="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
                        </div>
                        <div className="relative z-0 w-full">
                            <input type="number" id="number" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="number" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Phone Number</label>
                        </div>
                        <div className="relative z-0 w-full">
                            <input type={isPasswordVisible ? "text" : "password"} id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />

                            <div onClick={togglePasswordVisibility} className="absolute right-0 top-0 mt-3 mr-4 cursor-pointer">
                                {isPasswordVisible ? (
                                    <span className="material-symbols-outlined">visibility</span>
                                ) : (
                                    <span className="material-symbols-outlined">visibility_off</span>
                                )}
                            </div>

                            <label htmlFor="password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
                        </div>
                        <div className="relative z-0 w-full">
                            <input type={isConfirmPasswordVisible ? "text" : "password"} id="confirmPassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <div onClick={toggleConfirmPasswordVisibility} className="absolute right-0 top-0 mt-3 mr-4 cursor-pointer">
                                {isConfirmPasswordVisible ? (
                                    <span className="material-symbols-outlined">visibility</span>
                                ) : (
                                    <span className="material-symbols-outlined">visibility_off</span>
                                )}
                            </div>
                            <label htmlFor="confirmPassword" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Confirm Password</label>
                        </div>
                        <div className="relative grid grid-cols-1 z-0 w-full">
                            <Button color="info">
                                Sign Up
                            </Button>
                        </div>
                        <div className="relative z-0 w-full text-right">
                            <p>Already have account?<Link className='ps-2'>Login</Link></p>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default SignUp
