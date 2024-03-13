import React, { useEffect, useState } from 'react'
import AdinNavbar from './AdinNavbar'
import { useSelector } from 'react-redux';
import instance from '../../utils/axios';
import { Flip, ToastContainer, toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import BannerDelete from './BannerDelete';
import DeleteCategory from './DeleteCategory';

const AddCategories = () => {
    const show = useSelector(state => state.mode.show);
    const [categoryLists, setCategoryLists] = useState('');
    const [formValues, setFormValues] = useState({ icon: '', name: '' });
    const [errors, setErrors] = useState({});

    const validation = (values) => {
        const errors = {};
        const nameRE = /^[a-zA-Z]{5,}(\s[a-zA-Z]+)*$/;
        if (values.icon === "") {
            errors.icon = "photo is required";
        }
        if (!values.name || !nameRE.test(values.name)) {
            errors.name = "Invalid category";
        }
        return errors;
    }
    const handleIcon = (e) => {
        console.log("Field: ", e.target.name, " Value: ", e.target.value);
        console.log(formValues);
        setFormValues({ ...formValues, [e.target.name]: e.target.files[0] })
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
        if (Object.keys(validationErrors).length === 0) { // Check if there are no validation errors
            const formData = new FormData();
            formData.append('name', formValues.name);
            formData.append('icon', formValues.icon);
            try {
                const res = await instance.post('/api/v1/category/create', formData, { withCredentials: true, headers: { 'Content-type': 'multipart/form-data' } })
                if (res.data.success) {
                    toast.success(res.data.message);
                }
            } catch (error) {
                toast.error(error.response.data.message)
            }
        }

    }

    useEffect(() => {
        const getCategorys = async () => {
            try {
                const res = await instance.get('/api/v1/category/all-categories', { withCredentials: true });
                // console.log(res.data);
                if (res.data.success) {
                    setCategoryLists(res.data.category);
                    toast.success(res.data.message);
                }
            } catch (error) {
                toast.error(error.response.data.message)
            }
        }
        getCategorys();
    }, [categoryLists])
    return (
        <>
            <section className="w-full h-full min-h-[100vh] lg:bg-white lg:dark:bg-[#121212ed]">
                <AdinNavbar />
                <div className={`${show ? 'w-[calc(100vw-256px)] relative top-0 z-8 pt-[64px] left-[256px] bg-white dark:bg-[#121212ed] lg:bg-transparent lg:dark:bg-transparent min-h-[100vh]' : 'lg:w-[calc(100vw-256px)] w-full absolute top-0 z-100 lg:left-[256px] pt-[64px] bg-white dark:bg-[#121212ed] lg:bg-transparent lg:dark:bg-transparent min-h-[100vh]'}`}>

                    <div className="p-5">
                        <form action="#" onSubmit={handleSubmit} className='grid gap-5 pb-5'>
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
                            <div className="relative">
                                <input type="text" id="name" name='name' onChange={handleInput} className="block px-2.5 pb-2.5 pt-4 w-full   text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-600 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-300 peer" placeholder=" " />
                                <label htmlFor="name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-2 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-gray-800 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Category Name</label>
                                {errors.name && <p className='text-red-600'>{errors?.name}</p>}
                            </div>
                            <div className="relative">

                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="icon">Upload file</label>
                                <input name='icon' onChange={handleIcon} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="icon" type="file" />
                                {errors.icon && <p  className='text-red-600'>{errors.icon}</p>}
                            </div>
                            <div className="relative">
                                <button className='p-2 bg-[#8CB9BD] dark:bg-[#043E44] w-full'>Add</button>
                            </div>
                        </form>
                    </div>
                    <div className="grid gap-5 px-5 lg:grid-cols-5 md:grid-cols-4 grid-cols-2">
                        {categoryLists && categoryLists.map((category) => (

                            <div class="max-w-sm bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div>
                                    <a href="#">
                                        <img class="rounded-t-lg" src={category.iconImage.url} className='w-full h-40' alt="category image" />
                                    </a>
                                    <div class="p-5 flex justify-evenly">
                                        
                                        <div>
                                            <NavLink to={`/admin/category/edit/${category._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                                Edit
                                            </NavLink>
                                        </div>
                                        <div>
                                            <NavLink className="font-medium text-red-600 hover:underline dark:text-red-500">
                                               <DeleteCategory id={category._id}/>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddCategories
