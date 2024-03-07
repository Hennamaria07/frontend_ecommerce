import { Carousel } from 'flowbite-react'
import React from 'react'


const MainCarousel = () => {
    return (
        <>
           <div className="customHeight">
      <Carousel slide={false} leftControl=" " className='rounded-none' rightControl=" ">
        <div className='carousel-bg w-full h-full p-5'>
          <div className='md:w-[50%] text-center h-full flex items-center'>
          <div className="product-details">
          <p className='text-xl'>iwatch 14 Series</p>
          <h1 className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi tenetur ut minima aliquam at ratione inventore quasi ex facilis quia illo necessitatibus iusto quisquam natus, debitis amet! Distinctio, nemo nesciunt?</h1>
          </div>
          </div>
          <div></div>
        </div>
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
        </>
    )
}

export default MainCarousel
