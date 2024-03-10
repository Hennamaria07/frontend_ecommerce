import React from 'react';
import Rectangle from '../assets/images/Rectangle.png'
import RectangleDark from '../assets/images/RectangleYellow.png'
import { useSelector } from 'react-redux';

const Catagories = () => {
    const theme = useSelector(state => state.mode.theme);
  return (
    <>
     <section className='md:px-32 px-16 sm:pb-10 pb-5'>
                <div className='flex gap-2 pb-2 items-center '>
                    <img src={theme === "light" ? Rectangle : RectangleDark} className='md:h-full h-[25px]' alt="" />
                    <h3 className='text-sm text-[#043E44] dark:text-[#8CB9BD]'>Categories</h3>
                </div>
                <h2 className='font-bold sm:text-4xl  dark:text-white text-2xl pb-5'>Browse By Category</h2>
         <div className='catagories-group grid gap-5 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2'>
            <div className='min-w-[170px] min-h-[145px] cursor-pointer hover:text-white hover:bg-[#043E44] text-[#043E44] dark:text-[#8CB9BD] dark:hover:text-gray-900 dark:hover:bg-[#8CB9BD] rounded-md flex justify-center items-center border-2 border-[#043E44] dark:border-[#8CB9BD]'>
                <h5>Phones</h5>
            </div>
            <div className='min-w-[170px] min-h-[145px] cursor-pointer hover:text-white hover:bg-[#043E44] text-[#043E44] dark:text-[#8CB9BD] dark:hover:text-gray-900 dark:hover:bg-[#8CB9BD] rounded-md flex justify-center items-center border-2 border-[#043E44] dark:border-[#8CB9BD]'>
                <h5>Phones</h5>
            </div>
            <div className='min-w-[170px] min-h-[145px] cursor-pointer hover:text-white hover:bg-[#043E44] text-[#043E44] dark:text-[#8CB9BD] dark:hover:text-gray-900 dark:hover:bg-[#8CB9BD] rounded-md flex justify-center items-center border-2 border-[#043E44] dark:border-[#8CB9BD]'>
                <h5>Phones</h5>
            </div>
            <div className='min-w-[170px] min-h-[145px] cursor-pointer hover:text-white hover:bg-[#043E44] text-[#043E44] dark:text-[#8CB9BD] dark:hover:text-gray-900 dark:hover:bg-[#8CB9BD] rounded-md flex justify-center items-center border-2 border-[#043E44] dark:border-[#8CB9BD]'>
                <h5>Phones</h5>
            </div>
            <div className='min-w-[170px] min-h-[145px] cursor-pointer hover:text-white hover:bg-[#043E44] text-[#043E44] dark:text-[#8CB9BD] dark:hover:text-gray-900 dark:hover:bg-[#8CB9BD] rounded-md flex justify-center items-center border-2 border-[#043E44] dark:border-[#8CB9BD]'>
                <h5>Phones</h5>
            </div>
            <div className='min-w-[170px] min-h-[145px] cursor-pointer hover:text-white hover:bg-[#043E44] text-[#043E44] dark:text-[#8CB9BD] dark:hover:text-gray-900 dark:hover:bg-[#8CB9BD] rounded-md flex justify-center items-center border-2 border-[#043E44] dark:border-[#8CB9BD]'>
                <h5>Phones</h5>
            </div>
            <div className='min-w-[170px] min-h-[145px] cursor-pointer hover:text-white hover:bg-[#043E44] text-[#043E44] dark:text-[#8CB9BD] dark:hover:text-gray-900 dark:hover:bg-[#8CB9BD] rounded-md flex justify-center items-center border-2 border-[#043E44] dark:border-[#8CB9BD]'>
                <h5>Phones</h5>
            </div>
            <div className='min-w-[170px] min-h-[145px] cursor-pointer hover:text-white hover:bg-[#043E44] text-[#043E44] dark:text-[#8CB9BD] dark:hover:text-gray-900 dark:hover:bg-[#8CB9BD] rounded-md flex justify-center items-center border-2 border-[#043E44] dark:border-[#8CB9BD]'>
                <h5>Phones</h5>
            </div>
            <div className='min-w-[170px] min-h-[145px] cursor-pointer hover:text-white hover:bg-[#043E44] text-[#043E44] dark:text-[#8CB9BD] dark:hover:text-gray-900 dark:hover:bg-[#8CB9BD] rounded-md flex justify-center items-center border-2 border-[#043E44] dark:border-[#8CB9BD]'>
                <h5>Phones</h5>
            </div>
            <div className='min-w-[170px] min-h-[145px] cursor-pointer hover:text-white hover:bg-[#043E44] text-[#043E44] dark:text-[#8CB9BD] dark:hover:text-gray-900 dark:hover:bg-[#8CB9BD] rounded-md flex justify-center items-center border-2 border-[#043E44] dark:border-[#8CB9BD]'>
                <h5>Phones</h5>
            </div>
         </div>
            </section>
    </>
  )
}

export default Catagories
