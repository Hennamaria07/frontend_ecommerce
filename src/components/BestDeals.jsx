import React from 'react';
import Rectangle from '../assets/images/Rectangle.png'

const BestDeals = () => {
  return (
    <>
    <section className='py-5 px-32 sm:px-16 text-gray-900 dark:text-slate-200'>
        <div className='flex gap-2 items-center '>
            <img src={Rectangle} alt="" />
            <h3>This Month</h3>
        </div>
        <h2 className='font-bold text-4xl py-2'>Best Deals</h2>
        <div className='grid gap-5 grid-cols-12 grid-rows-2'>
            <div className='bg-yellow-500 col-span-5 row-span-2'>jhgfhxgvdf</div>
            <div className='bg-red-500 col-span-2 row-span-1'>jhgfhxgvdf</div>
            <div className='bg-green-500  col-span-2 row-span-1'>jhgfhxgvdf</div>
            <div className='bg-purple-500  col-span-2 row-span-1'>jhgfhxgvdf</div>
            <div className='bg-lime-500 col-span-2 row-span-1'>jhgfhxgvdf</div>
        </div>
    </section>
    </>
  )
}

export default BestDeals
