import React, { useEffect, useState } from 'react'
import login from '../assets/images/login.png'
// import { Button } from 'flowbite-react'
import { Link, useNavigate } from 'react-router-dom';
import userPhoto from '../assets/images/user.png';
import instance from '../utils/axios';
import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const [photoName, setPhotoName] = useState(null);
    const [photoPreview, setPhotoPreview] = useState(null);
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState(
        {
            name: '',
            email: '',
            number: '',
            password: '',
            confirmPassword: '',
            profile: ''
        }
    );
    const [errors, setErrors] = useState({})


    const validation = (values) => {
        const errors = {};
        const nameRE = /^[a-zA-Z]{5,}(\s[a-zA-Z]+)*$/;
        const emailRe = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const numberRe = /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/;
        const passwordRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (values.profile === "") {
            errors.photo = "photo is required";
        }
        if (values.name === "") {
            errors.name = "Name is required";
        } else if (!nameRE.test(values.name)) {
            errors.name = "Invalid name";
        }
        if (values.email === "") {
            errors.email = "Email is required";
        } else if (!emailRe.test(values.email)) {
            errors.email = "Invalid email";
        }
        if (values.number === "") {
            errors.number = "Number is required";
        } else if (!numberRe.test(values.number)) {
            errors.number = "Invalid number";
        }
        if (values.password === "") {
            errors.password = "Password is required";
        } else if (!passwordRe.test(values.password)) {
            errors.password = "Password must be at least 8 characters and include at least one lowercase letter, one uppercase letter, one digit, and one special character";
        }
        if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Password do not match";
        }
        return errors;
    }
    const handleInput = (e) => {
        // console.log("Field: ", e.target.name, " Value: ", e.target.value);
        // console.log(formValues);
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
        console.log(formValues.confirmPassword);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log('form is submitted');
        // console.log(validation(formValues))
        const validationErrors = validation(formValues);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) { // Check if there are no validation errors
            const formData = new FormData();
            formData.append('fullName', formValues.name);
            formData.append('email', formValues.email);
            formData.append('phone', formValues.number);
            formData.append('password', formValues.password);
            formData.append('confirmPassword', formValues.confirmPassword);
            if (formValues.profile) {
                formData.append('avatar', formValues.profile);
            }
            for (let [key, value] of formData.entries()) {
                console.log(key, value);
            }
            try {
                const res = await instance.post('/api/v1/user/signup', formData, { headers: { 'Content-type': 'multipart/form-data' } })
                if (res.data.success) {
                    toast.success(res.data.message);
                    await new Promise((resolve) => setTimeout(resolve, 1000))
                    setTimeout(() => {
                        navigate('/login');
                    }, 1000);
                }
            } catch (error) {
                toast.error(error.response.data.message)
            }
        }

    }
    // Password
    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }
    const toggleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible((prevState) => !prevState);
    }

    // avatar
    const handlePhotoChange = (event) => {
        console.log("File input changed");
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            console.log("Selected file:", file);
            setFormValues({ ...formValues, profile: file })
            setPhotoName(file.name);
            setFormValues((prevValues) => ({
                ...prevValues,
                profile: file, // This updates the profile field with the selected photo file
            }));
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhotoPreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            console.log("No file selected");
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
                    <form action="" onSubmit={handleSubmit} className='grid gap-5 mx-auto w-[250px] sm:w-[300px] lg:w-[400px]'>
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
                        <div className="py-3 center mx-auto">
                            <div className="text-center w-48">
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
                                    {errors.photo && <p className='text-red-600'>{errors.photo}</p>}
                                </div>
                            </div>
                        </div>
                        <div className="relative z-0 w-full">
                            <input type="name" id="name" name='name' onChange={handleInput} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Full Name</label>
                            {errors.name && <p className='text-red-600'>{errors.name}</p>}
                        </div>
                        <div className="relative z-0 w-full">
                            <input type="email" id="email" name='email' onChange={handleInput} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
                            {errors.email && <p className='text-red-600'>{errors.email}</p>}
                        </div>
                        <div className="relative z-0 w-full">
                            <input type="number" id="number" name='number' onChange={handleInput} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="number" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Phone Number</label>
                            {errors.number && <p className='text-red-600'>{errors.number}</p>}

                        </div>
                        <div className="relative z-0 w-full">
                            <input type={isPasswordVisible ? "text" : "password"} name='password' onChange={handleInput} id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />

                            <div onClick={togglePasswordVisibility} className="absolute right-0 top-0 mt-3 mr-4 cursor-pointer">
                                {isPasswordVisible ? (
                                    <span className="material-symbols-outlined">visibility</span>
                                ) : (
                                    <span className="material-symbols-outlined">visibility_off</span>
                                )}
                            </div>

                            <label htmlFor="password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
                            {errors.password && <p className='text-red-600'>{errors.password}</p>}

                        </div>
                        <div className="relative z-0 w-full">
                            <input type={isConfirmPasswordVisible ? "text" : "password"} name='confirmPassword' onChange={handleInput} id="confirmPassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <div onClick={toggleConfirmPasswordVisibility} className="absolute right-0 top-0 mt-3 mr-4 cursor-pointer">
                                {isConfirmPasswordVisible ? (
                                    <span className="material-symbols-outlined">visibility</span>
                                ) : (
                                    <span className="material-symbols-outlined">visibility_off</span>
                                )}
                            </div>
                            <label htmlFor="confirmPassword" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Confirm Password</label>
                            {errors.confirmPassword && <p className='text-red-600'>{errors.confirmPassword}</p>}

                        </div>
                        <div className="relative grid grid-cols-1 z-0 w-full">
                            <button className='bg-[#043E44] text-slate-200 p-2 rounded-md'>Sign up</button>
                        </div>
                        <div className="relative z-0 w-full text-right">
                            <p>Already have account?<Link className='ps-2' to={'/login'}>Sign in</Link></p>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default SignUp
