import { Carousel } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import instance from '../utils/axios';
import { Flip, ToastContainer, toast } from 'react-toastify';


const MainCarousel = () => {
  const [banners, setBanners] = useState('');
  useEffect(() => {
    const getAllBanners = async () => {
      try {
        const res = await instance.get('/api/v1/banner/all');
        if(res.data.success) {
          setBanners(res.data.banner);
          // console.log(res.data);
        }
      } catch (error) {
        toast.error(error.response.data.message)
      }
    }
    getAllBanners()
  }, []);
  console.log(`products---> ${banners}`);
  // console.log(products.images[0].url)
  {banners && banners.map((banner) => console.log(banner.image.url))}
    return (
        <>
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
           <div className="pt-[117.6px] h-[100vh] overflow-hidden">
           <Carousel leftControl=" " className='rounded-none' rightControl=" ">
      {banners === '' ? (<h1>Loading....</h1>) : banners.map((banner, index) => (
  <div key={index} className=' w-full h-full'>
    <img src={banner.image.url} alt="..." />
  </div>
))}
        {/* <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." /> */}
      </Carousel>
    </div>
        </>
    )
}

export default MainCarousel
