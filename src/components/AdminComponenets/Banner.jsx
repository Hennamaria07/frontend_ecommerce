import React, { useEffect, useState } from 'react'
import AdinNavbar from './AdinNavbar'
import { useSelector } from 'react-redux';
import instance from '../../utils/axios';
import { Flip, ToastContainer, toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import BannerDelete from './BannerDelete';

const Banner = () => {
    const show = useSelector(state => state.mode.show);
    const [bannerLists, setBannerLists] = useState('');
    const [formValues, setFormValues] = useState({banner: ''} );
    const [errors, setErrors] = useState({});

    const validation = (values) => {
        const errors = {};
        if (values.banner === "") {
            errors.banner = "photo is required";
        }
        return errors;
    }
    const handleInput = (e) => {
        console.log("Field: ", e.target.name, " Value: ", e.target.value);
        console.log(formValues);
        setFormValues({ ...formValues, [e.target.name]: e.target.files[0] })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log('form is submitted');
        // console.log(validation(formValues))
        const validationErrors = validation(formValues);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) { // Check if there are no validation errors
            const formData = new FormData();
            if (formValues.banner) {
                formData.append('banner', formValues.banner);
            }
            try {
                const res = await instance.post('/api/v1/banner/add', formData, {withCredentials:true, headers: { 'Content-type': 'multipart/form-data' } })
                if (res.data.success) {
                    toast.success(res.data.message);
                }
            } catch (error) {
                toast.error(error.response.data.message)
            }
        }

    }

    useEffect(() => {
            const getBanners = async() => {
                try {
                    const res = await instance.get('/api/v1/banner/all', {withCredentials: true});
                    if(res.data.success) {
                        setBannerLists(res.data.banner);
                        toast.success(res.data.message);
                    }
                } catch (error) {
                    toast.error(error.response.data.message)
                }
            }
            getBanners();
    }, [bannerLists])
    return (
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

                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="banner">Upload file</label>
                            <input name='banner' onChange={handleInput} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="banner" type="file" />
                            {errors.banner && <p>{errors.banner}</p>}
                        </div>
                        <div className="relative">
                <button className='p-2 bg-[#8CB9BD] dark:bg-[#043E44] w-full'>Add</button>
              </div>
                    </form>
                </div>
                <div className="grid gap-5 px-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
      {bannerLists && bannerLists.map((banner) => (

<div class="max-w-sm bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div>
    <a href="#">
        <img class="rounded-t-lg" src={banner.image.url} className='w-full h-40' alt="banner image" />
    </a>
    <div class="p-5 grid grid-cols-3">
       <div>
       <NavLink to={`/admin/banner/${banner._id}`} className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                View
              </NavLink>
       </div>
       <div>
       <NavLink to={`/admin/banner/edit/${banner._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
             </NavLink>
       </div>
       <div>
       <NavLink className="font-medium text-red-600 hover:underline dark:text-red-500">
                <BannerDelete id={banner._id}/>
              </NavLink>
       </div>
    </div>
    </div>
</div>
))}
    </div>
            </div>
        </section>
    )

}

export default Banner
