import React from 'react'
import Rectangle from '../assets/images/Rectangle.png'
import RectangleDark from '../assets/images/RectangleYellow.png'
import delivery from '../assets/images/delivery.png'
import deliveryDark from '../assets/images/deliveryDark.png'
import payment from '../assets/images/payment.png'
import paymentDark from '../assets/images/paymentDark.png'
import warrently from '../assets/images/warrently.png'
import warrentlyDark from '../assets/images/warrentlyDark.png'
import support from '../assets/images/support.png'
import supportDark from '../assets/images/supportDark.png'
import { useSelector } from 'react-redux';

const Services = () => {
    const theme = useSelector(state => state.mode.theme);
  return (
    <>
    <section className=' sm:pb-10 pb-5 px-1'>
                <div className='md:px-32 px-16'>
                    <div className=' flex gap-2 pb-2 items-center'>
                    <img src={theme === "light" ? Rectangle : RectangleDark} className='md:h-full h-[25px]' alt="" />
                    <h3 className='text-sm text-[#043E44] dark:text-[#8CB9BD]'>Our services</h3>
                    </div>
                <h2 className='font-bold sm:text-4xl  dark:text-white text-2xl pb-5'>Why Choose Us</h2>
                </div>
         <div className="min-h-[266px] p-5 md:grid-cols-4 md:px-32 px-16 grid sm:grid-cols-2 gap-5 place-content-center w-full border border-gray-200 shadow text-gray-900 dark:text-white bg-white dark:bg-gray-800">
            <div className='grid place-items-center'>
                <img src={theme === "light" ? delivery: deliveryDark} alt="delivery icon" />
            <p className='py-2'>Free Delivery</p>
            </div>
            <div className='grid place-items-center'>
                <img src={theme === "light" ? payment: paymentDark} alt="delivery icon" />
            <p className='py-2'>Payment Method</p>
            </div>
            <div className='grid place-items-center'>
                <img src={theme === "light" ? warrently: warrentlyDark} alt="delivery icon" />
            <p className='py-2'>Warranty</p>
            </div>
            <div className='grid place-items-center'>
                <img src={theme === "light" ? support: supportDark} alt="delivery icon" />
            <p className='py-2'>Customer Support</p>
            </div>
         </div>
            </section>
    
    </>
  )
}

export default Services
